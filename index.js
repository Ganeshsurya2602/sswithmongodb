
const express = require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");


const app=express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=>{
	const url="mongodb+srv://ganeshsuryawanshi2022:F4zlTAWtLjs0z2up@cluster0.pumba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client=new MongoClient(url);
	const db=client.db("ss28dec24");
	const coll=db.collection("student");
	const doc={"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg};
	coll.insertOne(doc)
	.then(result=> res.send(result))
	.catch(err=> res.send(err));
});
app.listen(9999,()=>{console.log("ready to serve @ 9999");});

