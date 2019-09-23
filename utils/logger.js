const { createLogger, format, transports} = require('winston');
module.exports = createLogger({
	format: format.combine(format.simple()),
	transports:[
		new transports.File({
			maxsize: 51200000,
			maxfiles: 5,
			filename: '${__dirname}/../logs/log-api.log'
		}),
		new transports.Console({
			level: 'debug',
		})
	]
})
