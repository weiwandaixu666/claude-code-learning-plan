# Day 1 下午 - 4. Bash 工具与命令执行

预计时间：1小时

## 📚 学习目标

- [ ] 掌握 Bash 工具的基本使用
- [ ] 学习 Git 操作：status, diff, log, add, commit
- [ ] 学习包管理：npm, pip, cargo 等
- [ ] 完成实际练习：创建 commit、运行测试、安装依赖

## 🖥️ 第一步：Bash 工具基础

Bash 工具让你能够在 Claude Code 中执行 shell 命令。

### 基本用法

**简单命令：**

```
运行 ls -la 命令查看当前目录
```

**带参数的命令：**

```
创建一个名为 test 的目录
```

**命令链：**

```
检查 Node.js 是否安装，并显示版本
```

### 重要规则

1. **文件操作使用专用工具**：
   - ❌ 不要用 `cat`, `head`, `tail` 读取文件 → 用 Read 工具
   - ❌ 不要用 `grep` 搜索 → 用 Grep 工具
   - ❌ 不要用 `find` 查找文件 → 用 Glob 工具

2. **Bash 用于系统操作**：
   - ✅ Git 操作
   - ✅ 包管理器
   - ✅ 运行测试
   - ✅ 服务器操作
   - ✅ Docker 命令

## 📚 第二步：Git 操作

### 基础 Git 命令

**查看状态：**

```
运行 git status 查看当前仓库状态
```

**查看差异：**

```
显示 git diff 的结果，看看有哪些修改
```

**查看提交历史：**

```
运行 git log --oneline -10 显示最近 10 条提交
```

### 练习 1: Git 工作流

```
任务：完整的 Git 提交流程

1. 检查 git status
2. 查看 git diff
3. 添加一个新文件
4. 使用 git add 添加文件
5. 创建一个有意义的提交信息
6. 再次检查状态

执行这些步骤并创建一个提交。
```

### 高级 Git 操作

**查看分支：**

```
列出所有本地分支
```

**创建并切换分支：**

```
创建一个新分支 feature/test 并切换到它
```

**合并分支：**

```
将 feature/test 分支合并回 main
```

## 📦 第三步：包管理器

### npm (Node.js)

**检查 npm：**

```
检查 npm 版本和配置
```

**初始化项目：**

```
在 exercises 目录下初始化一个 npm 项目
```

**安装依赖：**

```
安装 lodash 作为开发依赖
```

**运行脚本：**

```
如果 package.json 中有 test 脚本，运行它
```

### 练习 2: npm 项目设置

```
任务：设置 npm 项目

1. 在 exercises/npmdemo 目录初始化项目
2. 安装常用依赖：
   - lodash
   - axios
   - chalk
3. 创建一个简单的 index.js
4. 添加运行脚本到 package.json
```

### pip (Python)

**检查 pip：**

```
检查 pip 和 Python 版本
```

**安装包：**

```
安装 requests 和 pytest
```

**创建 requirements.txt：**

```
生成当前环境的 requirements.txt
```

### 练习 3: Python 环境设置

```
任务：设置 Python 项目

1. 在 exercises/pydemo 创建虚拟环境
2. 安装常用包：
   - requests
   - pytest
   - black
3. 创建 requirements.txt
4. 写一个简单的测试文件
```

## 🧪 第四步：运行测试

### JavaScript 测试

```
如果有 Jest 配置，运行所有测试
```

### Python 测试

```
使用 pytest 运行测试
```

### 练习 4: 创建并运行测试

```
任务：测试驱动开发

1. 创建 exercises/calculator.js
2. 实现基本运算函数
3. 创建测试文件 calculator.test.js
4. 运行测试并确保通过
```

## 🔧 第五步：并行命令执行

当你需要运行多个独立命令时，可以并行执行：

```
同时运行以下命令：
1. git status
2. node --version
3. npm --version

并行执行这些命令以提高效率。
```

## 🎯 第六步：综合练习

### 练习 5: 完整项目初始化

```
任务：从头初始化一个项目

步骤：
1. 创建项目目录 projects/mini-app
2. 初始化 git 仓库
3. 初始化 npm 项目
4. 创建 .gitignore
5. 创建基本的目录结构（src, tests, docs）
6. 添加初始文件
7. 创建第一个 git commit
8. 显示 git log 确认

完成所有步骤并展示结果。
```

### 练习 6: 依赖管理

```
任务：项目依赖审计

1. 检查当前项目的 package.json
2. 运行 npm outdated 查看过期的包
3. 运行 npm audit 检查安全问题
4. 更新必要的依赖
5. 测试更新后项目是否正常工作
```

## 📋 检查点

在继续之前，确保你：

- [ ] 能够使用 Bash 工具运行各种命令
- [ ] 掌握基本的 Git 工作流
- [ ] 理解何时使用 Bash vs 专用工具
- [ ] 能够使用 npm 和 pip 管理依赖
- [ ] 能够运行测试并理解结果
- [ ] 完成了至少 3 个练习

## 💡 最佳实践

### Git 提交信息规范

```
✅ 好的提交信息：
"Add user authentication feature"

"Fix bug in payment processing"

"Update README with installation instructions"

❌ 不好的提交信息：
"update"
"fix"
"changes"
```

### 包管理最佳实践

```
# 生产依赖
npm install package-name

# 开发依赖
npm install --save-dev package-name

# 全局安装
npm install -g package-name

# 精确版本
npm install package-name --save-exact
```

## 🔐 安全注意事项

⚠️ **永远不要在命令中包含敏感信息：**

```
❌ "运行 curl 命令，使用 API key abc123xyz"
✅ "使用环境变量中的 API_KEY 运行 curl 命令"
```

## 🚀 下一步

完成本节后，继续学习 [05-generation.md](./05-generation.md) - 智能代码生成与重构。

## 📝 我的笔记

```bash
# 常用命令备忘

# Git
git status
git add .
git commit -m "message"

# npm
npm install
npm run test
npm run build

# pip
pip install package
pip freeze > requirements.txt
```

## ⚠️ 常见错误

**错误：在错误的目录运行命令**
```
# 检查当前目录
pwd

# 切换到正确目录
cd path/to/project
```

**错误：忘记保存依赖**
```
# npm
npm install

# pip
pip freeze > requirements.txt
```

## 🎓 挑战任务

```
挑战：CI/CD 模拟

创建一个完整的部署流程：

1. 创建项目
2. 设置测试
3. 创建 pre-commit hook
4. 模拟部署流程
5. 生成部署报告

要求：所有步骤通过 Claude Code 完成。
```
