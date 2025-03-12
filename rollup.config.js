import svelte from "rollup-plugin-svelte";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.svelte.js",
  output: {
    format: "iife",
    name: "template",
    file: "template.js",
    sourcemap: true,
  },

  // d3 relies on the node-resolve plugin
  plugins: [
    svelte(),
    nodeResolve({
      browser: true,
    }),
    terser(),
  ],
};
