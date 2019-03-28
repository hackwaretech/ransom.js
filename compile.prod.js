const { compile } = require("nexe");

compile({
  input: "./index.js",
  output: "./ransomware",
  build: true,
  bundle: true,
  make: ["j4"], // instrucs make to use 4 threads,
  ico: "./static/pokemon.ico"
});
