module.exports = {
  input: "./main.js",
  name: "Ransomware",
  output: "./dist/ransomware",
  target: "macos-x64-11.12.0", //"win32-x86-11.12.0",
  build: true,
  bundle: true,
  make: ["j4"] // instructs `make` to use 4 threads
};
