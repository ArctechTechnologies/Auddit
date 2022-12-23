import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function OpenClient() {
    const Navigate = useNavigate()
    const [totalCredit, settotalCredit] = useState(0)
    const [totalDebit, settotalDebit] = useState(0)
    let items=[];
 let cr =0;
  let  dr=0;
    useEffect(() => {

        let Client = localStorage.getItem('OpenClient')
        Client = JSON.parse(Client)
        console.log(Client)
        const {Name,Username} = Client
        let Transactions = localStorage.getItem('Transactions')
        Transactions = JSON.parse(Transactions)
         Transactions.map((index)=>{
          if(index.BilledTo===Username||index.Sender===Username){
            items.push(index)
            if(index.Type==='Send'){
                cr = cr+index.GrandTotal;
            }else{
                dr = dr + index.GrandTotal;
            }

          }
         })
         settotalCredit(cr)
         settotalDebit(dr)
         console.log('items',items)
         const parentElement = document.getElementById('tbody')
         const trElement = document.createElement('tr')
         const tdElement = document.createElement('td')
         items.map((index,i)=>{
            trElement.setAttribute('id',`tr${i}`)
           parentElement.append(trElement.cloneNode(true))
           const createdTr = document.getElementById(`tr${i}`)
            for(let j=0;j<=5;j++){
                 tdElement.setAttribute('id',`${i}td${j}`)
                createdTr.append(tdElement.cloneNode(true))
                const createdTd = document.getElementById(`${i}td${j}`)
                let k=i+1
                switch (j){
                    case 0:
                        createdTd.innerText = k
                        break;
                        case 1:
                            createdTd.innerText = index.invoiceNo
                          
                            break;
                            case 2:
                                createdTd.innerText  = index.Date;
                                break;
                                case 3:
                                    if(index.Type==='Send'){
                                         createdTd.setAttribute('style',`color:Green`)
                                        createdTd.innerText =  '+' + index.GrandTotal;
                                    }
                                    break;
                                    case 4 :
                                        if(index.Type==='Received'){
                                         createdTd.setAttribute('style',`color:Red`)

                                            createdTd.innerText = '-'+ index.GrandTotal;

                                        }
                                        break;
                                        case 5:
                                            createdTd.setAttribute('style',`color:Blue;cursor:pointer`)
                                            createdTd.innerText = 'Print'
                }
                
            }
           
         })


      
    }, [])
    
  return (
   <>
    <div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                  <div className="flex">
                     <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                                Total Credit
                            </div>
                            <div className="text-xl font-medium text-center w-full">₹{totalCredit}</div>
                          </div>
                            <div className="p-5">
                            <div className="absolute top-10 right-12">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() => {Navigate('/Search') }}
                                >
                                    Add Client
                                </button>
                            </div>
                        </div>


                        <div>
                        </div>
                        <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                                TotalDebit
                            </div>
                            <div className="text-xl font-medium text-center w-full">₹{totalDebit}</div>
                          </div>
                      
                        
                          


                        <div>
                        </div>
                        
                    </div>
                    
                    </div>
                    <div className='w-full'>
                    <table className="w-full ">
                        <thead className="border-b bg-gray-800 text-white font-medium  w-full ">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    #
                                </th>
                               
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Invoice No.
                                </th>  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Cr
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Dr
                                </th>  
                                 <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    *
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

export default OpenClient