import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import replace from "@rollup/plugin-replace";
import React from "react";
import ReactDOM from "react-dom";

const config = {
  input: "components/OpenGraphImage.tsx",
  output: [{ file: "image.ts", format: "iife" }],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: "node_modules/**",
    }),
    common({
      namedExports: {
        "react-dom": Object.keys(ReactDOM),
        react: Object.keys(React),
      },
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    globals(),
    builtins(),
  ],
};

export default config;
