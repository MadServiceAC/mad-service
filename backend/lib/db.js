import mysql from 'mysql2';

const config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
};

async function ensureDatabaseExists(databaseName) {
  const connection = mysql.createConnection(config);

  try {
    await connection.promise().query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
    console.log(`Database '${databaseName}' berhasil dibuat atau sudah ada.`);
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat database:', error);
    throw error; // Melempar error agar proses selanjutnya bisa ditangani
  } finally {
    connection.end();
  }
}

let pool;
ensureDatabaseExists('madservice')
  .then(() => {
    pool = mysql.createPool({
      ...config,
      database: 'madservice',
      waitForConnections: true,
    });
  })
  .catch(error => {
    console.error('Gagal membuat pool koneksi karena database tidak tersedia:', error);
    process.exit(1); 
  });

  export default pool; 