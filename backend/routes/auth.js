import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

// Configuration (replace with your actual values)
const jwtSecret = 'e8beec44635417ece8d0f7467c98343ee8b3f4721163c48cc4d52a2576144b94'; 

class Auth {
    static async register(req, res) {
        try {
            const { fullname, email, password, role } = req.body;

            // Basic input validation (you'll likely want more robust checks)
            if (!fullname || !email || !password) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            // Check if user already exists
            const existingUser = await User.findByEmail(email); 
            if (existingUser) {
                return res.status(409).json({ message: 'Email already registered' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create the user
            const userId = await User.create({ fullname, email, password: hashedPassword, role });
            return res.status(201).json({ message: 'User registered successfully', userId }); 

        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findByEmail(email);

            if (!user || !await bcrypt.compare(password, user.password)) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
            return res.json({ token }); 
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default Auth;
