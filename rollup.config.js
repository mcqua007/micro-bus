import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

export default [
  {
    input: "./index.js",
    plugins: [ terser(), filesize()],
    output: {
      sourcemap: true, //can pass 'inline' for inline source maps
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "MicroBus",
    },
  },
  {
    input: "./index.js",
    plugins: [ terser(), filesize()],
    output: {
      sourcemap: true, //can pass 'inline' for inline source maps
      file: "dist/index.min.js",
      format: "es",
    },
  },
];
