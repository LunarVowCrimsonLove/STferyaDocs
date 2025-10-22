---
icon: rocket
title: 云崽和ICQQ安装教程
index: 1
---

# 🚀 云崽和ICQQ安装教程

> 💡 **提示**: 本教程以云崽为例，使用 trss + 0.6.10 版本 icqq 构建

::: tip 开始之前
请确保您已经准备好：
- Linux 服务器（推荐 Ubuntu 20.04+）
- 基本的命令行操作知识
- 稳定的网络连接
:::

## 📦 第一步：系统环境准备

### 🔄 换源配置

为了获得更快的下载速度，我们首先配置国内镜像源：

```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

按照提示进行以下选择：

1. **选择清华源** - 推荐使用清华大学的镜像源

![选择清华源](https://sixflowers.icu/images/TRSS/Linux/1/1.png)

2. **软件源是否使用 HTTP 协议?** - 选择 `[Y]`

![HTTP协议](https://sixflowers.icu/images/TRSS/Linux/1/2.png)

3. **是否跳过更新软件包?** - 选择 `[Y]`

![跳过更新](https://sixflowers.icu/images/TRSS/Linux/1/3.png)

4. **是否清理已下载的软件包缓存?** - 选择 `[Y]`

![清理缓存](https://sixflowers.icu/images/TRSS/Linux/1/4.png)

5. **安装完成** - 等待安装完成

![安装完成](https://sixflowers.icu/images/TRSS/Linux/1/5.png)

### 🐳 安装 Docker

接下来安装 Docker 容器环境：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

按照提示进行以下选择：

1. **是否安装最新版本的 Docker Engine?** - 选择 `[Y]`

![Docker安装1](https://sixflowers.icu/images/TRSS/Linux/2/1.png)

2. **请选择并输入你想使用的 Docker CE 源** - 选择 `[7]`

![Docker安装2](https://sixflowers.icu/images/TRSS/Linux/2/2.png)

3. **请选择并输入你想使用的 Docker Registry 源** - 选择 `[13]`

![Docker安装3](https://sixflowers.icu/images/TRSS/Linux/2/3.png)

4. **安装完成** - 等待 Docker 安装完成

![Docker安装完成](https://sixflowers.icu/images/TRSS/Linux/2/4.png)

## 🤖 第二步：安装云崽机器人

### 选择安装方式

根据您的网络环境选择合适的安装方式：

#### 🌏 国内用户（推荐）

```bash
DKURL=docker.fxxk.dedyn.io bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
```

#### 🌍 国外用户

```bash
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
```

#### 🔄 备用方法

```bash
bash <(curl -L gitee.com/qianzhi11_admin/my-website/raw/master/TRSS_AllBot.sh)
```

#### 📝 字体安装（可选）

```bash
pacman -Syu --noconfirm glibc
```

### 🚀 启动云崽

安装完成后，使用以下命令启动云崽：

```bash
tsab
```

![启动成功](https://sixflowers.icu/images/TRSS/Linux/3/1.png)

::: success 恭喜！
云崽机器人已经成功安装并启动！接下来我们需要配置 ICQQ 适配器。
:::

## 🔌 第三步：配置 ICQQ 适配器

### 📦 安装 ICQQ-Plugin

```bash
# 安装ICQQ-Plugin
```

::: info 下载适配文件
需要下载ICQQ适配文件，请参考 [ICQQ适配教程](../technical/icqq/) 获取下载链接和配置方法。
:::

### 🔐 配置签名服务

#### QQ签名服务器地址

```bash
# QQ签名服务器
https://www.sstfreya.top/api/v1
```

::: info 签名服务说明
签名服务是 QQ 登录的关键组件，用于处理登录验证。我们使用圣芙蕾雅学院提供的稳定签名服务。
:::

### 👤 配置 QQ 账号

#### 账号设置格式

```jsx
# QQ设置
QQ号:密码[留空扫码]:登录设备[12]
```

#### 设备类型说明

| 设备类型 | 编号 | 说明 |
|---------|------|------|
| 安卓手机 | 1 | 扫码登录，无需密码 |
| 平板 | 2 | 扫码登录，无需密码 |
| 安卓手表 | 3 | 扫码登录，无需密码 |
| 其他设备 | 12 | 需要密码登录 |

::: tip 登录建议
- 推荐使用扫码登录（设备类型 1-3），更安全便捷
- 如果选择密码登录，请确保密码正确
- 首次登录可能需要验证码验证
:::

## 🎉 完成！

恭喜您已经完成了云崽机器人的安装和基本配置！

### 下一步

- 📖 查看 [ICQQ 适配教程](../technical/icqq/) 进行详细配置
- 🔧 了解 [协议文件配置](../technical/protocol/) 优化性能
- 🛡️ 配置 [签名服务](../technical/signature/) 确保稳定运行

### 遇到问题？

如果安装过程中遇到任何问题，请查看我们的 [常见问题解答](../technical/signature/) 或联系技术支持。
