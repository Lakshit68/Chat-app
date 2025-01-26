const express = require('express')
const http = require('http')
const Server = require('socket.io').Server
const Connection = require('./db.js')
const mongoose = require("mongoose")
<<<<<<< HEAD
const Chat = require('./models/Chat.js')
=======
const Chat = require('./Chat.js')
>>>>>>> c372f4b5802252bf8c0e83b9e9f9893c47327896
const { timeStamp } = require('console')

const app = express()
app.use(express.json())
Connection()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("connected");

    const loadMessages = async () => {
        try {
            const messages = await Chat.find().sort({timeStamp : 1}).exec();
            socket.emit('chat', messages)
        } catch(err) {
            console.log(err)
        }
    }
    loadMessages();

    socket.on('newMessage', async (msg) => {
        try {
            const newMessage = new Chat(msg)
            await newMessage.save()
            io.emit('message', msg)
        }catch(err) {
            console.log(err)
        }
    })

    socket.on("disconnect", () => {
        console.log("disconnect")
    })
})

server.listen("3001", () => {
    console.log("running on 3001 port")
<<<<<<< HEAD
})
=======
})
>>>>>>> c372f4b5802252bf8c0e83b9e9f9893c47327896
