const log=require("./logger")
console.log(log);

log.info("This is info");
log.warn("This is warning");
log.error("This is error");

console.log(process.pid)
console.log(process.execPath)
console.log(process.cwd())