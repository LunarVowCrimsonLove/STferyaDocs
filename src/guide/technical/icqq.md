---
icon: puzzle-piece
title: ICQQ适配教程
index: 1
---

# 🔌 ICQQ适配教程

> 💡 **重要**: ICQQ 适配器是云崽机器人与 QQ 协议之间的桥梁，正确配置是机器人正常运行的关键

## 📥 下载适配文件

### 获取兼容包

下载 ICQQ 兼容包：

[📦 ICQQ兼容包](https://wwdi.lanzn.com/b00eg702ub)  
**提取密码**: `hk0v`


::: warning 版本匹配
请根据您的 icqq 版本来下载对应版本的 sign.js 文件，版本不匹配可能导致功能异常。
:::

## ⚙️ 配置代码

### sign.js核心配置部分

```jsx

// ==================== 全局配置 ====================
// 签名服务器地址
const API_BASE_URL = "https://www.sstfreya.top/api/v1";
// 签名类型 (QsignHook/unidbg)
const SIGN_TYPE = "unidbg";
// 授权令牌
const AUTH_TOKEN = "";
```

## 🔧 配置步骤

### 第一步：获取授权令牌

1. 联系管理员获取您的授权令牌（AUTH_TOKEN）
2. 将令牌填入配置文件的 `AUTH_TOKEN` 字段

::: info 配置界面
配置完成后，您的 sign.js 文件应该包含正确的 API_BASE_URL、SIGN_TYPE 和 AUTH_TOKEN 参数。
:::

### 第二步：替换配置文件

将配置好的 `sign.js` 文件替换到云崽目录：

```bash
# 替换路径
\node_modules\.pnpm\icqq@0.6.10\node_modules\icqq\lib\core\sign.js
```

### 第三步：重启服务

```bash
# 重启云崽
tsab
```

::: success 配置完成！
恭喜！ICQQ 适配器配置完成，您的云崽机器人现在可以正常连接 QQ 了！
:::

## 🔍 配置验证

### 检查日志

重启后查看日志，确认以下信息：

- ✅ 签名服务连接成功
- ✅ ICQQ 适配器加载正常
- ✅ QQ 账号登录成功

### 常见问题

| 问题 | 解决方案 |
|------|----------|
| 签名服务连接失败 | 检查网络连接和授权令牌 |
| 版本不匹配 | 下载对应版本的 sign.js 文件 |
| 配置文件错误 | 检查代码语法和配置参数 |

::: warning 重要提醒
- 请妥善保管您的授权令牌，不要泄露给他人
- 定期更新配置文件以保持兼容性
- 如遇问题请及时联系技术支持
:::
