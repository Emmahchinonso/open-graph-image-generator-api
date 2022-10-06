import babel from "rollup-plugin-babel";

const config = {
  input: "components/OpenGraphImage.tsx",
  output: [{ file: "image.ts", format: "cjs" }],
  plugins: [babel({ extensions: [".js", ".jsx", ".ts", ".tsx"] })],
};

export default config;
