import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {BiUser} from 'react-icons/bi'
import '../Components-erp/invoiceSchema.css'
function Invoice() {
  let srCount = 0;
    const [Name, setName] = useState('')
  useEffect(() => {
   
    getUserData()

  }, [])
  const getUserData=()=>{
       const nam = localStorage.getItem("Username");
       const nae = JSON.parse(nam);
       setName(nae)
  }
const handleAmount=(e)=>{
     console.log('e',e)
}
  const append=()=>{
    const parentElement = document.getElementById('tbody')
     srCount++;
     const trElement = document.createElement('tr')
     const tdElement = document.createElement('td')
     const amountElement = document.createElement('div')
     const inputElement = document.createElement('input')
     trElement.setAttribute('id',`tr${srCount}`) 
     parentElement.append(trElement.cloneNode(true))
     const createdTr = document.getElementById(`tr${srCount}`)
     for(let i=1;i<=7;i++){
            tdElement.setAttribute('id',`${srCount}td${i}`)
            tdElement.setAttribute('style',`padding-left:2px`)
             createdTr.append(tdElement.cloneNode(true))
             const createdTd = document.getElementById(`${srCount}td${i}`)
            
             if(i===1){
               const srElement  = document.createElement('div')
               srElement.setAttribute('class','srNo')
               srElement.setAttribute('id',`srNo${srCount}`)
                 createdTd.append(srElement.cloneNode(true))
                 const createdSr = document.getElementById(`srNo${srCount}`)
                 createdSr.innerText = srCount
             }else if (i===7){
               amountElement.setAttribute(`id`,`amount${srCount}`)
               createdTd.append(amountElement.cloneNode(true))
             }else if(i===4){
                 inputElement.setAttribute("id", `${srCount}Qty`);
                 inputElement.setAttribute(`class`, ` input1`);
                 inputElement.setAttribute(`Type`, `Number`);
                 inputElement.setAttribute(`Type`, `Number`);
                 inputElement.setAttribute(`key`, `${srCount}`);
                 inputElement.setAttribute(`onchange`, `handleAmount()`);
                 createdTd.append(inputElement.cloneNode(true));
             }else if(i===5){
              const unitElement = document.createElement('div')
               unitElement.setAttribute('id',`unit${srCount}`)
               unitElement.setAttribute('class',`unit`)
                 createdTd.append(unitElement.cloneNode((true)))
                 const createdUnit = document.getElementById(`unit${srCount}`);
                 createdUnit.innerText = 'NOS'
             }
             else if(i===6){
                inputElement.setAttribute("id", `${srCount}price`);
                inputElement.setAttribute(`class`, ` input1`);
                inputElement.setAttribute(`Type`, `Number`);
                inputElement.setAttribute(`Type`, `Number`);
                inputElement.setAttribute(`key`, `${srCount}`);
                inputElement.setAttribute(`change`, `(e)=>handleAmount(e)`);
                 createdTd.append(inputElement.cloneNode(true));
             }
             else{

               inputElement.setAttribute('id',`${srCount}td${i}`)
               inputElement.setAttribute('Type',`Text`)
               inputElement.setAttribute(
                 `class`,
                 ` input1`
               );
               createdTd.append(inputElement.cloneNode(true))
             }
     }
     

  }
  
  return (
    <>
      <div className="w-full h-full overflow-auto ">
        <div className=" p-2  h-fit w-full  text-center ">
          <div className=" text-2xl font-bold">{`${Name}`}</div>
          <div className="text-lg font-semibold">Tax Invoice</div>
        </div>
        <div className="  w-full h-fit  ">
          <div className="m-5 mt-10 w-fit  flex border-b-2 border-black  ">
            <div>{<BiUser/>}</div>
            <input className="ml-2 font-semibold outline:none text-xl " placeholder='Billed To'  ></input>
          </div>
          <div className="m-5 mt-10 w-fit  flex border-b-2 border-black   ">
            <div>{<BiUser/>}</div>
            <input className="ml-2 font-semibold outline-none text-xl " placeholder='Shipped To'  ></input>
          </div>
        </div>

<div className='w-full  h-fit' >
  <div >
    <table className='w-full'>
      <thead className='bg-gradient-to-r from-ameth1 to-ameth2'>
        <th className=''>SrNo</th>
        <th className=''>Description</th>
        <th className=''>HNS/SAC Code</th>
        <th className=''>Qty.</th>
        <th className=''>Unit</th>
        <th className=''>Price</th>
        <th className=''>AMOUNT</th>
      </thead>
      <tbody id='tbody' >

      </tbody>
    </table>
    <div className='font-serif bg-gray-300/50 text-lg flex mt-2 ' >
    Total
    <div className='absolute right-5' >sdfa</div>
    </div>
    <div className=' bg-purple-400/50  text-center    rounded-lg w-full  h-10' onClick={()=>{append()}}  >
      <div className='text-lg '>
        Add (+)
      </div>
    </div>
  </div>
</div>


      </div>
    </>
  );
}

export default Invoice