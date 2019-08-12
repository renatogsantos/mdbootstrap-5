'use strict';

const path = require('path');
const serve = require('rollup-plugin-serve');
const commonjs = require('rollup-plugin-commonjs');

const external = ['popper.js'];

const rollupConfig = {
  input: path.resolve(__dirname, './js/mdb.js'),
  output: {
    file: 'site/assets/compiled.js',
    format: 'umd',
    name: 'compiled.js'
  },
  external,
  plugins: [
    serve({
      open: true,
      contentBase: 'site',
      port: '8080'
    })
  ]
};

module.exports = rollupConfig;
