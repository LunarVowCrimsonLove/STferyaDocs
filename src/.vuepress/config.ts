import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  title: "圣芙蕾雅学院云端服务中心",
  description: "云崽机器人 + ICQQ 完整配置指南",
  
  theme: hopeTheme({
    // 加密配置
    encrypt: {
      config: {
        "/api/": ["1145141919810"],
      },
    },

    // 导航栏配置
    navbar: [
      {
        text: "快速开始",
        icon: "rocket",
        link: "/guide/installation/yunzai",
      },
      {
        text: "技术文档",
        icon: "book",
        link: "/guide/technical/",
      },
      {
        text: "API接口文档",
        icon: "code",
        link: "/api/",
      },
    ],

    // 侧边栏配置
    sidebar: {
      "/guide/": [
        {
          text: "安装指南",
          icon: "install",
          prefix: "installation/",
          children: [
            {
              text: "云崽和ICQQ安装教程",
              icon: "rocket",
              link: "yunzai",
            },
          ],
        },
        {
          text: "技术文档",
          icon: "code",
          prefix: "technical/",
          children: [
            {
              text: "ICQQ适配教程",
              icon: "puzzle-piece",
              link: "icqq",
            },
            {
              text: "协议文件配置",
              icon: "code",
              link: "protocol",
            },
            {
              text: "签名服务配置",
              icon: "shield",
              link: "signature",
            },
          ],
        },
      ],
      "/api/": [
        {
          text: "API接口文档",
          icon: "code",
          children: [
            {
              text: "接口参考",
              icon: "book",
              link: "",
            },
          ],
        },
      ],
    },

    // 页面信息
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    // 博客配置
    blog: {
      name: "圣芙蕾雅学院",
      avatar: "https://img.icons8.com/color/96/000000/robot-2.png",
      description: "云崽机器人配置专家",
      intro: "/guide/",
      medias: {
        GitHub: "https://github.com",
        Email: "mailto:example@example.com",
      },
    },

    // 主题色
    themeColor: true,

    // 全屏按钮
    fullscreen: true,

    // 纯净模式
    pure: false,

    // 打印按钮
    print: false,

    // 版权信息
    copyright: "Copyright © 2024 圣芙蕾雅学院云端服务中心",

    // 页脚
    footer: "圣芙蕾雅学院云端服务中心 | 让 QQ 机器人部署变得简单",

    // 显示页脚
    displayFooter: true,

  }),
});