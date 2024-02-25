import mysql, { Pool, RowDataPacket } from 'mysql2/promise';

class PeripheralDevices {
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
  async getAllPeripheralDevices(): Promise<RowDataPacket[]> {
    const [rows] = await this.pool.query<RowDataPacket[]>('SELECT * FROM PeripheralDevices');
    return rows;
  }

  // POST method
  async postPeripheralDevices(gatewayId: number, vendor: string, status: string): Promise<number> {
    const [result] = await this.pool.query<any>(
      'INSERT INTO PeripheralDevices (gatewayId, vendor, status) VALUES (?, ?, ?)',
      [gatewayId, vendor, status]
    );
    return result.insertId;
  }

  // PUT method
  async putPeripheralDevices(id: number, gatewayId: number, vendor: string, status: string): Promise<number> {
    await this.pool.query<any>(
      'UPDATE PeripheralDevices SET gatewayId = ?, vendor = ?, status = ? WHERE id = ?',
      [gatewayId, vendor, status, id]
    );
    return id;
  }

  // PATCH method
  async patchPeripheralDevices(id: number, data: { [key: string]: any }): Promise<number> {
    const fields: string[] = [];
    const values: any[] = [];

    for (const [key, value] of Object.entries(data)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }

    values.push(id);

    await this.pool.query<any>(
      `UPDATE PeripheralDevices SET ${fields.join(',')} WHERE id = ?`,
      values
    );

    return id;
  }
}

export default PeripheralDevices;