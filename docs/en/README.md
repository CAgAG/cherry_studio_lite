[简体中文](../../README.md) | English

# Cherry Studio Lite

This repository is a modified version of [Cherry Studio](https://github.com/CherryHQ/cherry-studio) `v1.9.13`. Version 1.10.0. License: [GNU AGPL-3.0](../../LICENSE). Copyright CherryHQ and contributors. See [NOTICE.md](../../NOTICE.md).

## Changes from the original

Removed:

- OpenClaw
- Assistant store
- Agents
- Code tools
- Mini apps
- Scheduled tasks
- API server
- Channels
- Selection assistant
- Floating assistant

Assistant chat remains, along with paintings, translation, knowledge bases, files, notes, MCP, and web search. Skills can still be installed and listed in settings. They are no longer enabled per agent.

OpenCode Go is added as a model provider. Requests in the same topic share one `x-opencode-session`.
