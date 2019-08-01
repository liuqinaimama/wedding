const express=require("express")
const pool=require("../pool.js")
var router=express.Router()
//1.登录
router.post("/login",(req,res)=>{
	var obj=req.body;
	if (obj.phone="")
	{
		res.send("用户名不能为空");
			return;
	}
	if (obj.upwd="")
	{
		res.send("密码不能为空");
			return;
	}
	pool.query("SELECT * FROM love WHERE phone=? AND upwd=?",[obj.phone,obj.upwd],(err,result)=>{
		if (err) throw err;
		if (result.length>0)
		{
			res.send("登陆成功")
		}else{
			res.send("用户名或密码错误")
			}
		}
	)
})
//2.注册
router.post("/reg",(req,res)=>{
	var obj=req.body;
	if (obj.phone="")
	{
		res.send("手机号不得为空");
		return;
	}
	if (obj.upwd="")
	{
		res.send("密码不得为空")
		return;
	}
	pool.query("INSERT INTO love SET ?",[obj],(err,result)=>{
		if (err) throw err;
		if (result.affectedRows>0)
		{
			res.send("注册成功")
		}
	})
})