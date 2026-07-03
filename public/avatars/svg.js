const SVGO = require('svgo')
const fs = require('fs')
const { promisify } = require('util')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const appendFileAsync = promisify(fs.appendFile)

const svgo = new SVGO({
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      removeDimensions: true,
    },
    {
      removeAttrs: { attrs: '(xmlns|link)' },
    },
    { removeXMLNS: true },
    {
      removePrefixedAttributes: {
        type: 'perItem',
        fn: (item) => {
          item.eachAttr((attr) => {
            if (attr.prefix && attr.local) {
              item.removeAttr(attr.name)
            }
          })
        },
      },
    },
  ],
})

const createCode = (name, code) =>
  `let get${name} = (fill, size) => {j|${code}|j};\n`
const createExport = (name) => `| "${name}" => get${name}(fill, size)}\n`

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

async function runSvgo(path) {
  const folder = process.cwd()
  const file = await readFileAsync(path)
  const result = await svgo.optimize(file, { path })
  const location = `${folder}/${path}`
  const fileName = capitalize(path.split('/')[1].split('.')[0])
  await appendFileAsync(
    'SvgLoader.js',
    createCode(fileName, result.data),
    'utf-8'
  )
  await appendFileAsync('Exports.js', createExport(fileName), 'utf-8')
  await appendFileAsync('array.js', `"${fileName}",\n`, 'utf-8')
  fs.writeFileSync(`${folder}/${path}`, result.data, 'utf-8')
  return path
}

const file = process.argv[2]
runSvgo(file).then((file) => {
  console.log('done', file)
  process.exit(0)
})
