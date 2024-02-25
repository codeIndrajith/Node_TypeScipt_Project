import express,{ Express } from "express";
import gatewayControllers from "../controllers/gatewayController";

const router = express.Router();

router.get('/' , gatewayControllers.getAllGateways);
router.post('/' , gatewayControllers.addGateways);
router.put('/:id' , gatewayControllers.updateGateways);
router.patch('/:id' , gatewayControllers.updatePatchGateways);
router.delete('/:id' , gatewayControllers.removeGateways);

export default router;