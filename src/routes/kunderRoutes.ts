import { Router } from "express";
import { getKunder, getKund } from "../controllers/kunderController.js";

const router = Router();

router.get("/", getKunder);
router.get("/:id", getKund);

export default router;
