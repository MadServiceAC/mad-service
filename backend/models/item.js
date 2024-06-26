import db from '../lib/db.js';
import {createItemsTable} from '../utils/utils.js';

class Item {
  static async findAll() {
    try {
      await createItemsTable(); 
      const [rows] = await db.query('SELECT * FROM items');
      return rows;
    } catch (error) {
      console.error('Error fetching all items:', error);
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM items WHERE id = ?', [id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error('Error fetching item by ID:', error);
      throw error;
    }
  }

  static async findBySKU(sku) {
    try {
      const [rows] = await db.query('SELECT * FROM items WHERE sku = ?', [sku]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error('Error fetching item by SKU:', error);
      throw error;
    }
  }

  static async create(itemData) {
    try {
      const [result] = await db.query('INSERT INTO items SET ?', itemData);
      return result.insertId;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  static async update(id, itemData) {
    try {
      await db.query('UPDATE items SET ? WHERE id = ?', [itemData, id]);
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      await db.query('DELETE FROM items WHERE id = ?', [id]);
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  }
}

export default Item;
