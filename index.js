const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Middleware
require("./middleware/common")(app);

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
//firebase-admin
// var admin = require("firebase-admin");
// var serviceAccount = require("./service-account-file.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),

//   // databaseURL: "<your database URL here>"
// });

// Server
app.listen(PORT || 5000, () => {
  console.log(`server is listening on port:${PORT}`);
});
