const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../model/userschema");
const Invoice = require("../model/InvoiceSchema");
const bcrypt = require("bcryptjs/dist/bcrypt");
const authenticate = require("../model/middleware/authenticate");
const { update, updateOne, find } = require("../model/userschema");
const { json, type } = require("express/lib/response");
const res = require("express/lib/response");
const assert = require("assert");
const req = require("express/lib/request");
const { Console } = require("console");
const AuthCookie = require('../model/middleware/AuthCookie')
const CreateCookie = require('../model/middleware/CreateCookie')
const Account = require('../model/accountSchema')

const router = express.Router();
require("../db/conn");
require("../model/userschema");
router.get("/", (req, res) => {
  res.send("ff");
});
router.post("/create", async (req, res) => {
  const i = 1;
  const { invoice, Cookie, SGST, CGST, GrandTotal, BilledTo, ShippedTo,Name } = req.body;
    
   const  cookie = await AuthCookie(Cookie)
      const date = Date.now()
       const Sender =  Name
   
   try{

     const updateSender = await Invoice.findOneAndUpdate(    // updates  Senders Entery
     { Cookie: cookie },
     { $push: { invoices: { BilledTo, GrandTotal,date, invoice } } }
     );
     const updateReceiver = await Invoice.findOneAndUpdate(   //updates Receiver Entery
     { Username: BilledTo },
     { $push: { ReceivedInvoices: { Sender, GrandTotal, date,invoice } } }
     );

     if(!updateSender||!updateReceiver){
       res.json('probleum')
     }else{
       res.json('created')
       console.log('created')
     }
     
     
    }
    catch(err){
      console.log('error',err)
    }
  
});
router.post("/Register", async (req, res) => {
  let received = req.body;

  console.log(received);
  const { user } = received;
  const { name, GSTIN, Adress, Username, Email, Password, Type } = user[0];
  const uuser = user[0];
  console.log(uuser);
  console.log(name, GSTIN, Adress, Username, Email, Password, Type);
  if (!name || !GSTIN || !Adress || !Username || !Email || !Password || !Type) {
    return res.json({ errorCode: "invalid" });
  } else {
    const findUser = await User.findOne({
      name: name,
      GSTIN: GSTIN,
      Username: Username,
    });
    if (findUser) {
      res.json({ errorCode: "User Already Exists" });
    } else {
      try {
        const use = await new User({
          name,
          GSTIN,
          Adress,
          Username,
          Email,
          Password,
          Type,
        });
        const result = await use.save();
        const inVoiceUse = await new Invoice({
          Username,
        });
        const invoiceResult = await inVoiceUse.save();
        console.log(invoiceResult);
        const createAccount = await new Account({Username})
        const createdAccount = await createAccount.save()

        if (!result||!invoiceResult||!createdAccount) {
          console.log("dberror");
          res.json({ errorCode: "dberror" });
        } else {
          console.log(`registered`);
          console.log(result);
          res.json("registered");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});
router.get("/get", async (req, res) => {
    const aa = req.cookies
    console.log(aa)
  const findUser = await Invoice.findOne({ Cookie: aa });
  console.log(findUser);
  const { invoices } = findUser;
  console.log(invoices);
  res.json(invoices);
});
router.post("/getTrans", async (req, res) => {
 const {Cookie} = req.body
 
   const cookie  =  await AuthCookie(Cookie)
  const Find = await Invoice.findOne({ Cookie: cookie });
  const {invoices} = Find
  console.log(invoices)
 res.json(invoices)
  
});
router.post("/Search", async (req, res) => {
  const { value } = req.body;
  const searchUser = value;
  console.log(value);

  //  console.log(searchUser)
  const find = await User.aggregate([{ $match: { Username: searchUser } }]);
  console.log("find", find);
  const fin = find;
  const list = [
    {
      Username: "",
      name: "",
    },
  ];
  let i = 0;
  find.map((index) => {
    const { Username, name } = find[i];
    console.log(Username, name);

    list.push({
      Username,
      name,
    });
    i++;
  });
  list.shift();
  res.json(list);
});
router.post("/login", async (req, res) => {
  const { Username, Password } = req.body;
  const pass = Password;
  const finduser = await User.findOne({ Username: Username });
  
  if (!finduser) {
    return res.json("error");
  } else {
    const { Password } = finduser;
    if (Password === pass) {
     // const Cookie = 'Diya'
      const Cookie =  Math.random()+ 'x' + Math.random();
      console.log('Cookie',Cookie)
      const cookie = await CreateCookie(Cookie)
      console.log('innnnnn')
      const aaa = await AuthCookie(cookie)
      console.log('aaa',aaa)

      try{
       
       const UpdateUser = await User.findOneAndUpdate(
         { Username: Username },
         { Cookie:Cookie }
       );
       UpdateUser.save()
       const UpdateInvoice = await Invoice.findOneAndUpdate(
         { Username: Username },
         { Cookie:Cookie }
         );
         UpdateInvoice.save()
         
        }catch(err){
          console.log(err)
      }
     

        res.json(cookie);
    } else {
      res.json("error");
    }
  }
});
router.get("/getBilledTo", async (req, res) => {
  const receiver = "dixn";
  const find = await User.findOne({ Username: receiver });
  console.log("find", find);
  res.json(find);
});
router.post("/Auth", async (req, res) => {
    console.log('inauth')
  const {loginCookie} = req.body;
  console.log(loginCookie)
  if(loginCookie === ''){
    res.json(false)
  }else{

    const cookie = await AuthCookie(loginCookie);  
    const FindUser = await User.findOne({
    Cookie: cookie,
  });
  if (!FindUser) {
    res.json(false);
  } else {
    res.json(true);
  }
}
});
router.post('/getReq',async(req,res)=>{
  const {loginCookie} = req.body
  const Cookie = loginCookie
  const verify = await AuthCookie(Cookie)
  const FindUser = await User.findOne({Cookie:verify})
  if(!FindUser){
    res.json(false)
  }else{
    res.json(FindUser)
  }


})
router.post('/no',async(req,res)=>{

  const Username = 'diyain'
  const Find =  await Invoice.findOne({Username:Username})
  console.log(Find)
  const {invoices} = Find
  res.json(invoices)

})
router.post('/getData',async(req,res)=>{
   const { Cookie } = req.body;
   const cookie = await AuthCookie(Cookie);
   const FindUser = await User.findOne({
     Cookie: cookie,
   });
   res.json(FindUser)
})
router.post('/getBill',async(req,res)=>{
  const {Cookie} =  req.body
  const cookie = await AuthCookie(Cookie)
  const Find = await Invoice.findOne({Cookie:cookie})
   res.json(Find) 
})
router.post('/getReceiver',async(req,res)=>{
  const {Receiver} = req.body
   const FindUser = await User.findOne({
     Username: Receiver,
   });
   res.json(FindUser)
})
module.exports = router;
