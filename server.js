const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>My Back-End Project</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            text-align: center;
            padding: 50px;
          }
          .card {
            background: white;
            width: 500px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
          }
          h1 { color: #2c3e50; }
          p { color: #555; }
          a {
            display: inline-block;
            margin-top: 20px;
            color: #3498db;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Welcome!</h1>
          <p><strong>Name:</strong> Aaron Mendoza Malabanan</p>
          <p><strong>Course:</strong> BSIT NT-4101</p>
          <p><strong>Motto:</strong> Love the Lord with all your heart, soul, mind and love your neighbor as yourself.</p>
          <a href="/about">Go to About Page</a>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
