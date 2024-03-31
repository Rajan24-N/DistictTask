const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;
const cache = {}; 

app.post("/task", (req, res) => {
  const { numberValue } = req.body;
  if (cache[numberValue]) {
    res.send(cache[numberValue]);
    return;
  }

  const responseArray = [];

  for (let index = 1; index <= numberValue; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      responseArray.push("FizBuz");
    } else if (index % 3 === 0) {
      responseArray.push("Fiz");
    } else if (index % 5 === 0) {
      responseArray.push("Buz");
    } else {
      responseArray.push(index);
    }
  }

  cache[numberValue] = responseArray;

  res.send(responseArray);
});

app.listen(PORT, () => {
  console.log("Backend is running successfully");
});
