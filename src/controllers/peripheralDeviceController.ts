import { Request, Response } from 'express';
import PeripheralDevices from '../models/peripheralDevice';

const peripheralDeviceModel = new PeripheralDevices();

// @desc      Fetch All peripheralDevices
// @route     GET /devices
// @access    Public
const getAllPeripheralDevices = async (req: Request, res: Response): Promise<void> => {
    try {
      const devices = await peripheralDeviceModel.getAllPeripheralDevices();
      res.json(devices);
    } catch (error) {
      console.log(`Peripheral device model is not working. Error is : ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const peripheralDeviceControllers = {getAllPeripheralDevices};

  export default peripheralDeviceControllers;