# Claude Code 故障排查指南

## 📋 目录

1. [常见问题](#常见问题)
2. [安装问题](#安装问题)
3. [配置问题](#配置问题)
4. [使用问题](#使用问题)
5. [性能问题](#性能问题)
6. [错误处理](#错误处理)
7. [获取帮助](#获取帮助)

## 常见问题

### Claude Code 没有响应

**可能原因：**
- 网络连接问题
- API 密钥配置错误
- 超时设置过短
- 服务器问题

**解决步骤：**

```bash
# 1. 检查网络连接
ping api.anthropic.com

# 2. 验证 API 密钥
claude config list

# 3. 测试配置
claude --version

# 4. 检查日志
tail -f ~/.claude/logs/latest.log

# 5. 重试请求
# 等待几秒后重试
```

### 编辑操作失败

**问题：Edit 工具找不到匹配的文本**

```
Error: old_string not found in file
```

**原因：**
- old_string 不精确匹配
- 缩进或空格差异
- 文件已被修改

**解决方案：**

```
✅ 提供更多上下文
"将从 'function calculate' 开始到 'return result' 结束的整个函数替换为..."

✅ 使用 Read 先查看确切内容
读取文件确认准确的文本

✅ 使用更大范围的文本
包含前后几行以确保唯一性
```

### 命令执行失败

**问题：Bash 命令返回错误**

**排查步骤：**

```bash
# 1. 检查当前目录
pwd

# 2. 验证命令存在
which <command>

# 3. 检查权限
ls -la

# 4. 手动测试
直接在终端运行命令

# 5. 查看错误详情
使用 verbose 模式
```

## 安装问题

### 安装失败

**npm 安装失败：**

```bash
# 清理缓存
npm cache clean --force

# 使用 sudo（如果需要）
sudo npm install -g @anthropic-ai/claude-code

# 或使用 npx
npx @anthropic-ai/claude-code

# 检查 Node 版本
node --version  # 应该 >= 16.x
```

### 权限问题

```bash
# 修复 npm 权限
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# 或使用 Homebrew（macOS）
brew install claude-code
```

### 路径问题

```bash
# 检查安装位置
which claude

# 添加到 PATH
export PATH="/path/to/claude:$PATH"

# 永久添加（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export PATH="/path/to/claude:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## 配置问题

### API 密钥配置

**验证 API 密钥：**

```bash
# 查看当前配置
claude config list

# 设置 API 密钥
claude config set apiKey YOUR_API_KEY

# 从环境变量读取
export CLAUDE_API_KEY="your-key"

# 测试密钥
claude --version
```

### 配置文件问题

**配置文件位置：**

```bash
# 默认位置
~/.claude/config.json

# 查看配置
cat ~/.claude/config.json

# 重置配置
claude config reset

# 编辑配置
claude config edit
```

### 模型选择

**切换模型：**

```bash
# 查看可用模型
claude config list

# 设置默认模型
claude config set model claude-opus-4-5

# 临时使用不同模型
claude --model claude-sonnet-4-5
```

## 使用问题

### 文件操作问题

**找不到文件：**

```
❌ "读取 src/components/Button.tsx"
→ 文件不存在

✅ "使用 Glob 查找 Button 组件"
→ 找到实际位置
```

**权限被拒绝：**

```bash
# 检查文件权限
ls -la <file>

# 修改权限
chmod +r <file>

# 使用 sudo（谨慎）
sudo claude <command>
```

### Git 操作问题

**提交失败：**

```bash
# 检查 Git 状态
git status

# 查看差异
git diff

# 检查分支
git branch

# 验证远程
git remote -v

# 测试连接
git ls-remote
```

**合并冲突：**

```bash
# 查看冲突
git status

# 解决冲突
# 编辑冲突文件
git add <resolved-files>
git commit
```

### 包管理问题

**npm 问题：**

```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install

# 检查 npm 版本
npm --version

# 更新 npm
npm install -g npm@latest
```

**pip 问题：**

```bash
# 升级 pip
pip install --upgrade pip

# 清理缓存
pip cache purge

# 虚拟环境问题
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## 性能问题

### 响应慢

**优化策略：**

```bash
# 1. 减少上下文
专注于特定任务而非整个项目

# 2. 使用合适的工具
用 Glob 定位，不要搜索所有文件

# 3. 分批处理
大任务分解为小步骤

# 4. 调整超时
claude config set timeout 300000
```

### 内存使用高

**减少内存占用：**

```bash
# 1. 清理历史
定期清理会话历史

# 2. 限制文件大小
避免读取超大文件

# 3. 使用流式处理
分块处理大文件

# 4. 重启会话
退出并重新启动
```

### 网络问题

**改善连接：**

```bash
# 1. 使用代理
export HTTP_PROXY=http://proxy:port
export HTTPS_PROXY=http://proxy:port

# 2. 增加超时
claude config set timeout 600000

# 3. 重试机制
自动重试失败的请求

# 4. 检查 DNS
nslookup api.anthropic.com
```

## 错误处理

### API 错误

**速率限制：**

```
Error: Rate limit exceeded

解决方案：
1. 等待一段时间后重试
2. 减少请求频率
3. 升级账户计划
```

**认证错误：**

```
Error: Invalid API key

解决方案：
1. 验证 API 密钥
2. 重新配置密钥
3. 检查账户状态
```

### 代码错误

**语法错误：**

```
1. 使用 ESLint/Pylint 检查
2. 让 Claude Code 解释错误
3. 查看错误堆栈
4. 逐行调试
```

**运行时错误：**

```
1. 添加日志输出
2. 使用调试器
3. 检查输入数据
4. 验证假设
```

**逻辑错误：**

```
1. 编写测试用例
2. 对比预期输出
3. 使用调试工具
4. Code Review
```

## 获取帮助

### 内置帮助

```bash
# 命令帮助
claude --help

# 技能列表
/skills

# 直接提问
如何使用 <功能>？
<功能> 的最佳实践是什么？
```

### 文档资源

**官方文档：**
- Claude Code 官方文档
- API 参考
- GitHub 仓库

**社区资源：**
- GitHub Issues
- Stack Overflow
- Reddit 社区
- Discord 服务器

### 诊断命令

```bash
# 系统信息
claude doctor

# 详细日志
claude --verbose

# 调试模式
claude --debug

# 配置检查
claude config validate
```

### 报告问题

**报告 Bug 前检查：**

1. ✅ 搜索现有 Issues
2. ✅ 查看文档
3. ✅ 尝试最新版本
4. ✅ 隔离问题
5. ✅ 准备复现步骤

**好的 Bug 报告：**

```markdown
## 描述
清晰描述问题

## 复现步骤
1. 步骤一
2. 步骤二
3. 步骤三

## 期望行为
应该发生什么

## 实际行为
实际发生了什么

## 环境
- OS: Ubuntu 20.04
- Node.js: v16.x
- Claude Code: v1.x

## 日志
\`\`\`
相关错误日志
\`\`\`
```

### 常用解决方案

**问题：工具执行失败**

```bash
# 检查工具权限
claude config list

# 重新初始化
claude init

# 清理缓存
rm -rf ~/.claude/cache
```

**问题：文件损坏**

```bash
# 备份配置
cp ~/.claude/config.json ~/.claude/config.json.bak

# 重新配置
claude config reset
claude setup
```

**问题：会话卡住**

```bash
# 强制退出
Ctrl + C

# 清理会话
rm -rf ~/.claude/sessions/*

# 重启
claude
```

## 预防措施

### 定期维护

```bash
# 更新 Claude Code
npm update -g @anthropic-ai/claude-code

# 清理缓存
claude cache clean

# 检查配置
claude doctor

# 备份配置
cp ~/.claude/config.json ~/backup/
```

### 最佳实践

1. **定期更新**
   - 保持 Claude Code 最新
   - 更新依赖包

2. **监控日志**
   - 定期检查错误日志
   - 及时处理问题

3. **备份重要数据**
   - 配置文件
   - 自定义技能
   - 项目设置

4. **文档记录**
   - 记录解决方案
   - 分享经验教训

## 紧急恢复

### 完全重置

```bash
# 1. 备份当前配置
cp -r ~/.claude ~/claude-backup

# 2. 卸载
npm uninstall -g @anthropic-ai/claude-code

# 3. 清理
rm -rf ~/.claude

# 4. 重新安装
npm install -g @anthropic-ai/claude-code

# 5. 配置
claude setup
```

### 数据恢复

```bash
# 从备份恢复
cp ~/claude-backup/config.json ~/.claude/

# 恢复技能
cp -r ~/claude-backup/skills/* ~/.claude/skills/

# 验证
claude config list
```

## 联系支持

**何时联系支持：**

- 无法解决的问题
- 疑似 Bug
- 功能请求
- 企业支持

**联系信息：**

- Email: support@anthropic.com
- GitHub: github.com/anthropics/claude-code/issues
- Twitter: @AnthropicAI

---

**记住：大多数问题都可以通过文档和社区资源解决。在联系支持之前，请先尝试自助解决！**
