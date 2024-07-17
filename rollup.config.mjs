import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import plugin from "rollup-plugin-dts";
import sass from "rollup-plugin-sass";
import autoprefixer from "autoprefixer";
import del from "rollup-plugin-delete";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      sass({
        output: "dist/components.css",
      }),
      // postcss({
      //   extensions: [".css"],
      //   inject: true,
      //   extract: false,
      // }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/],
  },
  {
    input: "src/css/style.scss",
    output: {
      file: "dist/base.css",
      format: "es",
    },
    plugins: [
      postcss({
        preprocessor: (content, id) =>
          new Promise((resolve, reject) => {
            const result = sass.renderSync({ file: id });
            resolve({ code: result.css.toString() });
          }),
        plugins: [autoprefixer],
        sourceMap: true,
        extract: true,
        extensions: [".sass", ".css"],
        minimize: true,
      }),
    ],
  },
];
