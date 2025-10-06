const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Example: auto-load routes from routes folder (optional)
const fs = require("fs");
const path = require("path");
const routesDir = path.join(__dirname, "src");
if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir).forEach((f) => {
    if (f.endsWith(".js")) app.use(require(path.join(routesDir, f)));
  });
}

app.get("/", (req, res) => res.send("ok"));
app.listen(port, () => console.log(`Listening ${port}`));
