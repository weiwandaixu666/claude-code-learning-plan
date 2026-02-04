# 快速开始指南

欢迎使用 Claude Code 2天学习计划！这个指南将帮助你快速上手。

## 🚀 5分钟快速开始

### 第一步：验证安装

```bash
claude --version
```

如果看到版本号，说明已经安装成功！

### 第二步：开始学习

```bash
# 进入学习目录
cd /root/code/ccworkspace/learn

# 查看 README
cat README.md

# 或者直接开始第一天课程
cd day1/morning
```

### 第三步：与 Claude 对话

```
你好！请告诉我今天的学习计划。
```

## 📚 学习路径

### Day 1：基础技能（6-8小时）

**上午（3-4小时）**
1. [环境安装与配置](day1/morning/01-setup.md) - 30分钟
2. [基础对话与文件操作](day1/morning/02-basics.md) - 1小时
3. [代码编辑基础](day1/morning/03-editing.md) - 1.5小时

**下午（3-4小时）**
4. [Bash 工具与命令执行](day1/afternoon/04-bash.md) - 1小时
5. [智能代码生成与重构](day1/afternoon/05-generation.md) - 1.5小时
6. [调试与问题解决](day1/afternoon/06-debugging.md) - 1小时

### Day 2：高级技能（6-8小时）

**上午（3-4小时）**
7. [多文件操作与项目管理](day2/morning/07-multifile.md) - 1.5小时
8. [Task 工具与代理系统](day2/morning/08-task-tool.md) - 1.5小时
9. [MCP 服务器与扩展功能](day2/morning/09-mcp.md) - 1小时

**下午（3-4小时）**
10. [技能与自定义命令](day2/afternoon/10-skills.md) - 1小时
11. [Plan 模式与复杂任务](day2/afternoon/11-plan-mode.md) - 1.5小时
12. [综合实战项目](day2/afternoon/12-project.md) - 1.5-2小时

## 🎯 核心概念速览

### 基础工具

| 工具 | 用途 | 示例 |
|------|------|------|
| **Read** | 读取文件 | "读取 exercises/sample-code.js" |
| **Glob** | 查找文件 | "找出所有 .js 文件" |
| **Grep** | 搜索内容 | "搜索 TODO 关键字" |
| **Edit** | 编辑文件 | "将 X 改为 Y" |
| **Write** | 创建文件 | "创建新文件 utils.js" |
| **Bash** | 运行命令 | "运行 git status" |

### 代理系统

- **Explore**：快速探索代码库
- **Plan**：设计实现方案
- **general-purpose**：通用任务

### MCP 工具

- **Web Search**：网络搜索
- **Web Reader**：读取网页
- **Image Analysis**：图像分析

## 💡 学习技巧

### 1. 边学边练

每个课程都包含练习，务必完成：

```
# 学习示例
读取练习文件
→ 理解代码
→ 完成练习
→ 验证结果
```

### 2. 从简单到复杂

```
Day 1：基础操作
↓
Day 2：高级功能
↓
实战项目：综合应用
```

### 3. 善用提问

```
✅ 好的提问：
"如何使用 Edit 工具修改这个函数？"
"请解释这段代码的工作原理"

❌ 不好的提问：
"帮我"
"看一下"
```

### 4. 记录笔记

```bash
# 创建学习笔记
cat > notes.md << EOF
# 我的学习笔记

## Day 1
- 学到的命令
- 重要概念
- 遇到的问题

## Day 2
...
EOF
```

## 🔧 常用命令速查

### 文件操作

```bash
# 读取文件
请读取 <文件路径>

# 查找文件
找出所有 .js 文件

# 搜索内容
搜索 "关键词"
```

### 代码编辑

```bash
# 简单编辑
编辑文件，将 X 改为 Y

# 创建新文件
创建一个新文件 utils.js
```

### Git 操作

```bash
# 查看状态
运行 git status

# 提交更改
使用 /commit 技能
```

### 获取帮助

```bash
# 内置帮助
/help

# 直接提问
如何使用 <功能>？
```

## 📝 练习文件

学习计划包含以下练习文件：

- `exercises/sample-code.js` - JavaScript 基础代码
- `exercises/buggy-code.py` - 包含 bug 的 Python 代码
- `exercises/refactor-example.ts` - 需要重构的 TypeScript 代码

## 🎓 学习检查点

### Day 1 结束后，你应该能够：

- ✅ 使用 Claude Code 进行日常开发
- ✅ 读取、编辑、创建文件
- ✅ 运行命令和管理 Git
- ✅ 生成和重构代码
- ✅ 调试和解决问题

### Day 2 结束后，你应该能够：

- ✅ 处理多文件项目
- ✅ 使用代理系统探索代码
- ✅ 使用 MCP 工具扩展能力
- ✅ 创建自定义技能
- ✅ 使用 Plan 模式规划任务
- ✅ 完成完整的实战项目

## ⚡ 快速参考

### 遇到问题？

1. **查看文档**：`resources/` 目录下有详细文档
2. **使用帮助**：输入 `/help`
3. **直接提问**：向 Claude Code 描述问题
4. **查看故障排查**：`resources/troubleshooting.md`

### 学习进度跟踪

```bash
# 查看已完成的课程
grep -r "✅" day1/ day2/

# 统计练习文件
ls -l exercises/

# 查看项目目录
ls projects/
```

## 🎯 开始学习！

选择你的起点：

**完全新手？**
→ 从 [Day 1 上午 - 01: 环境安装与配置](day1/morning/01-setup.md) 开始

**有基础？**
→ 跳到 Day 2 学习高级功能

**想快速提升？**
→ 直接进入 [综合实战项目](day2/afternoon/12-project.md)

## 📞 需要帮助？

- 内置帮助：`/help`
- 文档：`resources/` 目录
- 故障排查：`resources/troubleshooting.md`
- 最佳实践：`resources/best-practices.md`

## 🎉 祝学习愉快！

记住：
- 🐢 慢慢来，不要着急
- 💪 多练习，熟能生巧
- 🤔 多思考，理解原理
- 📝 做笔记，巩固知识
- 🎯 完成练习，验证学习

**准备好开始了吗？** 让我们开始学习之旅吧！ 🚀
