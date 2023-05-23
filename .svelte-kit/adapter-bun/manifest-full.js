export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b314c386.js","app":"_app/immutable/entry/app.85f1c69d.js","imports":["_app/immutable/entry/start.b314c386.js","_app/immutable/chunks/index.20fe1016.js","_app/immutable/chunks/singletons.fbee8ebe.js","_app/immutable/entry/app.85f1c69d.js","_app/immutable/chunks/index.20fe1016.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: () => import('./entries/endpoints/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
