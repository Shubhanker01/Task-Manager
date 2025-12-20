import { Server, Socket } from "socket.io";
import http from "http";


let io: Server;

export const initSocket = (server: http.Server) => {
    io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173", "https://task-manager-sable-six.vercel.app/"], // frontend
            credentials: true,
        },
    });

    io.on("connection", (socket: Socket) => {
        console.log("User connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized");
    }
    return io;
};
