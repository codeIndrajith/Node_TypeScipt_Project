import express,{ Express } from "express";
import peripheralDeviceControllers from "../controllers/peripheralDeviceController";

const router = express.Router();

router.get('/' , peripheralDeviceControllers.getAllPeripheralDevices);

export default router;