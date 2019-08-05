'use strict';

const path = require('path');
const babel = require('rollup-plugin-babel');

const ESM = process.env.ESM === 'true';

const dest = `mdb${ESM ? '.esm' : ''}`;

const rollupConfig = {
  input: path.resolve(__dirname, './js/mdb.js'),
  output: {
    file: path.resolve(__dirname, `./dist/js/${dest}.js`),
    format: ESM ? 'esm' : 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpersWhitelist: [
        'defineProperties',
        'createClass',
        'inheritsLoose',
        'defineProperty',
        'objectSpread2'
      ]
    })
  ]
};

if (!ESM) {
  rollupConfig.output.name = 'mdb';
}

console.log('ES MODULE', ESM);

module.exports = rollupConfig;
