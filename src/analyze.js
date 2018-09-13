const parser = require("@babel/parser")
const traverse = require("@babel/traverse")

const analyzeAST = ast => {
  let result = null
  traverse.default(ast, {
    Block(path) {
      if (path.node.type === "Program") {
        result = path.scope
        return
      }
    }
  })
  return result
}

const analyzeSource = (code, options = { sourceType: "module" }) =>
  analyzeAST(parser.parse(code, options))

self.onmessage = function(message) {
  const { bindings, globals, labels } = analyzeSource(message.data.source)

  self.postMessage({
    id: message.data.id,
    labels: Object.keys(labels),
    bindings: Object.keys(bindings),
    globals: Object.keys(globals)
  })
}