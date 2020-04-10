import "components/Hello/index.js";

import importedMap from "src/import-map.json";

document.body.append(
  document.createElement("hello-world"),
  Object.assign(document.createElement("pre"), {
    innerText: JSON.stringify(importedMap),
  })
);