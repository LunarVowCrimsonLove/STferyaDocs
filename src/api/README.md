---
icon: code
title: API接口文档
---

# 🔐 圣芙蕾雅学院云端签名服务中心 · 完整接口参考

> 🛡️ **加密文档**: 此页面包含敏感的API接口信息，需要密码访问

## 🏛️ 学院认证

### 选择签名类型

根据您的需求选择合适的签名服务类型

#### QsignHook
高性能签名服务，支持复杂签名算法

#### unidbg
兼容性签名服务，支持多种设备类型

## 📡 接口展示

完整的 API 接口文档和使用示例

### POST `/api/v1/sign`

获取签名数据

#### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| Type | string | 是 | 签名类型 (QsignHook/unidbg) | QsignHook |
| uin | string | 是 | QQ号码 | 123456789 |
| qua | string | 是 | 客户端版本信息 | V1_AND_SQ_9.2.20_11650_YYB_D |
| cmd | string | 是 | 命令类型 | wtlogin.login |
| seq | string | 是 | 序列号 | 14111141 |
| buffer | string | 是 | 请求数据(hex) | 11000111010 |
| android_id | string | 是 | Android设备ID | 13feaad77a645b58 |
| guid | string | 是 | 设备GUID | 9A7AB58351E070E218172289233EED99 |

#### 请求示例

```bash
curl -X POST 'http://127.0.0.1:12941/api/v1/sign?Type=QsignHook' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: YOUR_TOKEN' \
  --data-urlencode 'uin=123456789' \
  --data-urlencode 'qua=V1_AND_SQ_9.2.20_11650_YYB_D' \
  --data-urlencode 'cmd=wtlogin.login' \
  --data-urlencode 'seq=14111141' \
  --data-urlencode 'buffer=11000111010' \
  --data-urlencode 'android_id=13feaad77a645b58' \
  --data-urlencode 'guid=9A7AB58351E070E218172289233EED99'
```

#### 响应格式

```json
{
  "code": 0,
  "msg": "当前签名服务端: QsignHook",
  "data": {
    "sign": "签名数据(hex)",
    "token": "Token数据(hex)",
    "extra": "额外数据(hex)"
  }
}
```

#### 错误码

| 错误码 | 错误信息 |
|--------|----------|
| 1 | 缺少Type参数 |
| 2 | Token额度不足 |
| 3 | 无效的Type参数 |
| 4 | 服务器内部错误 |
| 5 | 服务器内部错误 |
| 6 | 服务器内部错误 |
| 7 | 服务器内部错误 |

### GET `/api/v1/energy`

获取能量数据

#### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| Type | string | 是 | 签名类型 (QsignHook/unidbg) | QsignHook |
| uin | string | 是 | 用户QQ号 | 123456789 |
| qua | string | 是 | 客户端版本信息 | V1_AND_SQ_9.2.20_11650_YYB_D |
| data | string | 是 | 命令数据 | 810_9 |
| android_id | string | 是 | Android设备ID | 13feaad77a645b58 |
| guid | string | 是 | 设备GUID | 9A7AB58351E070E218172289233EED99 |
| version | string | 是 | 版本号 | 6002554 |

#### 请求示例

```bash
curl -X GET 'http://127.0.0.1:12941/api/v1/energy?Type=QsignHook&uin=123456789&qua=V1_AND_SQ_9.2.20_11650_YYB_D&data=810_9&android_id=13feaad77a645b58&guid=9A7AB58351E070E218172289233EED99&version=6002554' \
  -H 'Authorization: YOUR_TOKEN'
```

#### 响应格式

```json
{
  "code": 0,
  "msg": "当前签名服务端: QsignHook",
  "data": "能量数据(hex)"
}
```

#### 错误码

| 错误码 | 错误信息 |
|--------|----------|
| 1 | 缺少Type参数 |
| 2 | Token额度不足 |
| 3 | 无效的Type参数 |
| 4 | 缺少必要参数 |
| 5 | data参数格式错误 |
| 6 | 服务器内部错误 |
| 7 | 服务器内部错误 |

## 📖 学院使用指南

### 圣芙蕾雅学院云端签名服务使用规范

#### 认证方式

所有 API 请求都需要在请求头中包含有效的 Authorization Token。Token 格式为：`STferya-{username}-{token}`

#### 请求格式

支持 JSON 和 form-data 两种请求格式。建议使用 form-data 格式以获得更好的兼容性。

#### 响应格式

所有 API 响应都遵循统一的 JSON 格式，包含 `code`、`msg` 和 `data` 字段。

#### 错误处理

当请求失败时，API 会返回相应的错误码和错误信息。请根据错误码进行相应的处理。

::: warning 重要提醒
- 请妥善保管您的API Token
- 不要在公开场合泄露Token信息
- 定期更换Token以确保安全
:::
