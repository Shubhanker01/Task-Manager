import { Server, Socket } from "socket.io";
import http from "http";
import jwt from 'jsonwebtoken'

interface JWTPayload {
    userId: string;
    username: string;
    email: string;
}
let io: Server;

export const initSocket = (server: http.Server) => {
    io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173", "https://task-manager-sable-six.vercel.app"], // frontend
            credentials: true,
        },
    });
    io.use(async (socket: Socket, next) => {
        try {
            const token = socket.handshake.headers.cookie?.split('token=')[1];
            if (!token) {
                return next(new Error("Authentication error"))
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JWTPayload;
            socket.data.userId = decoded.userId;
            next();
        } catch (error) {
            next(new Error("Invalid token"));
        }

    })
    io.on("connection", (socket: Socket) => {
        const userId = socket.data.userId;
        socket.join(userId);
        console.log("User connected:", socket.id);
        console.log("rooms:", socket.rooms)
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
        socket.on("taskCreated", (assignedTo: string) => {
            socket.to(assignedTo).emit("newTask", "A new task has been assigned to you!")
        })
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized");
    }
    return io;
};
