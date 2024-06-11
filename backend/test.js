import db from './db.js';

// Menguji koneksi dengan query sederhana
db.query('SELECT 1 + 1 AS result')
  .then(([results, fields]) => {
    console.log('Berhasil terhubung ke database. Hasil query:', results[0].result);
  })
  .catch((error) => {
    console.error('Gagal terhubung ke database:', error);
  })
  .finally(() => {
    // Tidak perlu memanggil db.end() karena pool akan menangani koneksi
    // Namun, jika Anda ingin menutup semua koneksi pool, Anda bisa menggunakan db.end()
  });
