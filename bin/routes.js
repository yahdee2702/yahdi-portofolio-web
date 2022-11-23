const indexRoute = {
	method: "GET",
	path: "/",
	handler: {
		view: "home",
	},
};

const certificatesRoute = {
	method: "GET",
	path: "/certificates",
	handler: {
		view: "certificates",
	},
};

const projectsRoute = {
	method: "GET",
	path: "/projects",
	handler: {
		view: "projects",
	},
};

const publicRoute = {
	method: "GET",
	path: "/api/assets/{file*}",
	handler: {
		directory: {
			path: "public",
			redirectToSlash: true,
			listing: true,
		},
	},
};

module.exports = [indexRoute, projectsRoute, certificatesRoute, publicRoute];
