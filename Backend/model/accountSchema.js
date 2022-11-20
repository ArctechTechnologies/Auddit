const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { type } = require("express/lib/response");
const AccountSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  Cookie: {
    type: String,
  },
  Cash:[
      {

      }
  ],
   Debit:{
       
   },
   Credit:{

   },
   Client:{

   },
  ReceiverClient:{

  }

});

const Account = mongoose.model("ACCOUNTS", AccountSchema);
module.exports = Account;
