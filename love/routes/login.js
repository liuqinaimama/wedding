const express=require("express")
const router=express.Router();
const pool=require("../pool")
router.get('/login',(req,res)=>{
  var phone=req.query.phone;
  var pwd=req.query.pwd;
  var sql='SELECT id FROM user';
  sql+=' WHERE phone= ? AND pwd=md5(?)';
  pool.query(sql,[phone,pwd],(err,result)=>{
    if (err) throw err;
    if (result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
      res.send({code:1,msg:"登陆成功"})
    }
  })
})
module.exports=router;