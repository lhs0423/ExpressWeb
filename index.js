var express = require("express");
// express 중요한 거 2가지 (1. 라우터, 2. 미들웨어)
var app = express();
app.use(express.static('public'))

app.get("/", (req, res) => { // 라우터 어떠한 요청이 왔을 때 무엇을 실행할것이냐.
    res.send("Hello World")
;})

app.get("/hi", (req, res) => { // 라우터 어떠한 요청이 왔을 때 무엇을 실행할것이냐.
    res.send("Hi World")
;})

app.post("/", (req, res) => { // 라우터 어떠한 요청이 왔을 때 무엇을 실행할것이냐.
    res.send("POST World")
;}) 

app.listen(3000);