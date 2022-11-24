require("dotenv").config();

const Hapi = require("@hapi/hapi");

const Routes = require("./bin/routes");

async function init() {
	const server = Hapi.server({
		host: process.env.HOST,
		port: process.env.PORT ?? 3000,
	});

	await server.register(require("@hapi/vision"));
	await server.register(require("@hapi/inert"));

	server.views({
		engines: {
			html: require("handlebars"),
		},
		relativeTo: __dirname,
		path: "views",
		context: {
			assetsPath: `${process.env.URL ?? server.info.uri}/api/assets`,
		},
	});

	server.route(Routes);

	await server.start();

	console.log(`Starting server in ${server.info.uri}`);
	console.log(__dirname);
}

init();
