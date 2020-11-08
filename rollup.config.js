import svelte from 'rollup-plugin-svelte';
import alias from '@rollup/plugin-alias';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import cleaner from 'rollup-plugin-cleaner';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import md5 from 'md5';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const paths = {
  lib: path.resolve(__dirname, 'lib'),
  src: path.resolve(__dirname, 'src'),
};

const PRODUCTION = !process.env.ROLLUP_WATCH;
const DEVELOPMENT = !PRODUCTION;

const DIST = 'public';

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: DEVELOPMENT,
    dir: DIST,
    entryFileNames: '[name].[hash].js',
  },
  plugins: [
    alias({
      entries: [
        { find: '@lib', replacement: paths.lib },
        { find: '@src', replacement: paths.src },
      ],
    }),
    svelte({
      dev: DEVELOPMENT,
      css: (css) => {
        const hash = md5(css.code).slice(0, 8);
        css.write(`styles.${hash}.css`, DEVELOPMENT);
      },
      preprocess: autoPreprocess({ postcss: true }),
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    typescript({ sourceMap: DEVELOPMENT }),
    postcss({ extract: true }),
    babel({ babelHelpers: 'bundled' }),
    html({
      title: 'Тудушки!',
      attributes: { html: { lang: 'ru' } },
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { charset: 'utf-8' },
      ],
      publicPath: '/',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        PRODUCTION ? 'production' : 'development',
      ),
    }),
    progress(),
    DEVELOPMENT && serve(DIST),
    DEVELOPMENT && livereload(DIST),
    commonjs(),
    PRODUCTION &&
      cleaner({
        targets: [DIST],
      }),
    PRODUCTION && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
