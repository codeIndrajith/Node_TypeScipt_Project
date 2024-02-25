"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gateway_1 = __importDefault(require("../models/gateway"));
const gatewayModel = new gateway_1.default();
// @desc      Fetch All gateways
// @route     GET /gateways
// @access    Public
const getAllGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gateway = yield gatewayModel.getAllGateways();
        res.json(gateway);
    }
    catch (error) {
        console.log(`Gateways is not working. Error is : ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const gatewayControllers = { getAllGateways };
exports.default = gatewayControllers;
