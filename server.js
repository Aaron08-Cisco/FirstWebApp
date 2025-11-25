const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Aaron Mendoza Malabanan\n");
  res.write("BSIT NT-4101\n");
  res.write("Love the Lord with all your heart, soul, mind and love your neighbor as yourself.\n")
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
