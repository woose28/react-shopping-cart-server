const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
  next();
});
app.use(router);

app.listen(port, () => {
  console.log(`server started! current port number is ${port}`);
});
