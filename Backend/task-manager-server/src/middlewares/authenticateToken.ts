import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Request, Response, NextFunction } from 'express'
import { JwtPayloadUserDefined } from '../types/jwt'

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.status(401).json({ message: 'Token missing' })

        jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, user) => {
            if (err) {
                console.log('JWT verification failed:', err.message)
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ message: 'Session expired. Please log in again.' })
                }
                return res.status(403).json({ message: 'Invalid token' })
            }
            else {
                req.user = user as JwtPayloadUserDefined
                next()
            }

        })
    } catch (error: any) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Session expired. Please log in again." });
        }

        return res.status(403).json({ message: "Invalid token" });
    }
}