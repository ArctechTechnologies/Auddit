import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import "../Components-erp/invoiceSchema.css";
function Invoice() {
  let srCount = 0;
  let effectCount = 0;
  const [Name, setName] = useState("");
  const [totalAmount, settotalAmount] = useState(0)
  const [CGST, setCGST] = useState(0)
  const [SGST, setSGST] = useState(0)
  const [GrandTotal, setGrandTotal] = useState(0)
  const [RoundOff, setRoundOff] = useState(0)
  const [count, setcount] = useState(0)
  const [BilledTo, setBilledTo] = useState('')
  const [ShippedTo, setShippedTo] = useState('')
  const [scaleBilledSearch, setscaleBilledSearch] = useState("scale-0")
  const [scaleShippedSearch, setscaleShippedSearch] = useState('scale-0')
  useEffect(() => {
   if(effectCount===0){
effectCount++
   }else{
     getUserData();
      append()
   }
  }, []);
  const getUserData = () => {      //function to get USer data 
    const nam = localStorage.getItem("Username");
    const nae = JSON.parse(nam);
    setName(nae);
  };
  const Amount = (e) => {       //function to sum amount value for each field *call handleTotal function
    const count = e.target.id[0];
    const getPrice = document.getElementById(`${count}price`).value;
    const getQty = document.getElementById(`${count}Qty`).value;
    const amount = getPrice * getQty;
    const getAmountDiv = document.getElementById(`amount${count}`);
    getAmountDiv.innerText = amount;
     handleTotal()
  };
  const handleTotal=()=>{       //function to set total amount value,gst and grand total value
    let amt = 0
    for(let i=1;i<=srCount;i++){
        const getAmountDiv = document.getElementById(`amount${i}`).innerText;
        console.log(getAmountDiv)
        const parseAmount = parseFloat(getAmountDiv)
        console.log(parseAmount)
        amt = amt+parseAmount
      }
      console.log(amt)
      settotalAmount(amt)
      let cGst = amt*9/100;
      let sGst = amt*9/100;
      setSGST(sGst)
      setCGST(cGst)
     let aa = amt + cGst+sGst
     console.log('aa',aa)
     const aaa = parseInt(aa)
     const off = aa - aaa
     setRoundOff(off)
     setGrandTotal(aaa)
      
  }
  const append = () => {       // function to create new data input field on button click 
    const parentElement = document.getElementById("tbody");
    srCount = count + 1;
      setcount(srCount)
    console.log("sr", srCount);
    const trElement = document.createElement("tr");
    const tdElement = document.createElement("td");
    const amountElement = document.createElement("div");
    const inputElement = document.createElement("input");
    trElement.setAttribute("id", `tr${srCount}`);
    parentElement.append(trElement.cloneNode(true));
    const createdTr = document.getElementById(`tr${srCount}`);
    for (let i = 1; i <= 7; i++) {
      tdElement.setAttribute("id", `${srCount}td${i}`);
      tdElement.setAttribute("style", `padding-left:2px`);
      createdTr.append(tdElement.cloneNode(true));
      const createdTd = document.getElementById(`${srCount}td${i}`);

      if (i === 1) {
        const srElement = document.createElement("div");
        srElement.setAttribute("class", "srNo");
        srElement.setAttribute("id", `srNo${srCount}`);
        createdTd.append(srElement.cloneNode(true));
        const createdSr = document.getElementById(`srNo${srCount}`);
        createdSr.innerText = srCount;
      } else if (i === 7) {
        amountElement.setAttribute(`id`, `amount${srCount}`);
        amountElement.setAttribute(`class`, `amount`);
        createdTd.append(amountElement.cloneNode(true));
      } else if (i === 4) {
        inputElement.setAttribute("id", `${srCount}Qty`);
        inputElement.setAttribute(`class`, ` input1`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`key`, `${srCount}`);
        inputElement.addEventListener(`change`, (e) => Amount(e));
        createdTd.append(inputElement.cloneNode(true));
        const createdInput = document.getElementById(`${srCount}Qty`);
        createdInput.addEventListener(`change`, (e) => Amount(e));
      } else if (i === 5) {
        const unitElement = document.createElement("div");
        unitElement.setAttribute("id", `unit${srCount}`);
        unitElement.setAttribute("class", `unit`);
        createdTd.append(unitElement.cloneNode(true));
        const createdUnit = document.getElementById(`unit${srCount}`);
        createdUnit.innerText = "NOS";
      } else if (i === 6) {
        inputElement.setAttribute("id", `${srCount}price`);
        inputElement.setAttribute(`class`, ` input1`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`key`, `${srCount}`);
        inputElement.addEventListener(`onchange`, () => console.log("click"));
        createdTd.append(inputElement.cloneNode(true));
        const createdInput = document.getElementById(`${srCount}price`);
        createdInput.addEventListener(`change`, (e) => Amount(e));
      } else {
        inputElement.setAttribute("id", `${srCount}td${i}`);
        inputElement.setAttribute("Type", `Text`);
        inputElement.setAttribute(`class`, ` input1`);
        createdTd.append(inputElement.cloneNode(true));
      }
    }
  };

  const handlechange=(e)=>{      //function to handle change Event for receiver details
      const id = e.target.id
      const value = e.target.value
      if(id==='Billed To'){
         setBilledTo(value)
      }else{
        setShippedTo(value)
      }
    
  }
const appendSearch=()=>{

}
  const submit = () => {};

  return (
    <>
      <div className="w-full h-full overflow-auto ">
        <div className=" p-2  h-fit w-full  text-center ">
          <div className=" text-2xl font-bold">{`${Name}`}</div>
          <div className="text-lg font-semibold">Tax Invoice</div>
        </div>
        <div className="  w-full h-fit  ">
          <div className="m-5 mt-10 w-fit  flex border-b-2 border-black  ">
            <div>{<BiUser />}</div>
            <input
              id="Billed To"
              className="ml-2 font-semibold outline-none text-xl "
              placeholder="Billed To"
              value={BilledTo}
              onChange={(e) => {
                handlechange(e);
              }}
            ></input>
          </div>
          <div className="m-5 mt-10 w-fit  flex border-b-2 border-black   ">
            <div>{<BiUser />}</div>
            <input
              className="ml-2 font-semibold outline-none text-xl "
              placeholder="Shipped To"
              value={ShippedTo}
              onChange={(e) => {
                handlechange(e);
              }}
            ></input>
          </div>
        </div>

        <div className="w-full  h-fit">
          <div>
            <table className="w-full">
              <thead className="bg-gradient-to-r from-ameth1 to-ameth2">
                <tr>
                  <th className="">SrNo</th>
                  <th className="">Description</th>
                  <th className="">HNS/SAC Code</th>
                  <th className="">Qty.</th>
                  <th className="">Unit</th>
                  <th className="">Price</th>
                  <th className="">AMOUNT</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {() => {
                  append();
                }}
              </tbody>
            </table>
            <div
              id="button"
              className=" bg-purple-400/25 border-2 border-purple-500   text-center    rounded-lg w-full  h-10"
              onClick={() => {
                append();
              }}
            >
              <div className="text-lg cursor-pointer ">Add (+)</div>
            </div>
            {/* <div className="font-serif bg-gray-300/50 h-8 text-lg flex mt-2  ">
              <div className="absolute right-28">TOTAL</div>
                <div className="absolute right-5">{totalAmount}</div>
                   </div>
                            <div className="font-serif bg-gray-300/50 h-8 text-lg flex   ">
              <div className="absolute right-28">SGST  9%</div>
              <div className="absolute right-5">{SGST}</div>
                   </div>
                <div className="font-serif bg-gray-300/50 h-8 text-lg flex   ">
              <div className="absolute right-28">CGST  9%</div>
              <div className="absolute right-5">{CGST}</div>
                  </div> */}

            {/* <div className="font-serif bg-gray-300/50 h-8 text-lg flex   ">
              <div className="absolute right-28"> Grand TOTAL</div>
              <div className="absolute right-5">{GrandTotal}</div>
            </div> */}
            <div className="h-fit w-full font-serif  text-lg">
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>Total</div>
                <div className="mr-5">{totalAmount}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>SGST</div>
                <div className="mr-5">{SGST}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>CGST</div>
                <div className="mr-5">{CGST}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>RoundOff</div>
                <div className="mr-5">{RoundOff}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div> Grand Total</div>
                <div className="mr-5">{GrandTotal}</div>
              </div>
            </div>
          </div>
          <div className="ml-5 mt-5">
            <button className="bg-purple-500/50 border-2 border-purple-500 pt-2 pb-2 pl-5 pr-5 ">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
