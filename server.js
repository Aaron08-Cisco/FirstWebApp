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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card {
            background: white;
            width: 500px;
            padding: 30px 25px;
            border-radius: 25px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            text-align: center;
          }
          h1 { 
            color: #2c3e50; 
            margin-bottom: 15px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          p { 
            color: #555; 
            line-height: 1.5;
            margin: 8px 0;
            font-weight: 300;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }
          a:hover {
            color: #217dbb;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Welcome!</h1>
          <p><strong>Name:</strong> Aaron Mendoza Malabanan</p>
          <p><strong>Course:</strong> BSIT NT-4101</p>
          <p><strong>Motto:</strong> Love the Lord with all your heart, soul, mind and love your neighbor as yourself.</p>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
