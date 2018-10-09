const fs = require("fs");
const { promisify } = require("util");

const readdirAsync = promisify(fs.readdir);

const ITEMS = {};
async function readDir() {
  const folders = await readdirAsync(".");

  for (const f of folders) {
    if (f.indexOf("DS_Store") === -1) {
      try {
        const r = await readdirAsync(f);
        if (Array.isArray(r)) {
          ITEMS[f] = r;
        }
      } catch (e) {}
    }
  }

  return ITEMS;
}

readDir()
  .then(items => fs.writeFileSync("files.json", JSON.stringify(items, null, 2)))
  .catch(console.error);
