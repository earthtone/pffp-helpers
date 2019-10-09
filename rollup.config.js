import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './main.js',
  plugins: [
    resolve({
      mainFields: ['module', 'main']
    }),
    commonjs()
  ],
  output: [
    { file: 'dist/index.umd.js', format: 'umd', name: 'pffp-helpers' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'Pffp' }
  ]
}
