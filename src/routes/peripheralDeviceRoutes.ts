import express,{ Express } from "express";
import peripheralDeviceControllers from "../controllers/peripheralDeviceController";

const router = express.Router();

router.get('/' , peripheralDeviceControllers.getAllPeripheralDevices);
router.post('/' , peripheralDeviceControllers.addPeripheralDevices);
router.put('/:id' , peripheralDeviceControllers.updatePeripheralDevices);
router.patch('/:id' , peripheralDeviceControllers.patchUpdatePeripheralDevices);
router.delete('/:id' , peripheralDeviceControllers.removePeripheralDevices);

export default router;