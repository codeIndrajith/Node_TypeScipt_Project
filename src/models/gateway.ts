import mysql, { Pool, RowDataPacket } from 'mysql2/promise';

class Gateway {
    private pool: Pool;

    constructor() {
        this.pool = mysql.createPool({
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
  async getAllGateways(): Promise<RowDataPacket[]> {
    const [rows] = await this.pool.query<RowDataPacket[]>('SELECT * FROM Gateways');
    return rows;
  }

  // POST method
  async postGateways(serialNumber: string, name: string, ipAddress: string): Promise<number> {
    const [result] = await this.pool.query<any>(
      'INSERT INTO Gateways (serialNumber, name, ipAddress) VALUES (?, ?, ?)',
      [serialNumber, name, ipAddress]
    );
    return result.insertId;
  }
}

export default Gateway;