import appRoot from 'app-root-path';
import winston from 'winston';

var getLabel = function (callingModule) {
  var parts = callingModule.filename.split ('/');
  return parts[parts.length - 2] + '/' + parts.pop ();
};

var options = {
  file: module => {
    return {
      level: 'info',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      format: winston.format.combine (
        winston.format.label ({label: getLabel (module)}),
        winston.format.timestamp (),
        winston.format.json ()
      ),
    };
  },
  console: module => {
    return {
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine (
        winston.format.label ({label: getLabel (module)}),
        winston.format.timestamp (),
        winston.format.colorize (),
        winston.format.printf (log => {
          return `${log.timestamp} ${log.level} [${log.label}]: ${log.message} `;
        })
      ),
    };
  },
};

var logger = module => {
  return winston.createLogger ({
    transports: [
      new winston.transports.File (options.file (module)),
      new winston.transports.Console (options.console (module)),
    ],
    exitOnError: false, // do not exit on handled exceptions
  });
};

export default logger;
