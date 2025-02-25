import express from "express";
import * as clientController from "../controllers/clientController";
const router = express.Router();

router.get("/", clientController.getClients);

export default router;
