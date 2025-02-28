import express from "express";
import * as clientController from "../controllers/clientController.js";
const router = express.Router();
router.get("/search", clientController.searchClients);

router.post("/", clientController.createClient);
router.get("/", clientController.getClients);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
export default router;
