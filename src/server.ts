import express, { Express , Request , Response , NextFunction } from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import gatewayRoutes from '../src/routes/gatewayRoutes';
import peripheralDeviceRoutes from '../src/routes/peripheralDeviceRoutes';

dotenv.config();

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/gateways' , gatewayRoutes);
app.use('/devices' , peripheralDeviceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server is Running on PORT ${PORT}`))