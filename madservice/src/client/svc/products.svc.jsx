import axios from "axios"
import authHeader from "./auth-header"

class ProductDataService {
    async getAllProducts() {
        return await axios.get('http://localhost:3000/api/seller/products', {headers: authHeader()})
    }
    async postProduct(data) {
        try {
            const res = await axios.post('http://localhost:3000/api/seller/products', data, {headers: authHeader()})
            return res
        } catch (error) {
            throw (error)
        }
    }
    async getOneProduct(id) {
        return await axios.get(`http://localhost:3000/api/seller/products/${id}`, {headers: authHeader()})
    }
    async deleteProduct(id) {
        try {
            await axios.delete(`http://localhost:3000/api/seller/products/${id}`, { headers: authHeader() })
    
            return "Produk berhasil dihapus"
        } catch (error) {
            console.error("Error menghapus produk:", error)
            throw error 
        }
    }
    async addStock(id, data) {
        try {
            await axios.patch(`http://localhost:3000/api/seller/products/stock/${id}`, data, {headers: authHeader()})
            return "Stok berhasil ditambah"
        } catch (e) {
            console.error("Error menambahkan stock", e)
            throw e
        }
    }
    async uploadProduct(id, data) {
        try {
            await axios.put(`http://localhost:3000/api/products/${id}/upload`, data, {headers: authHeader()})
            return "Upload sukses"
        } catch (e) {
            console.error("Error upload gambar:", e)
            throw e
        }
    }
}

export default new ProductDataService