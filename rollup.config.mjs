import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import plugin from "rollup-plugin-dts";
import sass from "rollup-plugin-sass";
import autoprefixer from "autoprefixer";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import { resolve as resolvePath } from "path";

export default [
  // base CSS
  {
    input: "src/css/style.scss",
    output: {
      file: "dist/foundations.css",
      format: "es",
    },
    plugins: [
      del({ targets: "dist/*" }),
      postcss({
        plugins: [autoprefixer],
        sourceMap: true,
        extract: true,
        extensions: [".sass", ".css"],
        minimize: true,
      }),
    ],
  },
  // Compopnents
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({
        extensions: [".css"],
        extract: "primitives.css",
        sourceMap: true,
        minimize: true,
        inject: false,
      }),
    ],
  },
  // Types
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/],
  },
];
