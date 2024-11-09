import fs from 'fs-extra'
import path from 'path'
import { rollup } from 'rollup'
import dts from 'rollup-plugin-dts'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { execSync } from 'child_process'
import { rimraf } from 'rimraf'
import { log } from './log.js'

const LIB = 'libregl'

const packageDir = path.resolve(`packages/${LIB}`)
const libEntrypoint = path.resolve(packageDir, 'src/index.ts')
const outputDir = path.resolve(packageDir, 'dist')
const tsconfigPath = path.resolve(packageDir, 'tsconfig.json')

async function buildDistDts() {
  const dtsBundle = await rollup({
    input: path.resolve(packageDir, '_types/index.d.ts'),
    plugins: [
      dts(),
      alias({
        entries: [
          {
            find: '@/types',
            replacement: path.resolve(packageDir, '_types'),
          },
        ],
      }),
    ],
  })
  const {
    output: [{ code }],
  } = await dtsBundle.generate({ format: 'es' })

  fs.outputFileSync(path.join(`${packageDir}/dist`, `${LIB}.d.ts`), code)
}

function generateConfig(format) {
  const extension = format === 'es'
    ? 'esm.js'
    : format === 'umd'
      ? 'js'
      : 'cjs'

  return {
    input: libEntrypoint,
    external: ['vue', 'maplibre-gl'],
    plugins: [
      resolve(),
      typescript({ tsconfig: tsconfigPath }),
      terser(),
    ],
    output: {
      format,
      exports: format === 'umd' || format === 'cjs' ? 'named' : undefined,
      name: format === 'umd' ? LIB : undefined,
      globals: { 'vue': 'Vue', 'maplibre-gl': 'maplibregl' },
    },
    fileName: `${LIB}.${extension}`,
  }
}

async function build() {
  rimraf.sync([
    outputDir,
    `${packageDir}/_types`,
  ])

  log('\n⏳ Generating main library...')

  // Building the main library in diffrent formats.
  const formats = ['umd', 'es', 'cjs']
  for (const format of formats) {
    const { output, fileName, ...rest } = generateConfig(format)
    const bundle = await rollup(rest)
    const {
      output: [{ code }],
    } = await bundle.generate(output)

    fs.outputFileSync(path.join(outputDir, fileName), code)
    bundle.close()
    log(`-> ✅ Generated library file ./dist/${fileName}`, false)
  }

  // Generate types.
  log('\n⏳ Generating temporary types ./_types directory...')
  execSync(`tsc --project ${tsconfigPath}`, { stdio: 'inherit' })
  log('-> ✅ Types generated in ./_types')

  // Generate type declarations.
  log(`⏳ Generating declarations in ./dist/${LIB}.d.ts...`)
  await buildDistDts()
  log(`-> ✅ Declarations generated in ./dist/${LIB}.d.ts`)

  rimraf.sync(`${packageDir}/_types`)
}

build().catch((error) => {
  console.error(error)
  process.exit(1)
})
