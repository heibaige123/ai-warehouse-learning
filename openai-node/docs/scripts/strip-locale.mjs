/**
 * Pre-build script: strip locale sections from starlight-typedoc generated markdown.
 * 预构建脚本：从 starlight-typedoc 生成的 markdown 中剥离语言部分
 *
 * - EN docs (content/docs/api/): remove ### ZH sections, keep ### EN
 * - ZH docs (content/docs/zh/api/): remove ### EN sections, keep ### ZH
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.resolve(__dirname, 'src/content/docs');

function processDir(dir, isZh) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fp, isZh);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      let code = fs.readFileSync(fp, 'utf-8');
      let newCode = stripLocale(code, isZh);
      if (code !== newCode) {
        fs.writeFileSync(fp, newCode, 'utf-8');
        console.log(`  ✓ ${path.relative(DOCS_DIR, fp)} (${isZh ? 'zh' : 'en'})`);
      }
    }
  }
}

function stripLocale(code, isZh) {
  let result = code;

  if (isZh) {
    // Remove ### EN blocks: heading + content until next heading (## or ###) or separator (---)
    result = result.replace(/\n### EN\n(?:[\s\S]*?)(?=\n(?:## |### |---)|$)/g, '');
    // Remove inline **EN:** tags
    result = result.replace(/\*\*EN:\*\*\s*[^\n]*\n?/g, '');
    // Remove **ZH:** prefix from remaining text
    result = result.replace(/\*\*ZH:\*\*\s*/g, '');
    // Clean up empty ZH headings without content
    result = result.replace(/\n### ZH\n(?=\n*(?:## |### |---|$))/g, '');
  } else {
    // Remove ### ZH blocks
    result = result.replace(/\n### ZH\n(?:[\s\S]*?)(?=\n(?:## |### |---)|$)/g, '');
    // Remove inline **ZH:** tags
    result = result.replace(/\*\*ZH:\*\*\s*[^\n]*\n?/g, '');
    // Remove **EN:** prefix
    result = result.replace(/\*\*EN:\*\*\s*/g, '');
    // Clean up empty EN headings
    result = result.replace(/\n### EN\n(?=\n*(?:## |### |---|$))/g, '');
  }

  // Clean up multiple blank lines
  result = result.replace(/\n{3,}/g, '\n\n');

  return result;
}

console.log('🔧 Stripping locale sections from generated markdown...');
processDir(path.join(DOCS_DIR, 'api'), false);
processDir(path.join(DOCS_DIR, 'zh/api'), true);
console.log('✅ Done.');
