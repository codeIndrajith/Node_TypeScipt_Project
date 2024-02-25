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

// @desc      Add peripheralDevices
// @route     POST /devices
// @access    Public
const addPeripheralDevices = async (req: Request, res: Response): Promise<void> => {
    const { gatewayId, vendor, status } = req.body;
    try {
      const deviceId = await peripheralDeviceModel.postPeripheralDevices(
        gatewayId,
        vendor,
        status
      );
      res.status(201).json({
        id: deviceId,
        message: 'Peripheral devices created successfully',
      });
    } catch (error) {
      console.log(`Error adding the peripheral devices. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// @desc      Update(put) peripheralDevices
// @route     PUT /devices/:id
// @access    Public
const updatePeripheralDevices = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { gatewayId, vendor, status } = req.body;
    try {
      await peripheralDeviceModel.putPeripheralDevices(
        Number(id),
        gatewayId,
        vendor,
        status
      );
      res.status(201).json({
        message: 'Peripheral devices Updated successfully',
      });
    } catch (error) {
      console.log(`Error update the peripheral devices. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// @desc      Update(patch) peripheralDevices
// @route     PATCH /devices/:id
// @access    Public
const patchUpdatePeripheralDevices = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      await peripheralDeviceModel.patchPeripheralDevices(Number(id), data);
      res.status(201).json({
        message: 'Peripheral devices patch Updated successfully',
      });
    } catch (error) {
      console.log(`Error patch update the peripheral devices. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // @desc      Delete peripheralDevices
// @route     DELETE /devices/:id
// @access    Public
const removePeripheralDevices = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
  
    try {
      await peripheralDeviceModel.deletePeripheralDevices(Number(id));
      res.status(201).json({
        message: 'Peripheral devices deleted successfully',
      });
    } catch (error) {
      console.log(`Error delete the peripheral devices. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const peripheralDeviceControllers = {
    getAllPeripheralDevices,
    addPeripheralDevices,
    updatePeripheralDevices,
    patchUpdatePeripheralDevices,
    removePeripheralDevices
};

  export default peripheralDeviceControllers;