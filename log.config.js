const loggger = require("log4js");

loggger.configure({
    appenders: { 
        fileLogger: { type: "file", filename: "./logs/log.txt" },
        consoleLogger: { type: "stdout" }
    },
    categories: { 
        fileLogger: { appenders: ["fileLogger"], level: "all" },
        consoleLogger: { appenders: ["consoleLogger"], level: "all" },
        default: { appenders: ["consoleLogger", "fileLogger"], level: "all" }
    }
});

const info = (message) => {
    const logs = loggger.getLogger("default");
    logs.info(message);
}

const error = (message) => {
    const logs = loggger.getLogger("file");
    logs.error(message);
};

module.exports ={
    info,
    error,
}