import importedMap from "src/import-map.json";
import "components/Hello/index.js";

document.body.appendChild(document.createElement("hello-world"));
document.body.appendChild(
  Object.assign(document.createElement("pre"), {
    innerText: JSON.stringify(importedMap),
  })
);