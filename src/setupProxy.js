const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/v0',
		createProxyMiddleware({
			target: 'https://api-sandbox.uphold.com',
			changeOrigin: true,
			// pathRewrite: false,
		})
	);
};
