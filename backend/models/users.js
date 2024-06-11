import db from '../lib/db.js'

class User {
    static async allUser() {
        try {
            const [rows] = await db.promise().query('SELECT * FROM users');
            return rows;
        } catch (error) {
            console.error('error fetching all users', error);
            throw error;
        }
    }
    static async findById(id) {
        try {
            const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('error get user', error);
            throw error;
        }
    }
    static async findByEmail(email) {
        try {
            const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
        } catch (error) {
            console.error('where is email?', error);
            throw error;
        }
    }
    static async create(user) {
        try {
            const { fullname, email, password, role } = user;
            const [results] = await db.promise().query('INSERT INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)', [fullname, email, password, role]);
            return results.insertId;
        } catch (error) {
            console.error('error create user', error);
            throw error;
        }
    }
    static async update(id, user) {
        try {
            const { fullname, email, password, role } = user;
            const [results] = await db.promise().query('UPDATE users SET fullname = ?, email = ?, password = ?, role = ? WHERE id = ?', [fullname, email, password, role, id]);
            return results.affectedRows;
        } catch (error) {
            console.error('error update user', error);
            throw error;
        }
    }
    static async delete(id) {
        try {
            const [results] = await db.promise().query('DELETE FROM users WHERE id = ?', [id]);
            return results.affectedRows;
        } catch (error) {
            console.error('error delete user', error);
            throw error;
        }
    }
}

export default User;