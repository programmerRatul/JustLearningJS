const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>hi</h1>
      <script>
      let sum = 0;
      let n = prompt("What is your number?")
      n = Number.parseInt(n);
      for (let i = 0; i < n; i++){
      console.log(i+1,"+")
        sum += (i+1)
      }
      console.log(sum)
      </script>
  </body>
  </html>)`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); // run `node index.js` in the terminal
