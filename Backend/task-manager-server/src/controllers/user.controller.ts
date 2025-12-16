// controller for user registration and login
import { genSalt, hash } from 'bcrypt-ts'
import { User } from '../models/user.model'
import { Request, Response } from 'express'
import "dotenv/config"

export const userRegistration = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        // 1️⃣ Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 2️⃣ Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists with this email",
            });
        }

        // 3️⃣ Hash password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        // 4️⃣ Create user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // 5️⃣ Send response (never send password)
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.log(error)
    }
}









