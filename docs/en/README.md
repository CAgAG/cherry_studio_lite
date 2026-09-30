[简体中文](../../README.md) | English

# Cherry Studio Lite

This repository is a modified version of [Cherry Studio](https://github.com/CherryHQ/cherry-studio) `v1.9.13`. Version 1.10.2. License: [GNU AGPL-3.0](../../LICENSE). Copyright CherryHQ and contributors. See [NOTICE.md](../../NOTICE.md).

## Changes from the original

Removed:

- OpenClaw
- Agents
- Code tools
- Mini apps
- Scheduled tasks
- API server
- Channels
- Selection assistant
- Floating assistant
- Skills

Assistant chat remains, along with paintings, translation, knowledge bases, files, notes, MCP, and web search. The assistant store can add, import, and manage assistants. The original built-in presets are not included.

OpenCode Go is added as a model provider. Requests in the same topic share one `x-opencode-session`.
