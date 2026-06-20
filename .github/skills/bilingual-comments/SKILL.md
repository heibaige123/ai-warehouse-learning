---
name: bilingual-comments
description: 'Write bilingual Chinese/English code comments using ### ZH / ### EN sections and **ZH:** / **EN:** inline tags. Use when: generating multi-language API docs from source code, adding bilingual JSDoc comments, adapting code for Astro Starlight + starlight-typedoc documentation generation, or maintaining dual-language code annotations.'
user-invocable: true
---

# Bilingual Code Comment Convention

## When to Use

- Writing JSDoc / TSDoc comments that need to generate both Chinese and English API documentation from the same source
- Adding `@param`, `@returns`, `@throws` tags with bilingual descriptions
- Working with Astro Starlight + `starlight-typedoc` for multi-language doc site generation
- Maintaining codebases that serve both Chinese and English speaking developers

## Two Formats

### 1. Description blocks — `### ZH` / `### EN`

For class, method, function, or variable descriptions:

```typescript
/**
 * ### ZH
 * 中文描述第一行
 * 中文描述第二行（可选）
 *
 * ### EN
 * English description line 1
 * English description line 2 (optional)
 *
 * ---
 */
```

Rules:
- `### ZH` always comes **before** `### EN`
- A blank line separates ZH from EN
- `---` ends the block (required)
- Only provide what exists — if only Chinese, omit `### EN` entirely:
  ```typescript
  /**
   * ### ZH
   * 仅中文描述
   *
   * ---
   */
  ```

### 2. Inline tags — `**ZH:**` / `**EN:**`

For `@param`, `@returns`, `@throws` descriptions:

```typescript
/**
 * ### ZH
 * 启动自动化代码热更新（HMR）核心服务器。
 *
 * ### EN
 * Starts the core automation server for Hot Module Replacement (HMR).
 *
 * ---
 *
 * @param config -
 * **ZH:** 包含端口号和代理设置的配置对象 |
 * **EN:** Configuration object containing port and proxy settings.
 */
```

Rules:
- Use `**ZH:** 中文 | **EN:** English` on **separate lines** (pipe at line end)
- Only add the tag if translation exists — pure English params need no marker
- If only Chinese: `**ZH:** 仅中文描述`

## What NOT to do

- ❌ Do NOT use `**ZH:**` / `**EN:**` as heading prefixes inside `###` blocks
- ❌ Do NOT nest `### ZH` inside `### EN` or vice versa
- ❌ Do NOT leave `### ZH` or `### EN` empty (skip the section entirely)
- ❌ Do NOT write standalone `**ZH:** text | **EN:** text` on one line (use line breaks)

## Real examples

### Class with bilingual `@param`

```typescript
/**
 * ### ZH
 * 用于与 Azure OpenAI API 交互的 API 客户端。
 *
 * ### EN
 * API Client for interfacing with the Azure OpenAI API.
 *
 */
export class AzureOpenAI extends OpenAI { ... }
```

### Object parameters with bilingual properties

```typescript
/**
 * ### ZH
 * 创建新的聊天补全请求。
 *
 * ### EN
 * Creates a new chat completion request.
 *
 * ---
 *
 * @param params -
 * **ZH:** 请求参数对象 |
 * **EN:** Request parameters object
 */
async function createChatCompletion(params: {
  /**
    *
    * ### ZH
    * 模型名称
    *
    * ### EN
    * The model name
    */
  model: string;

  /**
    *
    * ### ZH
    * 对话消息列表
    *
    * ### EN
    * List of conversation messages
    */
  messages: Array<{ 
    /**
      *
      * ### ZH
      * 消息角色，通常为 "user"、"assistant" 或 "system"
      *
      * ### EN
      * Message role, typically "user", "assistant", or "system"
      */
    role: string; 
    /**
      *
      * ### ZH
      * 消息内容
      *
      * ### EN
      * Message content
      */
    content: string 
  }>;

  /**
    *
    * ### ZH
    * 采样温度，范围 0-2
    *
    * ### EN
    * Sampling temperature, range 0-2
    */
  temperature?: number;

  /**
    *
    * ### ZH
    * 最大生成 Token 数
    *
    * ### EN
    * Maximum number of tokens to generate
    */
  maxTokens?: number;
}) { ... }
```

### Function (callback) parameters

```typescript
/**
 * ### ZH
 * 流式传输聊天完成结果。
 *
 * ### EN
 * Stream chat completion results.
 *
 * ---
 *
 * @param onChunk -
 * **ZH:** 每个数据块到达时的回调函数 |
 * **EN:** Callback invoked when each data chunk arrives
 * @param onDone -
 * **ZH:** 流结束时的回调函数 |
 * **EN:** Callback invoked when the stream ends
 * @param onError -
 * **ZH:** 发生错误时的回调函数 |
 * **EN:** Callback invoked when an error occurs
 */
function streamChatCompletion(
  onChunk: (chunk: string) => void,
  onDone: () => void,
  onError: (err: Error) => void,
): void { ... }
```

### Function-typed param with object callback

```typescript
/**
 * ### ZH
 * 批量处理数据项。
 *
 * ### EN
 * Process data items in batch.
 *
 * ---
 *
 * @param items -
 * **ZH:** 待处理的数据项数组 |
 * **EN:** Array of data items to process
 * @param options -
 * **ZH:** 处理选项 |
 * **EN:** Processing options
 */
async function processBatch<T>(
  items: T[],
  options: {
    /**
      * ### ZH
      * 并发数
      *
      * ### EN
      * Concurrency level
      */
    concurrency?: number;

    /**
      * ### ZH
      * 进度回调，接收已处理和总数
      *
      * ### EN
      * Progress callback receiving processed count and total
      */
    onProgress?: (done: number, total: number) => void;

    /**
      * ### ZH
      * 单个项完成回调，接收处理结果
      *
      * ### EN
      * Callback for each completed item, receiving the result
      */

    onItemComplete?: (result: T, index: number) => void;
  },
): Promise<void> { ... }
```

### Internal function (Chinese only)

```typescript
/**
 * ### ZH
 * 抛出格式错误异常
 */
const throwMalformedError = (msg: string) => { ... };
```

### Export function with bilingual description

```typescript
/**
 * ### ZH
 * 部分解析 JSON（使用此函数处理格式错误的 JSON 时行为未定义）
 *
 * ### EN
 * using this function with malformed JSON is undefined behavior
 */
const partialParse = (input: string) => parseJSON(input, Allow.ALL ^ Allow.NUM);
```

## Integration

This convention pairs with a **pre-build stripping tool** (e.g. an Astro integration hook at `astro:config:done`) that:

1. For **English output** (`/api/`): removes `### ZH` sections and `**ZH:**` tags
2. For **Chinese output** (`/zh/api/`): removes `### EN` sections and `**EN:**` tags
3. Removes leftover `### ZH` / `### EN` heading lines after stripping
4. Cleans up multiple blank lines

The `### ZH` / `### EN` / `---` markers are **never** visible in the final docs.

## Procedure

1. Identify the source file that needs bilingual documentation
2. For top-level descriptions (class, method, function), use `### ZH` / `### EN` block format
3. For parameter and return type descriptions, use `**ZH:**` / `**EN:**` inline tags
4. Always end `###` blocks with `---`
5. Run the pre-build stripping tool to generate language-specific output
