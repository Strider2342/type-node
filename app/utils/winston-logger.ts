import * as winston from "winston";
import * as dateFormat from "dateformat";

let logFile = "log/error.log";

let formatter = function(options) {
  return dateFormat(Date.now(), "yyyy-mm-dd H:MM:ss:l") + ' ' + options.level.toUpperCase() + ': ' + (options.message ? options.message : '') +
    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
}

winston.configure({
  transports: [
    new winston.transports.File({
      filename: logFile,
      json: false,
      formatter: formatter
    })
  ]
});

export { winston };