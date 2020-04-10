import importedMap from "src/import-map.json";

document.body.innerHTML = `<pre>${JSON.stringify(importedMap)}</pre>`;
