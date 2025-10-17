const express = require("express");
const cors = require("cors");
const os = require("os");
const http = require("http");
const productRoutes = require("./routes/products");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Log every request using http module
const server = http.createServer(app);
server.on("request", (req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

// Routes
app.use("/products", productRoutes);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("📊 System Info:");
  console.log(`Platform: ${os.platform()}`);
  console.log(`Architecture: ${os.arch()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log(`Hostname: ${os.hostname()}`);
});
