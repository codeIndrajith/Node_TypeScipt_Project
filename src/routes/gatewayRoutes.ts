import express,{ Express } from "express";
import gatewayControllers from "../controllers/gatewayController";

const router = express.Router();

router.get('/' , gatewayControllers.getAllGateways);
router.post('/' , gatewayControllers.addGateways);
router.put('/:id' , gatewayControllers.updateGateways);

export default router;