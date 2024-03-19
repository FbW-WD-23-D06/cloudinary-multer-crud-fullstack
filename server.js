import express from "express";
import "./config.js";
import "./db-connection.js";
import usersRouter from "./routes/usersRouter.js";
import cors from "cors";
import errorResponder from "./middlewares/errorResponder.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

app.use(errorResponder);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
