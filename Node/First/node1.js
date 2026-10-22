// • Node.js: a JavaScript runtime that lets you run JavaScript outside the browser, mainly to build servers, APIs and CLI tools.
// • Runtime: the environment that executes your code and gives it extra abilities. The browser gives JS document and window; Node gives it fs, http and process.
// • V8: Google's JavaScript engine (also used in Chrome) that compiles JS to machine code. Node uses V8 to run your JS.
// • libuv: a C library inside Node that handles the event loop, file system, network and a thread pool, so slow work does not block your code.
// • Non-blocking I/O: Node starts a slow task (read a file, query a DB), moves on to other work, and runs a callback when the result is ready. One thread can serve thousands of requests this way.
// • Module: a single file whose code is private unless it is exported.
// • npm: Node Package Manager, the tool and registry used to install third-party packages.
// • package.json: the project's ID card: name, version, scripts and dependencies.
// • dependency vs devDependency: a dependency is needed in production (express); a devDependency is needed only while developing (nodemon).

// How to make custom modules?
// Step 1: to export a module.
// Step 2: to import the module

const { add, sub } = require("./custom_modules/module1"); // here we imported that module
const greet = require("./custom_modules/module2.js");

console.log(add(10,20))

console.log(greet("Ashish"))