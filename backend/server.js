import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import User from './models/users.js';
import Auth from './routes/auth.js';


const app = express();
app.use(cors());
app.use(express.json());

// Verify that JWT_SECRET is loaded
// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in the environment variables');
// }

// Test route (you can remove this)
app.get("/message", (_, res) => res.send("Hello from express!"));

// Use the Auth class for registration and login
app.post('/register', Auth.register);
app.post('/login', Auth.login);

// Protect routes using middleware (add this later)
// app.get('/protected', authenticate, (req, res) => {
//   // This route is only accessible if the user is authenticated
//   res.json({ message: 'You are authenticated!' });
// });

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000"));
