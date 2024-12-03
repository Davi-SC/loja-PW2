import express from 'express'
const app = express()

import path, { dirname } from 'path'  
import { fileURLToPath } from 'url'
//Importa esses dois ultimos pacotes para poder enviar corretamente os caminhos dos arquivos html's não importando qual computador vai rodar
const __filename = fileURLToPath(import.meta.url) // Essa constante sera muito utilizada para criar o local fixo para colocar os arquivos(html,css e js do frontend)(vai ter o nome dos arquivos)
const __dirname = path.dirname(__filename) //Vai conter o nome da pasta que os arquivos estao alocados(arquivos de frontend)
//C:20232ADS.CNT0010:downloads/loja-PW2/comteudo/nomedoarquivo
//| =  __dirname                       |   o dirname recebe o caminho ate a pasta principal

app.use(express.static(path.join(__dirname,'public'))) //Comando para dizer ao node que a pasta public contem conteudo estatico

app.get('/',function(req,res){
    res.sendFile(__dirname+'/conteudo/index.html')
})

app.get('/produtos',function(req,res){
    res.sendFile(__dirname+'/conteudo/produtos.html')
})

app.get('/sobre',function(req,res){
    res.sendFile(__dirname+'/conteudo/sobre.html')
})


app.listen(3080,()=>{
    console.log("Servidor rodando em http://localhost:3080")
})