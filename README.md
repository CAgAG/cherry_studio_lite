简体中文 | [English](./docs/en/README.md)

# Cherry Studio Lite

本仓库是 [Cherry Studio](https://github.com/CherryHQ/cherry-studio) `v1.9.13` 的修改版，版本 1.10.0。许可证：[GNU AGPL-3.0](LICENSE)。版权归 CherryHQ 及其贡献者。详见 [NOTICE.md](NOTICE.md)。

## 相对原版的修改

删除：

- OpenClaw
- 助手库
- 智能体
- 代码工具
- 小程序
- 定时任务
- API 服务器
- 频道
- 划词助手
- 悬浮助手

保留助手聊天，以及绘画、翻译、知识库、文件、笔记、MCP 和联网搜索。技能仍可在设置里安装和列出，不再按智能体启用。

新增 OpenCode Go 模型服务。同一话题的请求共用一个 `x-opencode-session`。
