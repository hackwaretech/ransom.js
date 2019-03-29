module.exports = {
  input: "./main.js",
  name: "Ransomware",
  output: "./dist/ransomware.run",
  target: "linux-x64-11.12.0",
  build: true,
  bundle: true,
  make: ["j4"] // instructs `make` to use 4 threads
};
