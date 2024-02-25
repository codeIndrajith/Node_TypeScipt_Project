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
const promise_1 = __importDefault(require("mysql2/promise"));
class Gateway {
    constructor() {
        this.pool = promise_1.default.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'gateway_management',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    // GET method
    getAllGateways() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.pool.query('SELECT * FROM Gateways');
            return rows;
        });
    }
    // POST method
    postGateways(serialNumber, name, ipAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.pool.query('INSERT INTO Gateways (serialNumber, name, ipAddress) VALUES (?, ?, ?)', [serialNumber, name, ipAddress]);
            return result.insertId;
        });
    }
    // PUT method
    putGateways(id, serialNumber, name, ipAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool.query('UPDATE Gateways SET serialNumber = ?, name = ?, ipAddress = ? WHERE id = ?', [serialNumber, name, ipAddress, id]);
            return id;
        });
    }
    // PATCH method
    patchGateways(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const fields = [];
            const values = [];
            for (const [key, value] of Object.entries(data)) {
                fields.push(`${key} = ?`);
                values.push(value);
            }
            values.push(id);
            yield this.pool.query(`UPDATE Gateways SET ${fields.join(',')} WHERE id = ?`, values);
            return id;
        });
    }
    // DELETE method
    deleteGateways(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool.query('DELETE FROM Gateways WHERE id = ?', [id]);
            return id;
        });
    }
}
exports.default = Gateway;
