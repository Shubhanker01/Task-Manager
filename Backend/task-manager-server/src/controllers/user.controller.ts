// controller for user registration and login
import { genSalt, hash, compare } from 'bcrypt-ts'
import { User } from '../models/user.model'
import { Request, Response } from 'express'
import "dotenv/config"
import jwt from 'jsonwebtoken'

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
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

// controller for login
export const userLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            })
        }
        // check password
        const comparePassword = await compare(password, user.password)
        if (!comparePassword) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            })
        }
        const token = jwt.sign({
            userId: user._id,
            email: user.email
        }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' })
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        })
        return res.status(200).json({
            message: "User successfully logged in!!!",
            user: {
                userId: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}









