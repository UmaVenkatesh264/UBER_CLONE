require('dotenv').config(); // Load .env variables

const http = require("http");
const app = require("./app");
const connectDB = require("./db/db");

const port = process.env.PORT || 4001;
const server = http.createServer(app);

connectDB()
  .then(() => {
    console.log("✅ DB connected");
    server.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB:", err.message);
  });
