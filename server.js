const dotenv = require("dotenv");

const { app } = require("./app");

//utils
// const {initModels} = require('./models/initModels');
const { db } = require("./utils/database");

dotenv.config({ path: "/config.env" });

const startServer = async () => {
  try {
    await db
      .authenticate()
      .then(console.log("successful connection"))
      .catch((error) => console.log(error));

    // initModels();

    await db
      .sync()
      .then(console.log("successful Sync"))
      .catch((error) => console.log(error));

    const PORT = 4001;

    app.listen(PORT, () => {
      console.log("Express app running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
