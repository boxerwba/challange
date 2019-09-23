const port = '8080';
const MONGODB_URL = 'mongodb://127.0.0.1:27017/chessMEAN';
if (!port) {
	console.error(`--port isn't specified`);
	process.exit(1);
}

if (!MONGODB_URL) {
	console.error(`Environment variable MONGODB_URL isn't specified`, process.env.MONGODB_URL);
	process.exit(1);
}

module.exports = {
	port: port,
	dburl: MONGODB_URL
};
