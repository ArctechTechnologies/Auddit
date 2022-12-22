import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Clients() {
    const Navigate = useNavigate()
    const [totalCredit, settotalCredit] = useState(0)
    const [totalDebit, settotalDebit] = useState(0)

  
    let data =[]
    let cr =0
    let dr =0
    useEffect(() => {

        console.log('effect')
        let aa = localStorage.getItem('Accounts')
            aa = JSON.parse(aa)
            console.log(aa)
            const {Client} =  aa
            console.log(Client) 
            Client.map((index)=>{
                data.push(index)
               

                    cr = cr+index.Credit;
                    dr=dr +index.Debit;
                
           
                 
                })
                 
                settotalCredit(cr)
                settotalDebit(dr)
          console.log('data',data)
    
         const parentElement = document.getElementById('tbody')
         const trElement = document.createElement('tr')
         const tdElement = document.createElement('td')
          data.map((index,i)=>{
            trElement.setAttribute('id',`tr${i}`)
            parentElement.append(trElement.cloneNode(true))
            const createdTr = document.getElementById(`tr${i}`)
            for(let j=0;j<=4;j++){
                tdElement.setAttribute('id',`${i}td${j}`)
                createdTr.append(tdElement.cloneNode(true))
                const createdTd = document.getElementById(`${i}td${j}`)
                let k
                k = i+1
                switch (j){
                  case 0:
                    createdTd.innerText = k
                    break;
                    case 1:
                        createdTd.setAttribute('style','cursor:pointer;text:blue')
                        createdTd.addEventListener('click',(e)=>{navi(e)})
                        createdTd.innerText = index.Name
                        break;
                        case 2 :
                            if(index.party===true){
                                createdTd.innerText = 'Online'
                            }else{
                               createdTd.innerText = 'Offilne' 
                            }
                            break;
                            case 3:
                                createdTd.innerText = index.Credit
                                break;
                                case 4:
                                    createdTd.innerText = index.Debit
                                    break;


                }
                
                          }
          })


      
    }, [])
    const navi =(e)=>{
       let navigate    = e.target.innerText
            data.map((index)=>{
                if(index.Name===navigate){
                    navigate = {
                        Name:index.Name,
                        Username:index.Username
                    }
                }
            })
       localStorage.setItem("OpenClient", JSON.stringify(navigate));
       Navigate('/OpenClient')


    }
    
    return (
        <>
            <div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                  <div className="flex">
                     <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                                Total Credit
                            </div>
                            <div className="text-xl font-medium text-center w-full">{totalCredit}</div>
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
                            <div className="text-xl font-medium text-center w-full">{totalDebit}</div>
                          </div>
                          <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                                Total Online Client
                            </div>
                            <div className="text-xl font-medium text-center w-full">XXXX</div>
                          </div>
                          <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                            Total Offline Client
                            </div>
                            <div className="text-xl font-medium text-center w-full">XXXX</div>
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
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Type
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Cr
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Dr
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

export default Clients