import importedMap from "src/import-map.json";
import { add } from "wasm/hello_world_bg.wasm"

import "components/Hello/index.js";

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