const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.aivideoapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding to the target
      },
      onProxyReq: (proxyReq, req, res) => {
        // Add any custom headers here if needed
      },
      onProxyRes: (proxyRes, req, res) => {
        // Modify the response headers if needed
      },
    })
  );
}; 