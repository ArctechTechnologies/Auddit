const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { type } = require("express/lib/response");
const AccountSchema = new mongoose.Schema({
  Username: {type: String,},
  Cookie: { type: String,},
  name:{type:String},
  Cash: [],
  CashInHand: [{}],
  Debitor: [{}],
  Creditor: {
    TotalCreditor:{type:Number},
    invoices:[]
  },
  Invoice: {
    invocieNo: {type: Number,},
    Creditor: {type: Number,},
    Debitor: {type: Number,},
  },
  Transactions: [{}],
  Cookie: {type: String,},
  party:[{}],
  Client: [{
      Name:{type:String},
      Credit:{type:Number,},
      Debit:{type:Number,}
  }],
  others: {},
});

const Account = mongoose.model("ACCOUNTS", AccountSchema);
module.exports = Account;
