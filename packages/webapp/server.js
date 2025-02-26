// filepath: /server.js
const express = require('express');
const serveStatic = require('serve-static');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;
const apiProxyTarget = 'http://localhost:8080';

// Proxy any calls to /api to the API server
app.use(
  '/api',
  createProxyMiddleware({
    target: apiProxyTarget,
    changeOrigin: true,
  })
);

// Serve static files from your production build folder
app.use(serveStatic('./build'));

app.listen(port, () => {
  console.log(`Production server running on port ${port}`);
});