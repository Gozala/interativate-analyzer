import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import json from "rollup-plugin-json"

export default {
  input: "src/analyze.js",
  output: {
    file: "es/analyze.js",
    format: "es"
  },
  plugins: [
    json({
      preferConst: true // Default: false
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      // include: "node_modules/@babel", // Default: undefined
      // exclude: ["node_modules/**"], // Default: undefined
      exclude: ["tty", "util", "os"],
      ignoreGlobal: false, // Default: false
      sourceMap: false // Default: true
    })
  ]
}
