# Understand Anything — 用法说明

## 简介

`/understand` 是一个代码库分析工具，会自动扫描整个项目，生成一份结构化的知识图谱（Knowledge Graph），帮助你快速理解项目的架构、组件关系和代码组织方式。

当前分析结果：**openai** — OpenAI 官方 TypeScript/JavaScript API 库。

## 快速开始

### 运行分析

在 Copilot Chat 中输入：

```
/understand
```

### 常用选项

| 选项                                 | 说明                                                   |
| ------------------------------------ | ------------------------------------------------------ |
| `/understand`                        | 默认：增量分析（仅分析变更文件）或全量分析（首次运行） |
| `/understand --full`                 | 强制全量重建知识图谱                                   |
| `/understand --review`               | 运行 LLM 图谱审查器，深度校验图谱质量                  |
| `/understand --language zh`          | 用中文生成所有文本内容（摘要、描述、标签）             |
| `/understand --auto-update`          | 开启自动更新（每次 commit 后自动增量分析）             |
| `/understand --no-auto-update`       | 关闭自动更新                                           |
| `/understand /path/to/other-project` | 分析指定目录                                           |

### 示例

```bash
# 首次全量分析
/understand --full

# 用中文分析
/understand --full --language zh

# 仅审查已有图谱
/understand --review

# 分析另一个项目
/understand ../my-other-project
```

## 输出文件

| 文件                   | 大小    | 说明                              |
| ---------------------- | ------- | --------------------------------- |
| `knowledge-graph.json` | ~2.9 MB | **主输出**：完整的知识图谱        |
| `meta.json`            | ~162 B  | 分析元数据（时间戳、commit hash） |
| `fingerprints.json`    | ~540 KB | 结构指纹（用于增量更新比对）      |
| `.understandignore`    | ~856 B  | 忽略规则配置                      |

## 知识图谱结构

### 节点类型（Node Types）

| 类型       | 说明          | ID 格式                               |
| ---------- | ------------- | ------------------------------------- |
| `file`     | 源代码文件    | `file:src/index.ts`                   |
| `function` | 函数/方法     | `function:src/client.ts:createClient` |
| `class`    | 类/接口/类型  | `class:src/client.ts:OpenAI`          |
| `module`   | 逻辑模块/包   | `module:auth`                         |
| `concept`  | 抽象概念/模式 | `concept:streaming`                   |
| `config`   | 配置文件      | `config:tsconfig.json`                |
| `document` | 文档文件      | `document:README.md`                  |

### 边类型（Edge Types）

| 类别     | 类型                                                       | 权重    |
| -------- | ---------------------------------------------------------- | ------- |
| 结构     | `imports`, `exports`, `contains`, `inherits`, `implements` | 0.7–1.0 |
| 行为     | `calls`, `subscribes`, `publishes`, `middleware`           | 0.5–0.8 |
| 数据流   | `reads_from`, `writes_to`, `transforms`, `validates`       | 0.5–0.8 |
| 依赖     | `depends_on`, `tested_by`, `configures`                    | 0.5–0.7 |
| 语义     | `related`, `similar_to`                                    | 0.5     |
| 基础设施 | `deploys`, `serves`, `provisions`, `triggers`              | 0.5–0.7 |

## 当前项目分析结果

### 统计概览

| 指标         | 数值    |
| ------------ | ------- |
| 分析文件数   | 609     |
| 代码文件     | 486     |
| 总代码行数   | 175,665 |
| 图谱节点     | 5,341   |
| 图谱边       | 6,089   |
| 架构层       | 12      |
| 学习路径步骤 | 14      |

### 架构分层

1. **Public API**（3 个节点）— 入口和主客户端
2. **Resources**（163 个节点）— API 资源实现（Chat、Models、Files 等）
3. **Core HTTP & Request Handling**（12 个节点）— HTTP 请求/响应管线
4. **Authentication**（4 个节点）— 认证机制
5. **Real-time & Streaming**（8 个节点）— WebSocket 和流式处理
6. **Platform Integration**（2 个节点）— Azure、Bedrock 集成
7. **Error Handling**（1 个节点）— 错误类型
8. **Library Utilities & Helpers**（19 个节点）— 工具函数
9. **Internal Utilities & Configuration**（37 个节点）— 内部配置
10. **External Vendors**（41 个节点）— 外部依赖
11. **Tests**（223 个节点）— 测试文件
12. **Examples**（48 个节点）— 示例代码

### 学习路径

1. 项目概览
2. 入门和公共入口
3. OpenAI 客户端
4. 核心请求/响应管线
5. Chat API 基础
6. Responses API（现代默认）
7. API 资源模式
8. 认证与凭证
9. 错误处理与可靠性
10. 流式处理模式
11. WebSocket 实时 API
12. 文件上传与数据管理
13. 高级功能（Assistants、Fine-tuning、Embeddings）
14. 多平台支持与贡献

## 可视化

运行以下命令启动交互式仪表盘：

```
/understand-dashboard
```

仪表盘支持：

- 🔍 节点搜索和过滤
- 🗺️ 依赖关系可视化
- 📊 架构层级浏览
- 🎓 学习路径导航
- 📈 统计图表

### 控制台启动

也可以在终端中手动启动仪表盘，无需通过 Chat 命令：

```bash
# 1. 进入仪表盘项目目录
cd ~/.understand-anything/repo/understand-anything-plugin/packages/dashboard

# 2. 安装依赖（首次需要）
pnpm install

# 3. 确保 core 包已构建
cd ~/.understand-anything/repo/understand-anything-plugin
pnpm --filter @understand-anything/core build

# 4. 启动 Vite 开发服务器，指定知识图谱目录
cd ~/.understand-anything/repo/understand-anything-plugin/packages/dashboard
GRAPH_DIR=/path/to/your/project npx vite --host 127.0.0.1
```

以当前项目为例，在项目根目录执行：

```bash
GRAPH_DIR=$(pwd) npx vite --host 127.0.0.1
```

启动后终端会输出带 token 的访问链接：

```
🔑  Dashboard URL: http://127.0.0.1:5173?token=xxxxxx
```

在浏览器中打开该链接即可交互式浏览知识图谱。按 `Ctrl+C` 停止服务。

> **提示**：如果端口 5173 被占用，Vite 会自动递增端口（5174、5175...）。URL 中的 `?token=` 参数用于访问授权，缺少将无法加载图谱数据。

## 增量更新

图谱支持自动增量更新，无需每次全量分析：

1. 开启自动更新：`/understand --auto-update`
2. 每次 commit 后，图谱自动检测变更文件
3. 仅重新分析变更文件，增量合并到现有图谱

手动触发增量：`/understand`

## 忽略规则

编辑 `.understand-anything/.understandignore` 可配置分析时忽略的文件/目录。语法与 `.gitignore` 相同，支持：

- glob 模式匹配
- `#` 注释
- `!` 取反（强制包含）
- `/` 后缀表示目录

```gitignore
# 示例：忽略测试目录
# tests/

# 示例：忽略特定文件
# *.test.ts

# 示例：强制包含某个被默认忽略的文件
# !important-config.json
```

## 相关命令

| 命令                    | 说明                     |
| ----------------------- | ------------------------ |
| `/understand`           | 分析代码库               |
| `/understand-dashboard` | 启动可视化仪表盘         |
| `/understand-chat`      | 基于图谱问答             |
| `/understand-explain`   | 深度解释特定文件/函数    |
| `/understand-diff`      | 分析 git diff 的影响范围 |
| `/understand-domain`    | 提取业务领域知识         |
| `/understand-onboard`   | 生成新人入职指南         |

## 技术细节

- **分析引擎**：基于 Louvain 社区检测算法进行语义分批
- **语言支持**：TypeScript、JavaScript、Python、Go、Rust、Java 等
- **并发处理**：最多 5 个分析子代理并行执行
- **输出格式**：JSON（兼容多种可视化工具）
