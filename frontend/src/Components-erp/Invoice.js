import React, { createElement, useEffect, useState } from "react";
import Navbar from "./Navbar";
import jsPDF from "jspdf";
import $ from "jquery";
import ja from "date-fns/locale/ja/index.js";
import { useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";

function Invoice(props) {
  const Navigate = useNavigate()
  let list;
  let countx =0;
  const invoice = [
    {
      srNo: Number,
      Description: String,
      D2: String,
      D3: String,
      Code: String,
      Rate: Number,
      Unit:String,
      qty: Number,
      Amount: Number,
      Date: String,
      Month: String,
    },
  ];
  let Effectcount =0
  useEffect(() => {

   if(Effectcount===0){
     Effectcount++
   } else{
     Getdata()
     addButton()

   }
  
   
  },)
   
 
  //const declaration
  const [IsOpen, setIsOpen] = useState(true);
  const [nameSearch, setnameSearch] = useState("");
  const [billedTo, setbilledTo] = useState("");
  const [shippedTo, setshippedTo] = useState("");
  const [billedSearch, setbilledSearch] = useState("scale-0");
  const [shippedSearch, setShippedSearch] = useState("scale-0");
  const [Receiver, setReceiver] = useState("Receiver");
   const [Self, setSelf] = useState("");
   const [SelfAdress, setSelfAdress] = useState("");
   const [SelfGSTIN, setSelfGSTIN] = useState("");
   const [SelfEmail, setSelfEmail] = useState("");
  let totalAmount=0;
  let searchUser;

  let i = 0;
  //functions here >
    
  const SelectSearchName = (e) => {
    const value = e.target.innerText;
    setReceiver(value);
    setbilledTo(value);
  };
  const SearchName = async (e) => {
    const value = e.target.value;
    const id = e.target.id
    if(id==='shippedTo'){
     setbilledSearch("scale-100");
     setbilledSearch(value)
     setReceiver(value)
    }else{
      setShippedSearch('scale-100')
      setbilledTo(value)
      setReceiver(value)
      setshippedTo(value)
   }
   
    const res = await fetch("/searchuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value, Receiver }),
    });
    list = await res.json();
    console.log(list);
    addList(id);
  };
  const addList = (id) => {
     console.log(id)
    const parentElement = document.getElementById("BilledlList");
    const divElement = document.createElement("div");

    for ( i = 0; i <= list.length; i++) {
      console.log("in");
      console.log(`li${i}`);
      const detail = list[i];
      divElement.setAttribute("id", `div${i}`);
      divElement.setAttribute("style", "margin:2px");
      parentElement.append(divElement.cloneNode(true));

      const createddiv = document.getElementById(`div${i}`);

      divElement.setAttribute("id", `li${i}`);
      divElement.setAttribute("style", `cursor:pointer`);
      createddiv.append(divElement.cloneNode(true));

      const createdLi = document.getElementById(`li${i}`);
      createdLi.addEventListener("click", (e) => SelectSearchName(e));
      createdLi.innerText = detail.name;

      console.log(detail);
      console.log(detail.Username);
    }
  };
  const ExitSearchName = () => {
    setbilledSearch("scale-0");

    };
    const Getdata=()=>{
 
       const nam  = localStorage.getItem('Username')
       const name = JSON.parse(nam)
       const Adress  = localStorage.getItem('Adress')
       const Email  = localStorage.getItem('Email')
       const GSTIN  = localStorage.getItem('GSTIN')
       setSelf(name)
       setSelfAdress(Adress)
       setSelfGSTIN(GSTIN)
       setSelfEmail(Email)
    }

  const addButton = () => {

  i++;
    const pElement = document.getElementById("tableb");
    const trElement = document.createElement("tr");
    const tdElement = document.createElement("td");
    const inputElement = document.createElement("input");
    const srNoElement = document.createElement("p");
   
    const divElement = document.createElement("div");


    pElement.append(trElement);
    trElement.setAttribute("id", `tr${i}`);

    const createdTr = document.getElementById(`tr${i}`);
    createdTr.append(srNoElement);
    srNoElement.setAttribute("id", `srNo${i}`);

    document.getElementById(`srNo${i}`).innerText = `${i}`;

    for (let j = 2; j <= 7; j++) {
      console.log("ddd");
      if (j === 7) {
        
        divElement.setAttribute("id", `amount${i}`);
        divElement.setAttribute("style", ` border:1px solid black`);
        
        divElement.addEventListener("click", () => console.log("click"));
        tdElement.setAttribute('id',`${i}amount`)
        
        createdTr.append(tdElement);
        const createdT = document.getElementById(`${i}amount`)
        createdT.append(divElement.cloneNode(true))


        const amounti = document.getElementById(`amount${i}`);
        amounti.innerText = 0;
      } else if (j === 6) {
        
        divElement.setAttribute('id',`unit${i}`)
        divElement.setAttribute("style", `border:2px solid black`);
        tdElement.setAttribute("id", `tu${i}`);

        createdTr.append(tdElement.cloneNode(true));
        const createdTd = document.getElementById(`tu${i}`);
        createdTd.append(divElement.cloneNode(true));
        const createdDiv = document.getElementById(`unit${i}`)
        createdDiv.innerText = 'nos'
      } else if (j === 2) {
        tdElement.setAttribute("id", `${i}td${j}`);
        createdTr.append(tdElement.cloneNode(true));
        const createdTd = document.getElementById(`${i}td${j}`);
        divElement.setAttribute('id',`d${i}`)
        divElement.setAttribute('style',`grid grid-gap:2px`)
         createdTd.append(divElement.cloneNode(true))
          const createdDiv = document.getElementById(`d${i}`)
          for(let j=0;j<=2;j++){
            divElement.setAttribute('id',`${i}d${j}`)
            switch(j){
              case(0):
              inputElement.setAttribute('id',`${i}des${j}`)
              inputElement.setAttribute('style','border:1px solid black')
              inputElement.setAttribute('placeholder','Description')
              break;
              case(1):
              inputElement.setAttribute('id',`${i}des${j}`)
              inputElement.setAttribute('style','border:1px solid black')
              inputElement.setAttribute('placeholder','D2')
              break;
              case(2):
              inputElement.setAttribute('id',`${i}des${j}`)
              inputElement.setAttribute('style','border:1px solid black ;')
              inputElement.setAttribute('placeholder','D2')
              break;
              default:
                break;
                
                
              }
              createdDiv.append(divElement.cloneNode(true))
              const createddiv = document.getElementById(`${i}d${j}`)
              createddiv.append(inputElement.cloneNode(true))
              inputElement.setAttribute('placeholder','')
          }
      } else {
        tdElement.setAttribute("id", `${i}td${j}`);

        createdTr.append(tdElement.cloneNode(true));
        const createdTd = document.getElementById(`${i}td${j}`);

        inputElement.setAttribute("id", `${i}input${j}`);
        // inputElement.setAttribute("className", `input`);
        inputElement.setAttribute("style", `border:1px solid black  `);

        inputElement.addEventListener("onChange", () => console.log("click"));

        if (j === 2 || j === 3) {
          inputElement.setAttribute(`type`, `text`);
        } else {
          inputElement.setAttribute("type", `Number`);
        }

        createdTd.append(inputElement.cloneNode(true));
        if (j === 2) {
        } else {
          const createdIn = document.getElementById(`${i}input${j}`);
          console.log(createdIn);
          createdIn.setAttribute("class", i);
          createdIn.addEventListener("change", (e) => amountvalue(e));
        }
      }
    }

    console.log(i);
  };
  const amountvalue = (e) => {
  
    console.log(e.target.className);
    const count = e.target.className;
    const getRateValue = document.getElementById(`${count}input${4}`).value;
    const getQtyValue = document.getElementById(`${count}input${5}`).value;
    const getAmount = document.getElementById(`amount${count}`);
    getAmount.innerText = getRateValue * getQtyValue;
    console.log('rate',getRateValue)
    console.log('qty',getQtyValue)
    countx = (getQtyValue*getRateValue) +countx
    console.log('count',countx)
    totalAmount = countx
    console.log('amount',totalAmount)

  };
  

  const SubmitInvoice = async () => {
    let m=++i
     try{

       for (let k = 1; k <= m; k++) {
         let co = 0;
         let cot =1;
         let count = 2;
         let count2 = 3;
         let count3 = 4;
         let count4 = 5;
         let count5 = 6;
         let count6 = 7;
         
         const ddd = new Date();
         
         invoice.push({
        srNo: k,
        Description: document.getElementById(`${k}des${co}`).value,
        D2: document.getElementById(`${k}des${cot}`).value,
        D3: document.getElementById(`${k}des${count}`).value,
        Code: document.getElementById(`${k}input${count2}`).value,
        Rate: document.getElementById(`${k}input${count3}`).value,
        qty: document.getElementById(`${k}input${count4}`).value,
        Amount: document.getElementById(`amount${k}`).innerText,
        
        
        Unit:document.getElementById(`unit${k}`).innerText ,
        Month: ddd.getMonth(),
        Date: ddd.getDate(),
      });
      
      console.log(invoice);
      
      const aaa = JSON.stringify(invoice);
    }
    const cookie = jsCookie.get()
    const {loginCookie}= cookie
    const Cookie = loginCookie
    console.log(invoice)
    const res = await fetch("/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoice, Receiver, totalAmount,Cookie }),
    });
    const response = res.json()
    if(response==='probleum'){
      window.alert('a probleum occured')
    }else if(response==='created'){
      window.prompt("Invoice created ")
      Navigate('/print')
      
    }
  }catch(err){
    console.log('error',err)
  }
  };

  return (
    <>
      <div className=" bg-inherit   h-full   ">
        {/* <div className="bg-inherit  w-full "></div> */}
        <div className="bg-slate-100 border-2 rounded-md overflow-auto shadow-2xl h-full ">
          <header className="text-center ">
            <strong className="font-bold  text-2xl">{`${Self}`}</strong>
          </header>
          <div className="font-bold" >
            Enter Buyer's Details Here
          </div>
          <div className="grid bg-inherit  w-full  p-4   ">
          <div className="grid  grid-cols-2 p-4"  >
           <div className="w-full " >
             <input
             id="billedTo"
              className=" outline-none bg-inherit border-b-2 border-black " placeholder="BilledTo" value={billedTo}
             onChange={(e)=>SearchName(e)} ></input>
             <div className="absolute" id="BilledList"  >
            
             </div>
           </div>
           <div className="w-full grid justify-items-end  " >
           
             <input className=" outline-none bg-inherit border-b-2 border-black " placeholder="ShippedTo"   value={shippedTo}  ></input>
            
           </div>
           
          </div>
            <div>
              <table className="w-full">
                <thead className="bg-purple-500 text-white ">
                  <tr>
                    <th>
                      <span className="p-3  font-semibold">SNO.</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">Description</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">HSN/SAS Code</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">Rate</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">QTY.</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">Unit</span>
                    </th>
                    <th>
                      <span className="p-3 font-semibold">Amount</span>
                    </th>
                  </tr>
                </thead>
                <tbody id="tableb" className=""></tbody>
              </table>
            </div>
            <div className=" space-x-2 mt-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addButton()}
              >
                Add +
              </button>

              <button
                type="button"
                onClick={() => SubmitInvoice()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
