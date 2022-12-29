import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Transactions() {
  const [totalCredit, settotalCredit] = useState(0)
  const [totalDebit, settotalDebit] = useState(0)

 useEffect(() => {

  console.log('effect')
   let Transactions = localStorage.getItem('Transactions')
   Transactions = JSON.parse(Transactions)
   Transactions.map((index,i)=>{
       i++;
       const parentElement = document.getElementById('tbody')
       const trElement = document.createElement('tr')
       const tdElement = document.createElement('td')
        trElement.setAttribute('id',`tr${i}`)
        parentElement.append(trElement.cloneNode(true))
        const createdTr = document.getElementById(`tr${i}`)
         for(let j=0;j<=7;j++){
          tdElement.setAttribute('id',`${i}td${j}`)
          createdTr.append(tdElement.cloneNode(true))
          const createdTd = document.getElementById(`${i}td${j}`)
          switch(j){
            case 0:
              createdTd.innerText = i
              break;
              case 1:
                if(index.Type==='Received'){
                  createdTd.innerText = index.Sender
                }else{
                  createdTd.innerText  = index.Receiver;
                }
                break;
                case 2 :
                  createdTd.innerText = index.invoiceNo;
                  break;
                 
                    
                    case 3:
                      createdTd.innerText = index.Date;
                      break;
                      case 4:
                        if(index.Type==='Send'){
                          createdTd.setAttribute('style',`color:green`)
                          createdTd.innerText = index.GrandTotal;
                          
                        }
                        break;
                        case 5:
                          if(index.Type==='Received'){
                            createdTd.setAttribute(`style`,`color:red`)
                            createdTd.innerText = index.GrandTotal;
                          }
                          break


          }
         }
   })
  
 }, [])
 

  return (
   <>
   <div>
   <div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                  <div className="flex">
                     <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                                Total Credit
                            </div>
                            <div className="text-xl font-medium text-center w-full">₹{totalDebit}</div>
                          </div>
                            <div className="p-5">
                            <div className="absolute top-10 right-12">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() => { }}
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
                                    Name
                                </th>  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Invoice No.
                                </th>    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
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
   </div>
   </>
  )
}

export default Transactions