import multer from 'multer'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../../../public/upload") // Folder for storing files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname) // Unique filename
  }
})

const upload = multer({ storage: storage })

export default upload
