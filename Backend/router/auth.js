const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../model/userschema");
const Invoice = require("../model/InvoiceSchema");
const bcrypt = require("bcryptjs/dist/bcrypt");
const authenticate = require("../model/middleware/authenticate");
const { update, updateOne, find, findOneAndUpdate } = require("../model/userschema");
const { json, type } = require("express/lib/response");
const res = require("express/lib/response");
const assert = require("assert");
const req = require("express/lib/request");
const { Console } = require("console");
const AuthCookie = require("../model/middleware/AuthCookie");
const CreateCookie = require("../model/middleware/CreateCookie");
const Account = require("../model/accountSchema");

const router = express.Router();


require("../db/conn");
require("../model/userschema");

router.post("/create", async (req, res) => {
   const {
     invoice,
     cookie,
     SGST,
     CGST,
     GrandTotal,
     BilledTo,
     ShippedTo,
     invoiceNo,
     Name,
     status,
     Type,
   } = req.body;
   const cokie  = await AuthCookie(cookie)
   console.log(cokie)
   const ddd = new Date()
   const day = ddd.getDate()
   const Month = ddd.getMonth()
   const year = ddd.getFullYear()
   const date = day+'/'+Month+'/'+year;
   console.log(BilledTo)
   let party = false;
   let client = true;
   
   const  user = await Account.findOne({Cookie:cokie})
     const {Client,TotalCreditor}  = user
            console.log(TotalCreditor)
        let newCredit = 0;
        newCredit = newCredit + TotalCreditor +GrandTotal;
     Client.map((index)=>{
     if(BilledTo===index.Username){
      current = true
      if(index.party===true){
        party = true
      }
     }
    
      
    })
    if(current===true){
        if(party===true){
          const getDebitor = await Account.findOne({Username:BilledTo})
          const {TotalDebitor} = getDebitor
          console.log('totald',TotalDebitor)
          let newDebit =0;
        newDebit =  TotalDebitor + GrandTotal
        //  console.log(Debit)
        try{

          const updateSender  = await Account.findOneAndUpdate({Cookie:cokie},{$push:{Transactions:{invoice,BilledTo,ShippedTo,GrandTotal,status,invoiceNo,Type:'Send'}}})
          const updateReceiver = await Account.findOneAndUpdate({Username:BilledTo},{$push:{Transactions:{invoice,BilledTo,ShippedTo,GrandTotal,status,invoiceNo,Type:'Received'}}})
          const updatecreditor = await Account.findOneAndUpdate({Cookie:cokie},{$set:{TotalCreditor:newDebit}})
          const updateDebitor = await Account.findOneAndUpdate(({Username:BilledTo},{$set:{TotalDebitor:newDebit}}))
          res.json('Created')
        }catch(err){
          res.json('error')
        }
        }
       

    }else{
      res.json('user not added')
    }
    console.log(client)

   
  //  const find = await Account.findOneAndUpdate({Cookie:cokie},{$Set:{'party.$[].$[Userame].Type':'manufact'}},{arrayFilters:{'Username_Name':'sampleB1'} } )

   
 

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
          Username,
          name,
          GSTIN,
          Adress,
          Username,
          Email,
          Password,
          Type,
        });
        const Creditor = {
          TotalCreditor: 0,
          Invoice: [{}],
        };  const Debitor = {
          TotalDebitor: 0,
          Invoice: [{}],
        };
        const result = await use.save();
        const createAccount = await new Account({
          Username,
          TotalCreditor: 0,
          TotalDebitor: 0,
          Cash:0,
          CashInHand:0,
          CashInBank:0,
        });
      
          const createdAccount = await createAccount.save()

        if (!result || !createdAccount) {
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
  const aa = req.cookies;
  console.log(aa);
  const findUser = await Invoice.findOne({ Cookie: aa });
  console.log(findUser);
  const { invoices } = findUser;
  console.log(invoices);
  res.json(invoices);
});
router.post("/getTrans", async (req, res) => {
  const { Cookie } = req.body;

  const cookie = await AuthCookie(Cookie);
  const Find = await Account.findOne({ Cookie: cookie });
  const { Transaction } = Find;
  res.json(Transaction);
});
router.post("/Search", async (req, res) => {
  console.log(req.body)
  const { value } = req.body;
  const searchUser = value;
  console.log(value);

  //  console.log(searchUser)
  let find = await User.aggregate([{ $match: { Username: searchUser } }]);
  console.log(find[0])
  if(find[0]===undefined){
    console.log('asdasd')
   find =  await User.aggregate([{$match:{name:searchUser}}])
    console.log(find)
  }else{
   console.log('else')
    const fin = find;
  }
  console.log("find", find);
  let list=[]
  let i = 0;
  find.map((index)=>{
    list.push(index)
  })
     
  res.json(list);
});
router.post("/login", async (req, res) => {
  const { Username, Password } = req.body;
  console.log(req.body)
  const pass = Password;
  const finduser = await User.findOne({ Username: Username });

  if (!finduser) {
    return res.json("error");
  } else {
    const { Password } = finduser;
    if (Password === pass) {
      // const Cookie = 'Diya'
      const Cookie = Math.random() + "x" + Math.random();
      console.log("Cookie", Cookie);
      const cookie = await CreateCookie(Cookie);
      console.log("innnnnn");
      const aaa = await AuthCookie(cookie);
      console.log("aaa", aaa);

      try {
        const UpdateUser = await User.findOneAndUpdate(
          { Username: Username },
          { Cookie: Cookie }
        );
        UpdateUser.save();
        const UpdateInvoice = await Account.findOneAndUpdate(
          { Username: Username },
          { Cookie: Cookie }
        );
        UpdateInvoice.save();
      } catch (err) {
        console.log(err);
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
  console.log("inauth");
  const { loginCookie } = req.body;
  console.log(loginCookie);
  if (loginCookie === "") {
    res.json(false);
  } else {
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
router.post("/getReq", async (req, res) => {
  const { loginCookie } = req.body;
  const Cookie = loginCookie;
  const verify = await AuthCookie(Cookie);
  const FindUser = await User.findOne({ Cookie: verify });
  if (!FindUser) {
    res.json(false);
  } else {
    res.json(FindUser);
  }
});

router.post("/getData", async (req, res) => {
  const { Cookie } = req.body;
  const cookie = await AuthCookie(Cookie);
  const user = await User.findOne({
    Cookie: cookie,
  });
  const account = await Account.findOne({ Cookie: cookie });
  console.log(user, account);
  const dat = {
    user,
    account,
  };
  res.json(dat);
});
router.post("/getBill", async (req, res) => {
  const { Cookie } = req.body;
  const cookie = await AuthCookie(Cookie);
  const Find = await Account.findOne({ Cookie: cookie });
  res.json(Find);
});
router.post("/getReceiver", async (req, res) => {
  const { Receiver } = req.body;
  const FindUser = await User.findOne({
    Username: Receiver,
  });
  console.log(FindUser);
  res.json(FindUser);
});

router.post('/addDemoClient',async(req,res)=>{
     const {user,Cookie} = req.body
   const { name, GSTIN, Adress, Username, Email, Type } =  user
   console.log(name)
   const cookie = await AuthCookie(Cookie)
   const  AuthClient = await Account.findOne({Cookie:cookie})
      const Client = {
        Username: Username,
        Name: name,
        Debitor: 0,
        Creditor: 0,
        party: false,
      };
      const Party = {
        Username:Username,
        Name: name,
        GSTIN: GSTIN,
        Adress: Adress,
        Email: Email,
        Type: Type,
      };
     const addClient = await Account.findOneAndUpdate({Cookie:cookie},{$push:{Client:Client}})
    //  console.log(addClient)
    // res.json(addClient)
     const addParty = await Account.findOneAndUpdate({Cookie:cookie},{$push:{party:Party}})
     if(!addClient||!addParty){
      res.json('failed')
     }else{
      res.json('Sucessfull')
     }
      
})

router.post('/addClient',async(req,res)=>{
  const {Cookie,Username} = req.body
  // console.log(name);
  const cookie = await AuthCookie(Cookie);

  const findClient  = await User.findOne({Username:Username})
   const {name,Type}  =  findClient
     const Client = {
       Username: Username,
       Name: name,
       Debit: 0,
       Credit: 0,
       party: true,
     };
    
     const addClient = await Account.findOneAndUpdate(
       { Cookie: cookie },
       { $push: { Client: Client } }
     );
     //  console.log(addClient)
     // res.json(addClient)
     const addParty = await Account.findOneAndUpdate(
       { Username: Username },
       { $push: { Client: Client } }
     );
     if (!addClient || !addParty) {
       res.json("failed");
     } else {
       res.json("Sucessfull");
     }
   

})

router.post('/addProduct',async(req,res)=>{
  const {product,Cookie} = req.body
  console.log(req.body)
  const {Name,Description,Quantity,Price} = product
  const userProduct = {
       Name:Name,
       Price:Price,
       Description:Description,
       Image:'logo.png'
  }
  const accountProduct={
    Name:Name,
    Description:Description,
    Price:Price,
    Quantity:Quantity,
    Sold:0
  }
  const cookie = await AuthCookie(Cookie)
  const updateUser =  await User.findOneAndUpdate({Cookie:cookie},{$push:{Products:userProduct}})
  const updateAccount = await Account.findOneAndUpdate({Cookie:cookie},{$push:{Inventory:accountProduct}})
  if(!updateUser||!updateAccount){
    res.json('probleum')
  }else{
    res.json('sucessfull')
  }

})

router.post('/getProduct',async(req,res)=>{
  const {Username} = req.body
  const getProduct = await Account.findOne({Username:Username})
  const {Inventory} = getProduct
  console.log(Inventory)
  res.json(Inventory)
 })



module.exports = router;
