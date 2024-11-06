const express = require("express");
const app = express();
const PORT = 8081;


app.get("/api/example", (req, res) => {
  res.json({ message: "Hello, this is an example API endpoint!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
