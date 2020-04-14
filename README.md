# ES6 Template

- [x] ES6 with Module, Import Maps, JSON Imports and CSSStyleSheet, ...
- [x] Rust to WASM Integration
- [x] Zero Build Step (except Rust to WASM build)
- [x] Package Management using Snowpack

## Run

```bash
python -m http.server 8080 --bind 127.0.0.1
```

## Manage Dependencies using Snowpack

```bash
yarn
yarn add three
# You have to update package.json and add three to webDependencies manually, then
node_modules/.bin/snowpack --optimize --clean
```

```javascript
import * as THREE from "three"
```

## WASM Build

```bash
cd src/wasm/

wasm-pack build --target browser
```
