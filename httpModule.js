
const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url == '/'){
    res.end('welcome to me home page');
  }
  if(req.url == '/about'){
    res.end('welome to my about page')
  }
  res.end(`
      <h1>Opps</h1>
      <p>We can not find a page</p>
      <a href='/'> go back </a>
    `);

});

server.listen(5000);
