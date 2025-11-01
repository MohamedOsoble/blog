const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./passport/passport");

// Initialize app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3000",
    ],
    credentials: true,
    sameSite: "lax",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"],
  })
);

// Add the routes
app.use("/posts", routes.posts);
app.use("/users", routes.users);
app.use("/comments", routes.comments);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  }
  console.log(`Express app is live and listening on Port: ${PORT}`);
});
