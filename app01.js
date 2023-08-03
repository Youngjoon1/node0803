const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/",(req,res)=>{
    const pwd ="test";
    const changePwd = bcrypt.hashSync(pwd,10); // (pwd, 보안수준)
    
    console.log("평문 비밀번호 : ", pwd);
    console.log("변경 비밀번호 : ", changePwd);
    
    console.log("비밀번호 비교 : ", pwd == changePwd);//false
    const result = bcrypt.compareSync(pwd,changePwd);//비밀번호 비교 문구,순서도 중요(평문,암호화된값)
    console.log("비밀번호 비교 result : ",result); //true
    
    

    res.send("비밀번호");
});

app.listen(3000,()=>{console.log("3000연결성공")});