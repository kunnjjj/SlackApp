//Libs
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

//Routes
import { router as directMessageRoute } from "./routes/directMessageRoute.ts";
import { router as userRoute } from "./routes/userRoute.ts";
import { router as channelRoute } from "./routes/channelRoute.ts";

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? "5000";

app.use(cors());

app.use(express.json());

app.use("/api/directmessage", directMessageRoute);
app.use("/api/user", userRoute);
app.use("/api/channel", channelRoute);

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(PORT, () => {
  console.log(`server running in mode ${process.env.NODE_ENV} on ${PORT} `);
});
