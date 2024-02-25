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
}

export default Gateway;