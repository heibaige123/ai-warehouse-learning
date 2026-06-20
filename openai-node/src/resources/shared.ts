// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * 所有可用模型的联合类型，包含 `ChatModel` 以及 o-series、computer-use、codex 等专用模型。
 * 也支持任意字符串以兼容未来新增的模型标识符。
 *
 * Union type of all available models, including `ChatModel` as well as o-series, computer-use,
 * codex and other specialized models. Also accepts arbitrary strings for forward compatibility.
 *
 * @example
 * ```ts
 * const model: AllModels = 'gpt-5.4';
 * const model2: AllModels = 'o3-pro-2025-06-10';
 * ```
 */
export type AllModels =
  | (string & {})
  | ChatModel
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max';

/**
 * Chat 模型标识符的联合类型，涵盖从 GPT-3.5 到 GPT-5.4 的所有 chat 系列模型。
 * 每个字面量即 OpenAI API 中使用的模型名称。
 *
 * Union type of Chat model identifiers, covering all chat series models from GPT-3.5 to GPT-5.4.
 * Each literal is the model name used in the OpenAI API.
 *
 * @example
 * ```ts
 * const model: ChatModel = 'gpt-5.4-mini';
 * const legacyModel: ChatModel = 'gpt-3.5-turbo-1106';
 * ```
 */
export type ChatModel =
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  | 'gpt-5.4-mini-2026-03-17'
  | 'gpt-5.4-nano-2026-03-17'
  | 'gpt-5.3-chat-latest'
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613';

/**
 * 用于将指定属性键与给定值进行比对的过滤器，支持多种比较操作。
 *
 * A filter used to compare a specified attribute key to a given value using a
 * defined comparison operation.
 *
 * @example
 * ```ts
 * const filter: ComparisonFilter = {
 *   key: 'score',
 *   type: 'gte',
 *   value: 80,
 * };
 * ```
 */
export interface ComparisonFilter {
  /**
   * 要比较的属性键名。
   *
   * The key to compare against the value.
   */
  key: string;

  /**
   * 比较操作符：`eq`（等于）、`ne`（不等于）、`gt`（大于）、`gte`（大于等于）、
   * `lt`（小于）、`lte`（小于等于）、`in`（包含于）、`nin`（不包含于）。
   *
   * Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`,
   * `nin`.
   *
   * - `eq`: equals
   * - `ne`: not equal
   * - `gt`: greater than
   * - `gte`: greater than or equal
   * - `lt`: less than
   * - `lte`: less than or equal
   * - `in`: in
   * - `nin`: not in
   */
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin';

  /**
   * 与属性键比较的值，支持字符串、数字、布尔值或数组类型。
   *
   * The value to compare against the attribute key; supports string, number, or
   * boolean types.
   */
  value: string | number | boolean | Array<string | number>;
}

/**
 * 使用 `and` 或 `or` 组合多个过滤器的复合过滤器。
 *
 * Combine multiple filters using `and` or `or`.
 *
 * @example
 * ```ts
 * const compound: CompoundFilter = {
 *   type: 'and',
 *   filters: [
 *     { key: 'score', type: 'gte', value: 80 },
 *     { key: 'status', type: 'eq', value: 'active' },
 *   ],
 * };
 * ```
 */
export interface CompoundFilter {
  /**
   * 要组合的过滤器数组。每个元素可以是 `ComparisonFilter` 或 `CompoundFilter`。
   *
   * Array of filters to combine. Items can be `ComparisonFilter` or
   * `CompoundFilter`.
   */
  filters: Array<ComparisonFilter | unknown>;

  /**
   * 组合操作类型：`and`（与）或 `or`（或）。
   *
   * Type of operation: `and` or `or`.
   */
  type: 'and' | 'or';
}

/**
 * 自定义工具的输入格式。默认为不受约束的自由文本。
 * 可以是 `Text`（自由文本）或 `Grammar`（语法定义）。
 *
 * The input format for the custom tool. Default is unconstrained text.
 *
 * @example
 * ```ts
 * const textInput: CustomToolInputFormat = { type: 'text' };
 * const grammarInput: CustomToolInputFormat = {
 *   type: 'grammar',
 *   definition: '...',
 *   syntax: 'lark',
 * };
 * ```
 */
export type CustomToolInputFormat = CustomToolInputFormat.Text | CustomToolInputFormat.Grammar;

export namespace CustomToolInputFormat {
  /**
   * 不受约束的自由文本格式。
   *
   * Unconstrained free-form text.
   */
  export interface Text {
    /**
     * 不受约束的文本格式，值始终为 `text`。
     *
     * Unconstrained text format. Always `text`.
     */
    type: 'text';
  }

  /**
   * 用户自定义的语法定义。
   *
   * A grammar defined by the user.
   */
  export interface Grammar {
    /**
     * 语法定义内容。
     *
     * The grammar definition.
     */
    definition: string;

    /**
     * 语法定义的语法类型，取值为 `lark` 或 `regex`。
     *
     * The syntax of the grammar definition. One of `lark` or `regex`.
     */
    syntax: 'lark' | 'regex';

    /**
     * 语法格式，值始终为 `grammar`。
     *
     * Grammar format. Always `grammar`.
     */
    type: 'grammar';
  }
}

/**
 * API 返回的错误对象，包含错误码、消息、参数和类型信息。
 *
 * Error object returned by the API, containing error code, message, parameter and type.
 *
 * @example
 * ```ts
 * const err: ErrorObject = {
 *   code: 'invalid_api_key',
 *   message: 'Incorrect API key provided',
 *   param: null,
 *   type: 'invalid_request_error',
 * };
 * ```
 */
export interface ErrorObject {
  code: string | null;

  message: string;

  param: string | null;

  type: string;
}

/**
 * 函数调用（function calling）中函数定义的描述结构。
 *
 * Defines a function that the model can call during function calling.
 *
 * @example
 * ```ts
 * const fn: FunctionDefinition = {
 *   name: 'get_weather',
 *   description: '获取指定城市的天气信息',
 *   parameters: {
 *     type: 'object',
 *     properties: {
 *       city: { type: 'string', description: '城市名' },
 *     },
 *     required: ['city'],
 *   },
 * };
 * ```
 */
export interface FunctionDefinition {
  /**
   * 要调用的函数名。只能包含 a-z、A-Z、0-9、下划线和短划线，最大长度 64。
   *
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
   * underscores and dashes, with a maximum length of 64.
   */
  name: string;

  /**
   * 描述函数功能，模型据此选择何时及如何调用该函数。
   *
   * A description of what the function does, used by the model to choose when and
   * how to call the function.
   */
  description?: string;

  /**
   * 函数接受的参数，以 JSON Schema 对象描述。
   * 省略 `parameters` 表示定义一个无参数的函数。
   *
   * The parameters the functions accepts, described as a JSON Schema object. See the
   * [guide](https://platform.openai.com/docs/guides/function-calling) for examples,
   * and the
   * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
   * documentation about the format.
   *
   * Omitting `parameters` defines a function with an empty parameter list.
   */
  parameters?: FunctionParameters;

  /**
   * 是否启用严格 schema 遵循。设为 true 时，模型将严格按照 `parameters` 中的定义生成调用。
   * `strict` 为 `true` 时仅支持部分 JSON Schema 特性。
   *
   * Whether to enable strict schema adherence when generating the function call. If
   * set to true, the model will follow the exact schema defined in the `parameters`
   * field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn
   * more about Structured Outputs in the
   * [function calling guide](https://platform.openai.com/docs/guides/function-calling).
   */
  strict?: boolean | null;
}

/**
 * 函数接受的参数，以 JSON Schema 对象描述。
 * 省略 `parameters` 表示定义一个无参数的函数。
 *
 * The parameters the functions accepts, described as a JSON Schema object. See the
 * [guide](https://platform.openai.com/docs/guides/function-calling) for examples,
 * and the
 * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
 * documentation about the format.
 *
 * Omitting `parameters` defines a function with an empty parameter list.
 *
 * @example
 * ```ts
 * const params: FunctionParameters = {
 *   type: 'object',
 *   properties: {
 *     location: { type: 'string', description: '城市和省份，例如：北京, 朝阳区' },
 *     unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
 *   },
 *   required: ['location'],
 * };
 * ```
 */
export type FunctionParameters = { [key: string]: unknown };

/**
 * 可附加到对象上的一组最多 16 个键值对，以结构化格式存储对象的附加信息。
 * 键为字符串，最大长度 64；值为字符串，最大长度 512。
 *
 * Set of 16 key-value pairs that can be attached to an object. This can be useful
 * for storing additional information about the object in a structured format, and
 * querying for objects via API or the dashboard.
 *
 * Keys are strings with a maximum length of 64 characters. Values are strings with
 * a maximum length of 512 characters.
 *
 * @example
 * ```ts
 * const meta: Metadata = {
 *   department: 'engineering',
 *   project: 'openai-sdk',
 * };
 * ```
 */
export type Metadata = { [key: string]: string };

/**
 * OAuth 授权错误码联合类型。目前支持 `invalid_grant`、`invalid_subject_token` 以及任意字符串。
 *
 * OAuth authorization error code union type. Currently supports `invalid_grant`,
 * `invalid_subject_token`, and arbitrary strings.
 *
 * @example
 * ```ts
 * const code: OAuthErrorCode = 'invalid_grant';
 * ```
 */
export type OAuthErrorCode = 'invalid_grant' | 'invalid_subject_token' | (string & {});

/**
 * **仅限 gpt-5 和 o-series 模型**
 *
 * 推理模型（reasoning models）的配置选项。
 *
 * **gpt-5 and o-series models only**
 *
 * Configuration options for
 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
 *
 * @example
 * ```ts
 * const reasoning: Reasoning = {
 *   effort: 'medium',
 *   summary: 'concise',
 * };
 * ```
 */
export interface Reasoning {
  /**
   * 限制推理模型的推理力度。支持的值为 `none`、`minimal`、`low`、`medium`、`high`、`xhigh`。
   * 降低推理力度可以得到更快的响应速度和更少的推理 token 消耗。
   *
   * - `gpt-5.1` 默认为 `none`（不执行推理），支持的值为 `none`、`low`、`medium`、`high`。
   * - `gpt-5.1` 之前的所有模型默认为 `medium`，且不支持 `none`。
   * - `gpt-5-pro` 默认为（且仅支持）`high`。
   * - `gpt-5.1-codex-max` 之后的模型支持 `xhigh`。
   *
   * Constrains effort on reasoning for
   * [reasoning models](https://platform.openai.com/docs/guides/reasoning). Currently
   * supported values are `none`, `minimal`, `low`, `medium`, `high`, and `xhigh`.
   * Reducing reasoning effort can result in faster responses and fewer tokens used
   * on reasoning in a response.
   *
   * - `gpt-5.1` defaults to `none`, which does not perform reasoning. The supported
   *   reasoning values for `gpt-5.1` are `none`, `low`, `medium`, and `high`. Tool
   *   calls are supported for all reasoning values in gpt-5.1.
   * - All models before `gpt-5.1` default to `medium` reasoning effort, and do not
   *   support `none`.
   * - The `gpt-5-pro` model defaults to (and only supports) `high` reasoning effort.
   * - `xhigh` is supported for all models after `gpt-5.1-codex-max`.
   */
  effort?: ReasoningEffort | null;

  /**
   * @deprecated **已废弃：请使用 `summary` 替代。**
   *
   * 模型推理过程的摘要，有助于调试和理解模型的推理过程。
   * 取值为 `auto`、`concise` 或 `detailed`。
   *
   * @deprecated **Deprecated:** use `summary` instead.
   *
   * A summary of the reasoning performed by the model. This can be useful for
   * debugging and understanding the model's reasoning process. One of `auto`,
   * `concise`, or `detailed`.
   */
  generate_summary?: 'auto' | 'concise' | 'detailed' | null;

  /**
   * 模型推理过程的摘要，有助于调试和理解模型的推理过程。
   * 取值为 `auto`、`concise` 或 `detailed`。
   * `concise` 适用于 `computer-use-preview` 模型及 `gpt-5` 之后的所有推理模型。
   *
   * A summary of the reasoning performed by the model. This can be useful for
   * debugging and understanding the model's reasoning process. One of `auto`,
   * `concise`, or `detailed`.
   *
   * `concise` is supported for `computer-use-preview` models and all reasoning
   * models after `gpt-5`.
   */
  summary?: 'auto' | 'concise' | 'detailed' | null;
}

/**
 * 限制推理模型的推理力度。降低推理力度可以更快地获得响应，减少推理 token 消耗。
 *
 * Constrains effort on reasoning for
 * [reasoning models](https://platform.openai.com/docs/guides/reasoning). Currently
 * supported values are `none`, `minimal`, `low`, `medium`, `high`, and `xhigh`.
 * Reducing reasoning effort can result in faster responses and fewer tokens used
 * on reasoning in a response.
 *
 * - `gpt-5.1` defaults to `none`, which does not perform reasoning. The supported
 *   reasoning values for `gpt-5.1` are `none`, `low`, `medium`, and `high`. Tool
 *   calls are supported for all reasoning values in gpt-5.1.
 * - All models before `gpt-5.1` default to `medium` reasoning effort, and do not
 *   support `none`.
 * - The `gpt-5-pro` model defaults to (and only supports) `high` reasoning effort.
 * - `xhigh` is supported for all models after `gpt-5.1-codex-max`.
 *
 * @example
 * ```ts
 * const effort: ReasoningEffort = 'medium';
 * const effort2: ReasoningEffort = null; // 让模型使用默认值
 * ```
 */
export type ReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | null;

/**
 * JSON 对象响应格式。一种较旧的生成 JSON 响应的方法。
 * 对于支持它的模型，推荐使用 `json_schema` 替代。
 * 注意：模型不会在没有 system 或 user 消息指示的情况下生成 JSON。
 *
 * JSON object response format. An older method of generating JSON responses. Using
 * `json_schema` is recommended for models that support it. Note that the model
 * will not generate JSON without a system or user message instructing it to do so.
 *
 * @example
 * ```ts
 * const format: ResponseFormatJSONObject = { type: 'json_object' };
 * ```
 */
export interface ResponseFormatJSONObject {
  /**
   * 响应格式类型，值始终为 `json_object`。
   *
   * The type of response format being defined. Always `json_object`.
   */
  type: 'json_object';
}

/**
 * JSON Schema 响应格式，用于生成结构化的 JSON 响应。
 *
 * JSON Schema response format. Used to generate structured JSON responses. Learn
 * more about
 * [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs).
 *
 * @example
 * ```ts
 * const format: ResponseFormatJSONSchema = {
 *   type: 'json_schema',
 *   json_schema: {
 *     name: 'math_reasoning',
 *     schema: {
 *       type: 'object',
 *       properties: {
 *         steps: { type: 'array', items: { type: 'string' } },
 *         answer: { type: 'string' },
 *       },
 *       required: ['steps', 'answer'],
 *     },
 *   },
 * };
 * ```
 */
export interface ResponseFormatJSONSchema {
  /**
   * 结构化输出配置选项，包含 JSON Schema 定义。
   *
   * Structured Outputs configuration options, including a JSON Schema.
   */
  json_schema: ResponseFormatJSONSchema.JSONSchema;

  /**
   * 响应格式类型，值始终为 `json_schema`。
   *
   * The type of response format being defined. Always `json_schema`.
   */
  type: 'json_schema';
}

export namespace ResponseFormatJSONSchema {
  /**
   * 结构化输出配置选项，包含 JSON Schema 定义。
   *
   * Structured Outputs configuration options, including a JSON Schema.
   */
  export interface JSONSchema {
    /**
     * 响应格式名称。只能包含 a-z、A-Z、0-9、下划线和短划线，最大长度 64。
     *
     * The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores
     * and dashes, with a maximum length of 64.
     */
    name: string;

    /**
     * 响应格式的用途描述，模型据此决定如何按该格式响应。
     *
     * A description of what the response format is for, used by the model to determine
     * how to respond in the format.
     */
    description?: string;

    /**
     * 响应格式的 schema，以 JSON Schema 对象描述。
     *
     * The schema for the response format, described as a JSON Schema object. Learn how
     * to build JSON schemas [here](https://json-schema.org/).
     */
    schema?: { [key: string]: unknown };

    /**
     * 是否在生成输出时启用严格 schema 遵循。设为 true 时，模型将始终遵循 schema 定义。
     * `strict` 为 `true` 时仅支持部分 JSON Schema 特性。
     *
     * Whether to enable strict schema adherence when generating the output. If set to
     * true, the model will always follow the exact schema defined in the `schema`
     * field. Only a subset of JSON Schema is supported when `strict` is `true`. To
     * learn more, read the
     * [Structured Outputs guide](https://platform.openai.com/docs/guides/structured-outputs).
     */
    strict?: boolean | null;
  }
}

/**
 * 默认文本响应格式，用于生成普通文本响应。
 *
 * Default response format. Used to generate text responses.
 *
 * @example
 * ```ts
 * const format: ResponseFormatText = { type: 'text' };
 * ```
 */
export interface ResponseFormatText {
  /**
   * 响应格式类型，值始终为 `text`。
   *
   * The type of response format being defined. Always `text`.
   */
  type: 'text';
}

/**
 * A custom grammar for the model to follow when generating text. Learn more in the
 * [custom grammars guide](https://platform.openai.com/docs/guides/custom-grammars).
 */
export interface ResponseFormatTextGrammar {
  /**
   * The custom grammar for the model to follow.
   */
  grammar: string;

  /**
   * The type of response format being defined. Always `grammar`.
   */
  type: 'grammar';
}

/**
 * Configure the model to generate valid Python code. See the
 * [custom grammars guide](https://platform.openai.com/docs/guides/custom-grammars)
 * for more details.
 */
export interface ResponseFormatTextPython {
  /**
   * The type of response format being defined. Always `python`.
   */
  type: 'python';
}

export type ResponsesModel =
  | (string & {})
  | ChatModel
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max';
