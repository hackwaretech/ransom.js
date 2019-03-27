const { compile } = require("nexe");

compile({
  input: "./index.js",
  output: "./ransomware",
  build: true,
  bundle: true
});
