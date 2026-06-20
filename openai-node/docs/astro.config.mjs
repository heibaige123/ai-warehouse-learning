// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import fs from 'node:fs';
import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';

/** Strip ZH/EN locale sections from a single markdown file */
async function stripFile(fp, isZh) {
  let code = await readFile(fp, 'utf-8');
  if (isZh) {
    code = code.replace(/\n### EN\n[\s\S]*?(?=\n## |\n### |\n---|$)/g, '');
    code = code.replace(/\*\*EN:\*\*\s*[^\n]*\n?/g, '');
    code = code.replace(/\*\*ZH:\*\*\s*/g, '');
    code = code.replace(/\n### (?:ZH|EN)\n(?=\n*(?:## |### |---|$))/g, '');
    code = code.replace(/^### ZH\n/gm, '');
  } else {
    code = code.replace(/\n### ZH\n[\s\S]*?(?=\n## |\n### |\n---|$)/g, '');
    code = code.replace(/\*\*ZH:\*\*\s*[^\n]*\n?/g, '');
    code = code.replace(/\*\*EN:\*\*\s*/g, '');
    code = code.replace(/\n### (?:ZH|EN)\n(?=\n*(?:## |### |---|$))/g, '');
    code = code.replace(/^### EN\n/gm, '');
  }
  code = code.replace(/\n{3,}/g, '\n\n');
  await writeFile(fp, code, 'utf-8');
}

/** Strip ZH/EN locale sections from markdown files (parallel + async) */
async function stripMarkdownDir(dir, isZh) {
  if (!fs.existsSync(dir)) return;
  const tasks = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      tasks.push(stripMarkdownDir(fp, isZh));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      tasks.push(stripFile(fp, isZh));
    }
  }
  await Promise.all(tasks);
}

// https://astro.build/config
export default defineConfig({
	integrations: [
    {
      name: 'locale-strip',
      hooks: {
        'astro:config:done': async () => {
          // TypeDoc only generates English API docs (single run);
          // copy to Chinese directory and strip locale markers in parallel
          const apiDir = path.resolve('src/content/docs/api');
          const zhApiDir = path.resolve('src/content/docs/zh/api');
          if (fs.existsSync(apiDir)) {
            fs.cpSync(apiDir, zhApiDir, { recursive: true });
            await Promise.all([
              stripMarkdownDir(apiDir, false),
              stripMarkdownDir(zhApiDir, true),
            ]);
          }
        }
      }
    },
		starlight({
			title: 'OpenAI Node API',
			locales: {
				root: { label: 'English', lang: 'en' },
				zh: { label: '中文', lang: 'zh-CN' }
			},
			plugins: [
				starlightTypeDoc({
					entryPoints: ['../src/index.ts'],
					tsconfig: '../tsconfig.json',
					output: 'api',
					typeDoc: {
						excludePrivate: true,
						excludeInternal: true,
						excludeExternals: true,
						skipErrorChecking: true,
					}
				}),
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/openai/openai-node' }],
			sidebar: [
				typeDocSidebarGroup
			],
		}),
	],
});
