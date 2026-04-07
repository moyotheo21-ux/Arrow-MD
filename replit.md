# Arrow-MD — WhatsApp Bot

## Overview
Arrow-MD is a feature-rich WhatsApp bot built on the [Baileys](https://github.com/WhiskeySockets/Baileys) library. It supports group management, media downloading (TikTok, Instagram), anti-spam/anti-link features, and more.

## Tech Stack
- **Language:** Node.js (JavaScript)
- **Package Manager:** npm
- **Core Library:** `@whiskeysockets/baileys` — WhatsApp Web API
- **Key Dependencies:** `pino` (logging), `sharp` (image processing), `adm-zip` (session zip), `ruhend-scraper` (media downloads), `dotenv` (env vars)

## Project Layout
```
index.js         — Entry point: starts WhatsApp connection
handler.js       — Message parser and command dispatcher
config.js        — Bot configuration (prefix, owner number, session ID)
dev.js           — Developer-only config
commands/        — Command modules (organized by category)
  dev/           — System/developer commands
  download/      — TikTok, Instagram downloaders
  general/       — Ping, menu, uptime
  group/         — Group admin tools
  owner/         — Owner-restricted commands
  settings/      — Bot settings (prefix, anti-features)
  tools/         — Utility commands
lib/             — Core internal logic
  antifeatures/  — Anti-delete, anti-link, auto-react, etc.
  connection.js  — WhatsApp socket lifecycle management
  loader.js      — Dynamic command loader
  permissions.js — Owner/Sudo/Admin permission checks
  session.js     — Session encode/decode
  store.js       — Local data persistence
  activity.js    — Group activity tracking
```

## Running the Bot
The workflow runs `node index.js` as a console process.

## Configuration
Before the bot can connect to WhatsApp, you need a session ID:

1. Get your session ID from: https://arrow-md-pair-site.onrender.com/
2. Set the `SESSION_ID` environment variable (via Replit Secrets) to your session ID (format: `Arrow-MD≈...`)
3. Optionally update `config.js`:
   - `ownerNumber`: Your WhatsApp number (with country code, no `+`)
   - `defaultPrefix`: Command prefix (default: `.`)

## Environment Variables
- `SESSION_ID` — WhatsApp session ID (required, format: `Arrow-MD≈...`)

## Auto-Updates
Every time the bot connects to WhatsApp it automatically runs `git pull` from the configured repo in `dev.js` (`repo` field). If new code is pulled it logs a notice to restart. The `.update` command pulls and then reconnects; `.restart` reconnects without pulling.

## Key Commands
| Command | Who | What it does |
|---------|-----|--------------|
| `.restart` | Owner | Gracefully closes socket + reconnects (no crash) |
| `.update` | Owner | Pulls latest code from GitHub then reconnects |
| `.obfuscate` | Dev only | Reply to a `.js` or `.zip` to obfuscate it |

## Workflow
- **Start application** — Runs `node index.js` as a console process
