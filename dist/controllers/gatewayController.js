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
// @desc      Add gateways
// @route     POST /gateways
// @access    Public
const addGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serialNumber, name, ipAddress } = req.body;
    try {
        const gatewayId = yield gatewayModel.postGateways(serialNumber, name, ipAddress);
        res
            .status(201)
            .json({ id: gatewayId, message: 'Gateway created successfully' });
    }
    catch (error) {
        console.log(`Error creating gateway ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// @desc      Update gateways
// @route     PUT /gateways/:id
// @access    Public
const updateGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { serialNumber, name, ipAddress } = req.body;
    try {
        yield gatewayModel.putGateways(Number(id), serialNumber, name, ipAddress);
        res.json({ id, message: 'Gateway updated successfully' });
    }
    catch (error) {
        console.log(`Gateway update not successful. Error ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// @desc      Patch gateways
// @route     PATCH /gateways/:id
// @access    Public
const updatePatchGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        yield gatewayModel.patchGateways(Number(id), data);
        res.json({ id, message: 'Gateway patched successfully' });
    }
    catch (error) {
        console.log(`Error patching gateway. Error ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// @desc      Delete gateways
// @route     DELETE /gateways/:id
// @access    Public
const removeGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield gatewayModel.deleteGateways(Number(id));
        res.json({ id, message: 'Gateway deleted successfully' });
    }
    catch (error) {
        console.log(`Error deleting gateway. Error ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
const gatewayControllers = { getAllGateways, addGateways, updateGateways, updatePatchGateways, removeGateways };
exports.default = gatewayControllers;
