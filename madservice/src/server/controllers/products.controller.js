import db from '../models/index.js'
import { fileURLToPath } from 'url'
import upload from '../middleware/upload.js'
import path from 'path'

const { products: Products, features: Features } = db
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function createProduct(req, res) {
  try {
      const { 
          name, image_path, description, category, brand, price, stock, color, power_cons, 
          dimen, weight, warranty, cooling_cap, ref_type, pipe_size, 
          outdoor_dimen, outdoor_weight, madein 
      } = req.body
      const userId = req.userId
      const sku = req.body.sku

      const productData = {
          sku,
          image_path, 
          name,
          description,
          category,
          brand,
          price,
          stock,
          userId
      }

      const featuresData = {
          sku,
          color,
          power_cons,
          dimen,
          weight,
          warranty,
          cooling_cap,
          ref_type,
          pipe_size,
          outdoor_dimen,
          outdoor_weight,
          madein
      }

      const product = await Products.create(productData)
      featuresData.sku = product.sku
      await Features.create(featuresData)

      res.status(201).json({ message: 'Produk telah dibuat', product })
  } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat membuat produk', error: error.message })
  }
}

export async function getAllProducts(req, res) {
    try {
        const products = await Products.findAll({
            include: [
              { 
                model: Features,
                as: 'product_feature'
              }
            ]
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk', error: error.message })
    }
}

export async function getProduct(req, res) {
    try {
        const productId = req.params.id 

        if (!productId) {
            return res.status(400).json({ message: 'ID produk harus diberikan.' })
        }

        const product = await Products.findOne({
            where: { id: productId },
            include: [{ model: Features, as: 'product_feature' }]
          })

        if (!product) {
            return res.status(404).json({ message: 'Produk tidak ditemukan.' })
        }

        res.status(200).json(product)
    } catch (error) {
        console.error('Terjadi kesalahan:', error)
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk.', error: error.message })
    }
}


export async function updateProduct(req, res) {
    try {
      const { id } = req.params
      const { 
        sku, image_path, name, description, category, brand, price, stock,
        color, power_cons, dimen, weight, warranty, cooling_cap, ref_type, 
        pipe_size, outdoor_dimen, outdoor_weight, madein 
      } = req.body
  
      const product = await Products.findOne({ where: { id } })
  
      if (!product) {
        return res.status(404).json({ message: 'Produk tidak ditemukan' })
      }
  
      await product.update({
        sku, image_path, name, description, category, brand, price, stock
      })
  
      const [features, created] = await Features.findOrCreate({ 
        where: { sku },
        defaults: { 
          color, power_cons, dimen, weight, warranty, cooling_cap, ref_type, 
          pipe_size, outdoor_dimen, outdoor_weight, madein 
        }
      })
  
      if (!created) {
        await features.update({ 
          color, power_cons, dimen, weight, warranty, cooling_cap, ref_type, 
          pipe_size, outdoor_dimen, outdoor_weight, madein 
        })
      }
  
      res.status(200).json({ message: 'Produk telah diubah', product })
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat mengubah produk', error: error.message })
    }
  }
  
export const addProductStock = async (req, res) => {
  const { id } = req.params
  const { stock } = req.body

  try {
    const product = await Products.findByPk(id)

    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' })
    }

    product.stock += stock
    await product.save()

    res.status(200).json({ message: 'Stok ditambahkan', newStock: product.stock })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export async function deleteProduct(req, res) {
    try {
        const productId = req.params.id

        const product = await Products.findByPk(productId)

      if (!product) {
        return res.status(404).json({ message: 'Produk tidak ditemukan' })
      }

      await Features.destroy({ 
        where: { sku: product.sku }
      })

      await product.destroy() 

        res.status(200).json({ message: 'Produk telah berhasil dihapus' })
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus produk', error: error.message })
    }
}

export async function uploadImage(req, res) {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      console.error('Error uploading image:', err)
      return res.status(500).json({ message: 'Gagal mengunggah gambar.' })
    }

    try {
      const productId = req.params.id
      const product = await Products.findByPk(productId)

      if (!product) {
        return res.status(404).json({ message: 'Produk tidak ditemukan.' })
      }

      if (req.file) {
        const { filename } = req.file
        let imagePath = path.join('/../../upload',filename)
        imagePath = imagePath.replace(/\\/g, '/')
        console.log(imagePath)

        await product.update({ image_path: imagePath })

        return res.status(200).json({
          message: 'Gambar berhasil diunggah.',
          image_path: imagePath,
        })
      } else {
        return res.status(400).json({ message: 'File gambar tidak ditemukan.' })
      }
    } catch (error) {
      console.error('Error saving image path to database:', error)
      return res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan path gambar.' })
    }
  })
}