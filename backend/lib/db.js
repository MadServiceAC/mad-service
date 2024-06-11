import mysql from 'mysql2'

// Buat koneksi ke database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'madservice',
  waitForConnections: true,
});

export default pool