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

  // PUT method
  async putGateways(id: number, serialNumber: string, name: string, ipAddress: string): Promise<number> {
    await this.pool.query<any>(
      'UPDATE Gateways SET serialNumber = ?, name = ?, ipAddress = ? WHERE id = ?',
      [serialNumber, name, ipAddress, id]
    );
    return id;
  }

  // PATCH method
  async patchGateways(id: number, data: { [key: string]: any }): Promise<number> {
    const fields: string[] = [];
    const values: any[] = [];

    for (const [key, value] of Object.entries(data)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }

    values.push(id);

    await this.pool.query<any>(
      `UPDATE Gateways SET ${fields.join(',')} WHERE id = ?`,
      values
    );

    return id;
  }
}

export default Gateway;