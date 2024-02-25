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


  const gatewayControllers = {getAllGateways};
  export default gatewayControllers;