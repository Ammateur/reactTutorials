const express = require("express");
const app = express();
const Mock = require("mockjs");

const port = 3005;
app.get("/", (req, res) => {
  const resData = Mock.mock({
    "list|1-10": [
      {
        "id|+1": 1,
        name: "@name",
        para: "@paragraph",
      },
    ],
  });

  res.send(resData);
});

app.listen(port, () => {
  console.log("success");
});
