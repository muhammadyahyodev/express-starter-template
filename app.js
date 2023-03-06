const express = require("express");
const config = require("config");
const routes = require("./routes/index.routes");

const PORT = config.get("port") || 3030;
const app = express();

app.use(express.json());
app.use("/api", routes);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`\nServer has been started on ${PORT} port...`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
