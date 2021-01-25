const express = require("express")
const app = express()
const port = process.env.PORT || 8081
const server = require("http").createServer(app)
const io = require("socket.io")(server)

// chamando o html 
app.get("/", function(req,res){
    res.sendFile(__dirname+"/cd_font/index.html")
})

// config arquivos estáticos
const path = require("path")
app.use(express.static(path.join(__dirname,"public")))

io.on("connection", function(socket){
    console.log("Usuário "+socket.id+" Conectado")
    socket.on('msg', function(){
        socket.broadcast.emit('msg', socket.id)
    })
})


server.listen(port, function(){
    console.log("Servidor rodando na porta :"+port)
})