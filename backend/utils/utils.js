async function createUsersTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('user', 'seller', 'teknisi') NOT NULL DEFAULT 'user'
      )
    `;
    try {
      await db.promise().query(createTableQuery);
      console.log("Tabel 'users' berhasil dibuat atau sudah ada.");
    } catch (error) {
      console.error("Error saat membuat tabel 'users':", error);
      throw error;
    }
  }

async function createItemsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        sku VARCHAR(50) UNIQUE NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT,
        quantity INT NOT NULL,
        image VARCHAR(255),
      )
    `; 
  
    try {
      await db.promise().query(createTableQuery);
      console.log("Tabel 'items' berhasil dibuat atau sudah ada.");
    } catch (error) {
      console.error("Error saat membuat tabel 'items':", error);
      throw error; 
    }
  }
  