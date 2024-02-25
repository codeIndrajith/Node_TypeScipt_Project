import express,{ Express } from "express";
import gatewayControllers from "../controllers/gatewayController";

const router = express.Router();

router.get('/' , gatewayControllers.getAllGateways);

export default router;