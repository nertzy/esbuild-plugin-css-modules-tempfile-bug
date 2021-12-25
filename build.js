// From https://github.com/koluch/esbuild-plugin-css-modules/issues/5#issuecomment-921363855

const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass')
const cssModulesPlugin = require('esbuild-plugin-css-modules')

esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outfile: 'bundle.js',
  plugins: [sassPlugin(), cssModulesPlugin()],
}).catch((e) => console.error(e.message))
