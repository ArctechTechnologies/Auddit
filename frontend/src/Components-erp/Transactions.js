import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Transactions() {
  const [totalCredit, settotalCredit] = useState(0)
  const [totalDebit, settotalDebit] = useState(0)
    let cr =0;
    let dr=0;
 useEffect(() => {

  console.log('effect')
   let Transactions = localStorage.getItem('Transactions')
   Transactions = JSON.parse(Transactions)
   Transactions.map((index,i)=>{
       if(index.Type==='Send'){
            cr=cr+index.GrandTotal;
       }else{
        dr=dr+index.GrandTotal;
       }
       i++;
       const parentElement = document.getElementById('tbody')
       const trElement = document.createElement('tr')
       const tdElement = document.createElement('td')
        trElement.setAttribute('id',`tr${i}`)
        parentElement.append(trElement.cloneNode(true))
        const createdTr = document.getElementById(`tr${i}`)
         for(let j=0;j<=6;j++){
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
                          break;
                          case 6:
                            createdTd.setAttribute('style',`color:Blue;cursor:pointer`)
                                            createdTd.innerText = 'Print'
                              break;

          }
         }
   })
   
   settotalCredit(cr)
   settotalDebit(dr)
  
 }, [])
 

  return (
   <>
   <div>
   <div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                  {/* <div className='w-full text-center'>aasd</div> */}
                  <div className="flex">
                     <div style={{}} className=" p-5 ">
                        <div className=" text-sm text-gray-500 ">
                                Total Credit
                            </div>
                            <div className="text-xl font-medium text-center w-full text-green-700">₹{totalCredit}</div>
                          </div>
                            <div className="p-5">
                           
                        </div>


                        <div>
                        </div>
                        <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1text-gray-500  ">
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