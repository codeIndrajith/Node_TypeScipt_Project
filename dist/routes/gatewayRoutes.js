"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gatewayController_1 = __importDefault(require("../controllers/gatewayController"));
const router = express_1.default.Router();
router.get('/', gatewayController_1.default.getAllGateways);
router.post('/', gatewayController_1.default.addGateways);
router.put('/:id', gatewayController_1.default.updateGateways);
router.patch('/:id', gatewayController_1.default.updatePatchGateways);
router.delete('/:id', gatewayController_1.default.removeGateways);
exports.default = router;
