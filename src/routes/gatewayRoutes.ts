import express,{ Express } from "express";
import gatewayControllers from "../controllers/gatewayController";

const router = express.Router();

router.get('/' , gatewayControllers.getAllGateways);
router.post('/' , gatewayControllers.addGateways);

export default router;