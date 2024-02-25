import { Request, Response } from 'express';
import Gateway from '../models/gateway';

const gatewayModel = new Gateway();

// @desc      Fetch All gateways
// @route     GET /gateways
// @access    Public
const getAllGateways = async (req: Request, res: Response): Promise<void> => {
    try {
      const gateway = await gatewayModel.getAllGateways();
      res.json(gateway);
    } catch (error) {
      console.log(`Gateways is not working. Error is : ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// @desc      Add gateways
// @route     POST /gateways
// @access    Public
const addGateways = async (req: Request, res: Response): Promise<void> => {
    const { serialNumber, name, ipAddress } = req.body;
    try {
      const gatewayId = await gatewayModel.postGateways(
        serialNumber,
        name,
        ipAddress
      );
      res
        .status(201)
        .json({ id: gatewayId, message: 'Gateway created successfully' });
    } catch (error) {
      console.log(`Error creating gateway ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// @desc      Update gateways
// @route     PUT /gateways/:id
// @access    Public
const updateGateways = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { serialNumber, name, ipAddress } = req.body;
    try {
      await gatewayModel.putGateways(Number(id), serialNumber, name, ipAddress);
      res.json({ id, message: 'Gateway updated successfully' });
    } catch (error) {
      console.log(`Gateway update not successful. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// @desc      Patch gateways
// @route     PATCH /gateways/:id
// @access    Public
const updatePatchGateways = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const data = req.body;
    try {
      await gatewayModel.patchGateways(Number(id), data);
      res.json({ id, message: 'Gateway patched successfully' });
    } catch (error) {
      console.log(`Error patching gateway. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// @desc      Delete gateways
// @route     DELETE /gateways/:id
// @access    Public
const removeGateways = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await gatewayModel.deleteGateways(Number(id));
      res.json({ id, message: 'Gateway deleted successfully' });
    } catch (error) {
      console.log(`Error deleting gateway. Error ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const gatewayControllers = {getAllGateways , addGateways, updateGateways , updatePatchGateways , removeGateways};
  export default gatewayControllers;