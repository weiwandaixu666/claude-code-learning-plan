# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Claude Code 2-Day Learning Plan** - a comprehensive educational curriculum in Chinese for mastering Claude Code. The repository contains structured learning materials, exercises, and reference documentation designed to take users from beginner to proficient in 12-16 hours.

### Project Structure

```
claude-code-learning-plan/
├── README.md                  # Main overview and learning goals
├── INDEX.md                   # Complete navigation index
├── QUICKSTART.md              # 5-minute quick start guide
├── ROADMAP.md                 # Visual learning roadmap
├── IMPLEMENTATION_SUMMARY.md  # Implementation details
├── day1/                      # Day 1: Basic skills (6-8 hours)
│   ├── morning/              # Setup, file ops, editing (3 courses)
│   └── afternoon/            # Bash, generation, debugging (3 courses)
├── day2/                      # Day 2: Advanced skills (6-8 hours)
│   ├── morning/              # Multifile, Task tool, MCP (3 courses)
│   └── afternoon/            # Skills, Plan mode, projects (3 courses)
├── exercises/                 # Practice files for hands-on learning
│   ├── sample-code.js        # JavaScript basics for editing practice
│   ├── buggy-code.py         # Python code with 10 bugs for debugging
│   └── refactor-example.ts   # TypeScript code for refactoring
└── resources/                 # Reference documentation
    ├── commands.md           # Complete command reference
    ├── best-practices.md     # Best practices guide
    └── troubleshooting.md    # Troubleshooting guide
```

## Educational Content Architecture

### Learning Path Structure

Each course file (e.g., `day1/morning/01-setup.md`) follows a consistent structure:
- **Learning objectives** - Expected outcomes
- **Knowledge explanation** - Detailed concepts
- **Practice exercises** - Hands-on tasks
- **Checkpoints** - Learning verification
- **Best practices** - Experience summary
- **Common pitfalls** - Mistake avoidance

### Content Organization

**Day 1 (Foundation)** covers:
- Environment setup and configuration
- File operations: Read, Glob, Grep
- Code editing: Edit, Write tools
- Bash command execution and Git operations
- Code generation and refactoring
- Debugging and problem-solving

**Day 2 (Advanced)** covers:
- Multi-file operations and project management
- Task tool and agent system (Explore, Plan, general-purpose agents)
- MCP servers (Web Search, Web Reader, Image Analysis)
- Custom skills and user-invocable commands
- Plan mode for complex tasks
- Comprehensive hands-on projects

## Key Concepts for Understanding This Codebase

### 1. This is Documentation, Not Code

The primary content is **educational material in Markdown format**, not executable code. When working with this repository:
- Focus on content structure, cross-references, and navigation
- Maintain consistent formatting across course files
- Preserve Chinese language content accurately
- Update cross-references when adding/removing files

### 2. Exercise Files

The `exercises/` directory contains intentionally designed practice code:
- `sample-code.js` - Simple JavaScript for basic editing exercises
- `buggy-code.py` - Contains 10 intentional bugs for debugging practice
- `refactor-example.ts` - Code smell examples for refactoring exercises

These files are **teaching materials**, not production code. They should preserve their "imperfect" state as learning tools.

### 3. Reference Documentation Structure

The `resources/` directory contains three key reference documents:

- **commands.md** - Command reference organized by category (basic, file ops, Git, package managers, skills, modes, agents, MCP)
- **best-practices.md** - Structured by topic (code editing, conversation techniques, project management, performance, security, error handling, testing)
- **troubleshooting.md** - Problem-solving guide for common issues

### 4. Cross-Reference Navigation

The curriculum uses extensive internal linking. When making changes:
- Update `INDEX.md` when adding/removing courses
- Update `ROADMAP.md` for structural changes
- Check links in course files that reference other files
- Maintain consistency between learning objectives and actual content

## Common Development Tasks

### Adding a New Course

1. Create the course file in the appropriate `day1/` or `day2/` subdirectory
2. Follow the standard course structure (objectives, explanation, practice, checkpoints)
3. Update `INDEX.md` with the new course
4. Update `ROADMAP.md` if learning path changes
5. Update `README.md` total course count
6. Update `IMPLEMENTATION_SUMMARY.md`

### Modifying Exercise Files

1. Consider the educational purpose of the exercise
2. For `buggy-code.py`: maintain exactly 10 bugs of varying difficulty
3. For `refactor-example.ts`: preserve clear code smells for identification practice
4. For `sample-code.js`: keep it simple enough for beginners

### Updating Documentation

1. Maintain Chinese language for user-facing content
2. Keep technical terms in English (e.g., "Read 工具", "Plan 模式")
3. Preserve the educational tone and structure
4. Update all cross-references

## Important Notes

- **Language**: All educational content is in Chinese. Technical terms remain in English.
- **File Paths**: The repository uses `claude-code-learning-plan/` as the root in documentation, but is actually located at `/home/user/code/ccworkspace/claude-code-learning-plan/`
- **Version Control**: This is a Git repository. Check git status before making changes.
- **No Build Process**: This is documentation-only. No build, test, or lint commands are needed.

## Related Files

- `index.html` - Web-based navigation interface for the learning plan
- `.gitignore` - Standard ignore patterns
