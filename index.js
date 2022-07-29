const express=require('express')
const app=express()
const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
// app.use(express.static('public'))
// app.listen(2222,()=>{console.log("app start");})
let port=process.env.PORT
if(port==null||port==""){
    port=3000
}
app.listen(port,()=>{console.log("app start")})
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/ball', (req, res) => {
    res.render('ball')
})
app.get('/clock', (req, res) => {
    res.render('clock')
})
app.get('/matrix', (req, res) => {
    res.render('matrix')
})
app.get('/wave', (req, res) => {
    res.render('wave')
})
app.get('/calculator', (req, res) => {
    res.render('calculator')
})
app.get('/typing', (req, res) => {
    res.render('typing')
})
app.get('/tetris', (req, res) => {
    res.render('tetris')
})
app.get('/puzzleGame', (req, res) => {
    res.render('puzzleGame')
})
app.get('/puzzleGame4by4', (req, res) => {
    res.render('puzzleGame4by4')
})
app.get('/puzzleGame3by3', (req, res) => {
    res.render('puzzleGame3by3')
})
app.get('/todoList', (req, res) => {
    res.render('todoList')
})
app.get('/todoList2', (req, res) => {
    res.render('todoList2')
})
