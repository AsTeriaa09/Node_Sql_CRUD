require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/userRoute")
const cors = require("cors")

app.use(cors());
app.use(express.json());

app.use("/",router);

const PORT = process.env.port;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
