const fs = require('fs')
const { promisify } = require('util')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)

const templ = (name, code) => `
import * as React from "react";

const Svg${name} = () => (
  ${code}
)

export default Svg${name}
`

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const ITEMS = {}

async function readDir() {
  const folders = await readdirAsync('.')

  for (const f of folders) {
    if (f.indexOf('DS_Store') === -1) {
      try {
        const svgs = await readdirAsync(f)
        if (Array.isArray(svgs)) {
          const svgsToParse = svgs.
          for (const svg of svgs) {
            const path = `${process.cwd()}/${f}/${svg}`
            const res = await readFileAsync(path, 'utf8')
            const name = capitalize(svg.split('.')[0].split('-')[0])
            const code = templ(name, res)

            console.log('name', name)
            console.log('code', code)
          }
        }
      } catch (e) {
        console.log('err', e)
      }
    }
  }

  return ITEMS
}

readDir()
  .then(console.log)
  // .then(items => fs.writeFileSync('files.json', JSON.stringify(items, null, 2)))
  .catch(console.error)
