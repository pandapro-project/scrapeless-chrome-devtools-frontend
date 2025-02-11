const http = require('http');
const fs = require('fs/promises');

// 写一个http服务器，监听8080端口，当访问http://localhost:8080/时，返回一个html页面

// http://localhost:8080/inspector?ws=127.0.0.1:8001/devtools/profile/{profileId}/page/{pageId}
const server = http.createServer(async (req, res) => {
  const filePath = `./public${req.url.split('?')[0]}`;
  const suffix = req.url.split('?')[0].split('.').pop();

  const data = await fs.readFile(filePath);

  if (suffix === 'css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
  } else if (suffix === 'js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript'});
  } else if (suffix === 'png') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
  } else if (suffix === 'jpg') {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  } else if (suffix === 'jpeg') {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  } else if (suffix === 'gif') {
    res.writeHead(200, { 'Content-Type': 'image/gif' });
  } else if (suffix === 'ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  } else if (suffix === 'json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  } else if (suffix === 'pdf') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
  } else if (suffix === 'xml') {
    res.writeHead(200, { 'Content-Type': 'application/xml' });
  } else if (suffix === 'svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  } else if (suffix === 'html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  } else if (suffix === 'mjs') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
  } else if (suffix === 'cjs') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
  } else if (suffix === 'map') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
  }

  res.end(data);
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});