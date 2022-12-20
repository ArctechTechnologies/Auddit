import React from 'react'
import { useEffect } from 'react';

function PlaceOrder() {

    let effectCount = 0;
    useEffect(() => {
        
        if (effectCount === 1) {
            console.log('effect')
            getdata()
        }else{
            effectCount++;
            
        }

    },)
    const Products = []
    const select =[]

   const handleChange=(e)=>{
    console.log(e.target.id)
     const id = e.target.id[5]
     console.log(id)
     const price = document.getElementById(`${id}td${4}`).innerText
     const  Price = parseInt(price)
     console.log(Price)
     let Amount = e.target.value
      Amount = parseInt(Amount)
      console.log(Amount)
      const total = Price * Amount
      console.log(total)
      const amountElement = document.getElementById(`Amount${id}`)
      amountElement.innerText = total
   }

   const handleCheck=(e)=>{
    console.log('check')
    console.log(e.target.id)
    const checkbox = document.getElementById(e.target.id)
     const num = e.target.id[8]
     console.log(num)
     const name  = document.getElementById(`${num}td${2}`).innerText
     const Price  = document.getElementById(`${num}td${4}`).innerText
     console.log(name)
     console.log(Price)
    
   
   }
     
    const getdata = async () => {
        console.log('getdata')
        const getUsername = localStorage.getItem('find')
        const Username = JSON.parse(getUsername)
        const res = await fetch("/getProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Username }),
        }).then((res) => res.json());
        console.log(res)
        res.map((index) => {
            Products.push(index)
        })
        let h;
        h += `  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">`
        h += `Update`
        h += `  </button>`

        const parentElement = document.getElementById('tbody')
        const trElement = document.createElement('tr')
        const tdElement = document.createElement('td')
        const buttonElemet = document.createElement('input')
        const divElement = document.createElement('div')
        const inputElemet = document.createElement('input')
        Products.map((index, i) => {
            i++
            trElement.setAttribute('id', `tr${i}`)
            parentElement.append(trElement.cloneNode(true))
            const createdtr = document.getElementById(`tr${i}`)
            for (let j = 0; j <= 7; j++) {
                tdElement.setAttribute('id', `${i}td${j}`)
                createdtr.append(tdElement.cloneNode(true))
                const createdTd = document.getElementById(`${i}td${j}`)
                if(j===0){

                }else{
                    document.getElementById(`tr${i}`).disable = true
                }
        
                switch (j) {
                    case 0:
                        inputElemet.setAttribute('id',`checkbox${i}`)
                        inputElemet.setAttribute('type','radio')
                       
                         createdTd.append(inputElemet.cloneNode(true))
                         const createdCheck = document.getElementById(`checkbox${i}`)
                            createdCheck.addEventListener('click',(e)=>{handleCheck(e)})

                    //     let m='';

                    //  m+=  `<div class="flex justify-center"  >   `
                    //  m+=  `<div class="form-check">`
                    //  m+=   ` <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate">`
                    //  m+=    `<label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">`
                    //  m+=    `</label>`
                    //  m+=     ` </div>`
                    //  m+=    `</div>`
                    //  createdTd.innerHTML = m
                    //   const checkBoxTd = document.getElementById(`${i}td${j}`)
                    //    checkBoxTd.addEventListener('click',(id)=>{handleCheck(id)})
                            break
                         
                    case 1:
                        createdTd.innerText = i
                        break;
                 case 2:
                        createdTd.innerText = index.Name
                        break;
                    case 3:
                        createdTd.innerText = index.Description
                        break;
                    case 4:
                        createdTd.innerText = index.Price
                        break;
                    case 5:
                        createdTd.innerText = index.Quantity
                        break;
                    case 6:
                        console.log('ada')
                         divElement.setAttribute('id', `Div${i}`)
                         createdTd.append(divElement.cloneNode(true))
                         const createddiv = document.getElementById(`Div${i}`)
                          inputElemet.setAttribute('style',`outline:none;border-bottom:1px solid black;text-align:center`)
                          inputElemet.setAttribute('id',`input${i}`)
                          inputElemet.setAttribute('type',`Number`)
                         createddiv.append(inputElemet.cloneNode(true))
                         const createdInput = document.getElementById(`input${i}`)
                         createdInput.addEventListener('change',(e)=>handleChange(e))
                        break;
                    case 7:
                        divElement.setAttribute('id', `Amount${i}`)
                        createdTd.append(divElement.cloneNode(true))
                        
                      break;
                }


            }

        })

    }



    return (
        <>
            <div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                    <div className="flex">
                        <div style={{}} className=" p-5 ">
                            <div className=" text-sm 1px solid gray  ">
                                Total Product
                            </div>
                            <div className="text-xl font-medium">{88}</div>
                        </div>
                        <div className="p-5">
                            <div className="absolute top-10 right-12">
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                >
                                    Create Purchase Order
                                </button>
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>


                </div>
                <div>
                    <table className="w-full ">
                        <thead className="border-b bg-gray-800 text-white font-medium  w-full ">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    #
                                </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    SrNo
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Description
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Price(per Unit)
                                </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Inventory
                                </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Quantity
                                </th><th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                    Amount
                                </th>
                            </tr>
                        </thead >

                        <tbody id="tbody" className="w-full   text-center"></tbody>
                    </table >
                </div>
            </div>
        </>
    )
}

export default PlaceOrder