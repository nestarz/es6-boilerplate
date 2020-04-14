import "components/Hello/index.js";

import importedMap from "src/import-map.json";

import { add } from "./wasm/pkg/hello_world_bg.wasm"

const addResult = add(20, 10);

document.body.append(
  document.createElement("hello-world"),
  Object.assign(document.createElement("pre"), {
    innerText: JSON.stringify(importedMap),
  }),
  Object.assign(document.createElement("div"), {
    innerText: `addResult: ${addResult}`
  })
);