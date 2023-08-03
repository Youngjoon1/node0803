const express = require("express");

const app = express();
console.log("dirname : ", __dirname); // 현재위치정보=> dirname :  C:\node-workspace\bcrypt_fetch

app.set("views","./views"); //같음
app.set("views",__dirname + "/views"); //같음
app.set("view engine","ejs");

let cnt = 0;
app.get("/non_fetch",(req,res)=>{
    cnt++;
    console.log(cnt + " : non_fetch 서버 연동")
    res.render("non_fetch",{cnt});
});

app.get("/fetch01",(req,res)=>{
    cnt++;
    console.log(cnt + " : fetch01 서버 연동")
    res.render("fetch01");
});

app.get("/get_count",(req,res)=>{
    cnt++;
    console.log(cnt + " : get_count 서버 연동")
    res.json({cnt : cnt}); //데이터를 보내줌
});

app.get("/fetch_count",(req,res)=>{
    res.render("fetch_count");
});

app.get("/rest",(req,res)=>{
    res.render("rest");
});

app.get("/test",(req,res)=>{
    res.json("get 데이터를 요청할 때!!");
});//1

app.post("/test",(req,res)=>{
    res.json("get 데이터를 추가할 때!!");
});//2

app.put("/test",(req,res)=>{
    res.json("get 데이터를 수정할 때!!");
});//3

app.delete("/test",(req,res)=>{
    res.json("get 데이터를 삭제할 때!!");
});//4


app.listen(3000,()=>{console.log("3000연결성공")});