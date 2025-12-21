import { io } from 'socket.io-client'
const URL = `${import.meta.env.VITE_DEV_SERVER}`

export const socket = io(URL, {
    autoConnect: false,
    withCredentials: true,
})
