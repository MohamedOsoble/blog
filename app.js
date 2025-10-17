const express = require("express");
const routes = require("./routes");

// Initialize app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
