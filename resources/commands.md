# Claude Code 命令参考

## 内置命令

### 基础命令

```bash
# 查看帮助
claude --help
/help

# 查看版本
claude --version

# 退出
/exit
Ctrl + D
```

### 文件操作命令

```bash
# 读取文件
请读取 <文件路径>
读取 <文件路径> 的第 N-M 行

# 查找文件
找出所有 .js 文件
在 <目录> 下查找 <模式>

# 搜索内容
搜索 "关键词"
在所有 .js 文件中搜索 "function"
```

### 编辑命令

```bash
# 编辑文件
编辑 <文件路径>
将 "旧文本" 改为 "新文本"

# 创建文件
创建 <文件路径>
生成一个新文件 <文件路径>
```

### Git 命令

```bash
# 查看 Git 状态
运行 git status
显示 git diff

# Git 操作
创建 git commit
运行 git add .
运行 git commit -m "message"

# 分支管理
列出所有分支
创建新分支 <branch-name>
切换到分支 <branch-name>
```

### 包管理命令

```bash
# npm
运行 npm install
安装 <package-name>
运行 npm test
运行 npm run build

# pip
安装 <package-name>
生成 requirements.txt
运行 pytest
```

## 技能命令

### 内置技能

```bash
# Git 提交
/commit
/commit -m "提交信息"

# PR 审查
/review-pr <PR-number>
/review-pr <url>

# 代码审查
/code-review
```

### 自定义技能

```bash
# 使用自定义技能
/<your-skill>
/<your-skill> <参数>
```

## 模式命令

```bash
# 进入 Plan 模式
进入 Plan 模式
使用 EnterPlanMode 规划任务

# 退出 Plan 模式
退出 Plan 模式
```

## 代理命令

```bash
# 启动 Explore 代理
使用 Explore 代理分析 <目录>
使用 <quick|medium|very thorough> 深度

# 启动 Plan 代理
使用 Plan 代理设计实现方案

# 启动通用代理
使用 general-purpose 代理完成任务
```

## MCP 命令

```bash
# 网络搜索
搜索 "查询内容"
搜索 "查询" 限定最近一周

# 网页阅读
读取 <url> 的内容
以 Markdown 格式返回

# 图像分析
分析这张图片 <图片路径>
根据设计图生成代码
```

## 高级命令

### 任务管理

```bash
# 查看任务列表
/tasklist
列出所有任务

# 查看任务状态
查看任务状态
获取任务输出

# 创建/更新任务
创建新任务
更新任务状态
```

### 后台任务

```bash
# 后台运行
在后台运行 <命令>

# 查看输出
获取后台任务输出

# 停止任务
停止后台任务 <task-id>
```

## 常用命令组合

### 开发工作流

```bash
# 1. 查看状态
git status

# 2. 查看更改
git diff

# 3. 运行测试
npm test

# 4. 提交更改
/commit

# 或手动提交
git add .
git commit -m "message"
```

### 调试工作流

```bash
# 1. 查看错误日志
grep ERROR logs/app.log

# 2. 分析代码
读取 <文件>

# 3. 搜索问题
搜索 "错误信息"

# 4. 修复并测试
编辑代码
npm test
```

### 重构工作流

```bash
# 1. 分析代码
使用 Explore 代理分析 <目录>

# 2. 设计方案
进入 Plan 模式规划重构

# 3. 执行重构
按计划实现

# 4. 验证
运行所有测试
```

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + D` | 退出当前会话 |
| `Ctrl + L` | 清除屏幕 |
| `Ctrl + C` | 取消当前操作 |
| `Ctrl + S` | 暂停输出 |
| `Ctrl + Q` | 恢复输出 |

## 提示词模板

### 文件操作

```bash
# 读取并分析
读取 <文件> 并解释其功能

# 批量查找
找出所有 <扩展名> 文件
在 <目录> 下搜索 <关键词>
```

### 代码编辑

```bash
# 精确编辑
编辑 <文件> 在第 N 行
将 <旧代码> 替换为 <新代码>

# 功能添加
在 <文件> 中添加 <功能>
```

### 任务执行

```bash
# 复杂任务
使用 Plan 模式规划 <任务>
使用 Explore 代理分析 <目录>

# 并行执行
同时运行：
- 命令 1
- 命令 2
```

## 环境变量

```bash
# 设置 API key
export CLAUDE_API_KEY="your-key"

# 设置默认模型
export CLAUDE_MODEL="claude-opus-4-5"

# 设置超时
export CLAUDE_TIMEOUT="120000"
```

## 配置文件

### Claude Code 配置

```json
{
  "model": "claude-opus-4-5",
  "temperature": 0.7,
  "maxTokens": 4096,
  "timeout": 120000,
  "skillsPath": "./skills",
  "mcpServers": {
    "server-name": {
      "command": "server-command",
      "args": []
    }
  }
}
```

## 故障排查命令

```bash
# 检查配置
claude config list

# 验证安装
claude --version

# 查看日志
tail -f ~/.claude/logs/latest.log

# 重置配置
claude config reset
```

## 获取帮助

```bash
# 内置帮助
/help

# 命令帮助
claude <command> --help

# 直接提问
如何使用 <功能>？
<功能> 的最佳实践是什么？
```
