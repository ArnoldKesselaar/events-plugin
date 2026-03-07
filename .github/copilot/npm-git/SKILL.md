---
name: npm-git-install
description: Install npm packages directly from GitHub repositories using git URLs. Use when installing packages from private repos, specific branches, or unreleased versions not yet on npm registry.
tags: [npm, git, github, install, package-management, node]
platforms: [Claude, ChatGPT, Gemini, Opencode]
allowed-tools:
  - Bash
  - Read
  - Write
---

# npm install Git Repository Guide

This guide covers how to install npm packages directly from GitHub repositories. Useful for packages not on npm registry, specific branches, and private repositories.

## When to use this skill

- **Packages not on npm**: Install packages not yet published to npm registry
- **Specific branches/tags**: Install from main, develop, or specific release tags
- **Private repositories**: Install internal organization packages
- **Forked packages**: Use modified fork versions
- **Testing latest commits**: Test latest code before release

---

## 1. Installation Commands

### Basic Syntax

```bash
npm install git+https://github.com/<owner>/<repo>.git#<branch|tag|commit>
```

### HTTPS Method (Common)

```bash
# Specific branch
npm install -g git+https://github.com/JEO-tech-ai/supercode.git#main

# Specific tag
npm install git+https://github.com/owner/repo.git#v1.0.0

# Specific commit
npm install git+https://github.com/owner/repo.git#abc1234

# Default branch (when # omitted)
npm install git+https://github.com/owner/repo.git
```

### SSH Method (When SSH key is configured)

```bash
npm install -g git+ssh://git@github.com:JEO-tech-ai/supercode.git#main
```

### View Detailed Logs

```bash
npm install -g git+https://github.com/JEO-tech-ai/supercode.git#main --verbose
```

---

## 2. npm install Flow

What npm does when installing from a Git URL:

```
1. Git Clone
   └─ Clone repository from specified branch (#main)
        ↓
2. Install Dependencies
   └─ Install dependencies from package.json
        ↓
3. Run Prepare Script
   └─ Execute "prepare" script (TypeScript compilation, build, etc.)
        ↓
4. Register Global Binary
   └─ Link executable from bin field to global path
```

### Internal Operations

```bash
# What npm performs internally
git clone https://github.com/owner/repo.git /tmp/npm-xxx
cd /tmp/npm-xxx
git checkout main
npm install
npm run prepare  # runs if exists
cp -r . /usr/local/lib/node_modules/repo/
ln -s ../lib/node_modules/repo/bin/cli.js /usr/local/bin/repo
```

---

## 3. Check Installation Location

```bash
# Check global npm path
npm root -g
# macOS/Linux: /usr/local/lib/node_modules
# Windows: C:\Users\<username>\AppData\Roaming\npm\node_modules

# Check installed package
npm list -g <package-name>

# Check binary location
which <command>
# or
npm bin -g
```

### Installation Location by Platform

| Platform | Package Location | Binary Location |
|----------|------------------|-----------------|
| macOS/Linux | `/usr/local/lib/node_modules/` | `/usr/local/bin/` |
| Windows | `%AppData%\npm\node_modules\` | `%AppData%\npm\` |
| nvm (macOS) | `~/.nvm/versions/node/vX.X.X/lib/node_modules/` | `~/.nvm/versions/node/vX.X.X/bin/` |

---

## 4. Add Dependencies to package.json

### Using Git URLs in dependencies

```json
{
  "dependencies": {
    "supercode": "git+https://github.com/JEO-tech-ai/supercode.git#main",
    "my-package": "git+ssh://git@github.com:owner/repo.git#v1.0.0",
    "another-pkg": "github:owner/repo#branch"
  }
}
```

### Shorthand Syntax

```json
{
  "dependencies": {
    "pkg1": "github:owner/repo",
    "pkg2": "github:owner/repo#branch",
    "pkg3": "github:owner/repo#v1.0.0",
    "pkg4": "github:owner/repo#commit-sha"
  }
}
```

---

## 5. Installing Private Repositories

### SSH Key Method (Recommended)

```bash
# 1. Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Register public key on GitHub
cat ~/.ssh/id_ed25519.pub
# GitHub → Settings → SSH Keys → New SSH Key

# 3. Install using SSH
npm install git+ssh://git@github.com:owner/private-repo.git
```

### Personal Access Token Method

```bash
# 1. Generate PAT on GitHub
# GitHub → Settings → Developer settings → Personal access tokens

# 2. Install with token in URL
npm install git+https://<token>@github.com/owner/private-repo.git

# 3. Use environment variable (recommended for security)
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
npm install git+https://${GITHUB_TOKEN}@github.com/owner/private-repo.git
```

### .npmrc Configuration

```bash
# ~/.npmrc
//github.com/:_authToken=${GITHUB_TOKEN}
```

---

## 6. Common Errors & Solutions

### Permission denied (EACCES)

```bash
# Method 1: Change ownership
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Method 2: Change npm directory (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Git not installed

```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt-get install git

# Windows
# https://git-scm.com/download/win
```

### GitHub Authentication Error

```bash
# Test SSH connection
ssh -T git@github.com

# Cache credentials
git config --global credential.helper store
# or macOS
git config --global credential.helper osxkeychain
```

### prepare Script Failure

```bash
# For TypeScript projects
npm install -g typescript

# Detailed log on build failure
npm install git+https://... --verbose 2>&1 | tee npm-install.log
```

### Cache Issues

```bash
# Clean npm cache
npm cache clean --force

# Reinstall
npm uninstall -g <package>
npm install -g git+https://...
```

---

## 7. Updates & Management

### Update

```bash
# Update to latest version (reinstall)
npm uninstall -g <package>
npm install -g git+https://github.com/owner/repo.git#main

# Update package.json dependencies
npm update <package>
```

### Check Version

```bash
# Check installed version
npm list -g <package>

# Check latest remote commit
git ls-remote https://github.com/owner/repo.git HEAD
```

### Uninstall

```bash
npm uninstall -g <package>
```

---

## 8. Cursor/VS Code Extension Integration Example

### Supercode Installation Example

```bash
# Global installation
npm install -g git+https://github.com/JEO-tech-ai/supercode.git#main

# Verify installation
supercode --version
```

### Project Configuration File

```json
// .supercoderc or supercode.config.json
{
  "aiRules": {
    "enabled": true,
    "techStack": ["TypeScript", "React", "Node.js"]
  },
  "smartActions": [
    {
      "name": "Generate Documentation",
      "icon": "docs",
      "prompt": "Generate comprehensive documentation"
    }
  ],
  "architectureMode": {
    "enabled": true,
    "detailLevel": "detailed"
  }
}
```

---

## 9. Best Practices

### DO (Recommended)

1. **Use specific versions/tags**: Pin versions with `#v1.0.0` format
2. **Prefer SSH method**: Use SSH keys for private repository access
3. **Manage tokens via environment variables**: Handle PAT through environment variables
4. **Commit lockfile**: Ensure reproducibility by committing package-lock.json
5. **Use verbose option**: Check detailed logs when issues occur

### DON'T (Avoid)

1. **Hardcode tokens**: Never put tokens directly in package.json
2. **Depend on latest commits**: Use tags instead of `#main` in production
3. **Overuse sudo**: Resolve permission issues through directory configuration
4. **Ignore cache**: Clear cache when encountering abnormal behavior

---

## Constraints

### Required Rules (MUST)

1. **Git installation required**: Confirm git is installed before npm git URL installation
2. **Network access**: Environment with GitHub access required
3. **Node.js version**: Check engines field in package.json

### Prohibited (MUST NOT)

1. **Expose authentication tokens**: Never expose tokens in logs or code
2. **Indiscriminate sudo usage**: Resolve permission issues through configuration
3. **#main in production**: Pin to specific versions/tags

---

## References

- [npm-install Official Documentation](https://docs.npmjs.com/cli/v9/commands/npm-install/)
- [How To Install NPM Packages Directly From GitHub](https://www.warp.dev/terminus/npm-install-from-github)
- [npm install from GitHub - Stack Overflow](https://stackoverflow.com/questions/17509669/how-to-install-an-npm-package-from-github-directly)
- [Working with the npm registry - GitHub Docs](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

---

## Metadata

### Version
- **Current version**: 1.0.0
- **Last updated**: 2026-01-10
- **Compatible platforms**: Claude, ChatGPT, Gemini, Opencode

### Related Skills
- [environment-setup](../environment-setup/SKILL.md)
- [git-workflow](../git-workflow/SKILL.md)

### Tags
`#npm` `#git` `#github` `#install` `#package-management` `#node`
