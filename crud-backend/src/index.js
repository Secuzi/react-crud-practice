import express from "express";
import "dotenv/config";
import cors from "cors";
import clientRoutes from "./routes/clientRoutes.js";
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/clients", clientRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
