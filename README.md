# MY-Userflow-Test — Local Setup Guide

## Prerequisites
- Node.js 18+ (recommended: latest LTS)
- Yarn (recommended) or npm/pnpm
- To install yarn execute: ```npm install --global yarn```

## 1) Install dependencies
```bash
yarn install
```

## 2) Run the app in local
```bash
yarn dev
```
Then open the printed local URL (typically `http://localhost:5173`).


## Troubleshooting
- If the dev server doesn’t start, ensure Node 18+ and reinstall deps:
  ```bash
  rm -rf node_modules
  yarn install
  ```
- If routes 404 on hard refresh in non-dev hosting, ensure your host rewrites `/*` to `index.html` (SPA fallback).
