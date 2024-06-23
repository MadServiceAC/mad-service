import db from '../models/index.js'

const {user: User} = db

export const allAccess = (req, res) => {
    res.status(200).send("Selamat datang, global user.")
  }
  
  export const userBoard = (req, res) => {
    res.status(200).send("Selamat datang, User.")
  }
  
  export const adminBoard = (req, res) => {
    res.status(200).send("Selamat Datang, Admin.")
  }
  
  export const sellerBoard = (req, res) => {
    res.status(200).send("SELAMAT DATANG, Seller!")
  }
  
  export const technicianBoard = (req, res) => {
    res.status(200).send("Selamat Datang, Teknisi.")
  }

  export async function getUser(req, res) {
    const userId = req.params.id
  
    try {
      const user = await User.findByPk(userId)
      if (!user) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' })
      }
      res.status(200).json(user)
    } catch (error) {
      console.error('Error fetching user:', error)
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengguna' })
    }
  }

  export async function updateUser(req, res) {
    const userId = req.params.id
    const updatedData = req.body
  
    try {
      const user = await User.findByPk(userId)
      if (!user) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' })
      }
  
      await user.update(updatedData)
  
      res.status(200).json({ message: 'Data pengguna berhasil diperbarui' })
    } catch (error) {
      console.error('Error updating user:', error)
      res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui data pengguna' })
    }
  }