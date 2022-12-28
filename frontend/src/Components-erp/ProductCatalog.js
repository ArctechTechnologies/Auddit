import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function PlaceOrder() {

    const  favTutorial=()=> {
           let mylist1 = document.getElementById("myList").value;
           console.log('mylist',mylist1);

    }
    const submit=()=>{
        let mylist1 = document.getElementById("myList").value;
        console.log('mylist',mylist1);
       let product = {
        name:document.getElementById('Name').value,
        Description:document.getElementById('Description').value,
        Code:document.getElementById('Code').value,
        Tax:mylist1,
        Price:parseFloat(document.getElementById('Price').value),
        Stock:parseInt(document.getElementById('Stock').value )  ,
       }
        console.log('product',product)

    }

    
    useEffect(() => {
       
            getdata()
            console.log('effect')

    
    }, [])
    const Products = []
    const select = []

    const [TProducts, setTProducts] = useState(0)
    const handleChange = (e) => {
        console.log(e.target.id)
        const id = e.target.id[5]
        console.log(id)
        const price = document.getElementById(`${id}td${4}`).innerText
        const Price = parseInt(price)
        console.log(Price)
        let Amount = e.target.value
        Amount = parseInt(Amount)
        console.log(Amount)
        const total = Price * Amount
        console.log(total)
        const amountElement = document.getElementById(`Amount${id}`)
        amountElement.innerText = total
    }

    const handleCheck = (e) => {
        console.log('check')
        console.log(e.target.id)
        const checkbox = document.getElementById(e.target.id)
        const num = e.target.id[8]
        console.log(num)
        const name = document.getElementById(`${num}td${2}`).innerText
        const Price = document.getElementById(`${num}td${4}`).innerText
        console.log(name)
        console.log(Price)


    }
    let Items = [{

    }]
    const getdata = () => {

        const stock = localStorage.getItem('Inventory')
        const Inventory = JSON.parse(stock)

        Inventory.map((index) => {
            Items.push(index)
        })
        // let count = Items.length - 1
        setTProducts(Items.length)
        let h = '';
        h += `  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">`
        h += `Update`
        h += `  </button>`

        const parentElement = document.getElementById('tbody')
        const trElement = document.createElement('tr')
        const tdElement = document.createElement('td')
        Items.shift()
        console.log('items', Items)
        Items.map((index, i) => {
            i++;
            tdElement.setAttribute('Style', `border-bottom:1px solid black`)
            trElement.setAttribute('id', `tr${i}`)
            parentElement.append(trElement.cloneNode(true))
            const createdtr = document.getElementById(`tr${i}`)
            for (let j = 1; j <= 8; j++) {
                tdElement.setAttribute('id', `${i}td${j}`)
                createdtr.append(tdElement.cloneNode(true))
                const createdTd = document.getElementById(`${i}td${j}`)


                switch (j) {

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
                        createdTd.innerText = ''

                        break;
                    case 5:
                        createdTd.innerText = index.Price
                        break;
                    case 6:
                        createdTd.innerText = index.Quantity
                        break;
                    case 7:
                        createdTd.innerText = '5000'
                        break;
                    case 8:
                        createdTd.innerHTML = h
                        break;
                    default:
                        break;
                }


            }

        })

    }

    const [PromtScale, setPromtScale] = useState('hidden')
    const [Tax, setTax] = useState('')
    const [TaxAmount, setTaxAmount] = useState(0)


    
    // const [Promt, setPromt] = useState('asdas')

    const PromtOpt = (e) => {
        console.log('promt')

        if (PromtScale === 'hidden') {
            setPromtScale('')
        } else {
            setPromtScale('hidden')
        }

    }
    const on=(e)=>{
      const aaa = document.getElementById('form').innerText
      console.log(aaa)
    //    const aa = e.target.innerText;
    //    console.log(aa)
    //    setTax(aa)

    // console.log('on')
    //   console.log(e)

    }

    return (
        <>
            <div className='w-full'>
                <div className={`w-full absolute h-full grid justify-items-center  ${PromtScale} `}>
                    <div className='absolute h-fit w-fit top-24 bg-white shadow-xl rounded-lg p-10 border-2 text-center'>
                        <div
                            className="absolute border-2  right-10 p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={(e) => {
                                PromtOpt(e)

                            }}
                        >
                            X
                        </div>
                        <div className="text-center font-bold text-2xl  ">Add Product</div>
                        <br></br>
                        <div className='grid grid-flow-col grid-cols-7 gap-2'>

                            <div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <label for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >Name</label
                                    >
                                    <input

                                        type="text"
                                        className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                                 font-normal
                                                 text-gray-700
                                                 bg-white bg-clip-padding
                                                 border border-solid border-gray-300
                                                 rounded
                                                 transition
                                                 ease-in-out
                                                 m-0
                                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                                 "
                                        id="Name"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <label for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >Description</label
                                    >
                                    <input
                                        type="text"
                                        className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="Description"
                                        placeholder="Description"
                                    />
                                </div>
                            </div><div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <label for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >HSN CODE</label
                                    >
                                    <input
                                        type="text"
                                        className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="Code"
                                        placeholder="HSN CODE"
                                    />
                                </div>
                            </div><div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <div for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >Tax</div>

                                    <select className='  form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' id="myList" onChange={()=>favTutorial()} >
                                        <option value={18}>9%CGST+9%SGST</option>
                                        <option value={9}> 9% CGST</option>
                                        <option value={27}>27% CGST</option>
                                        <option value={36}>36% CGST</option>
                                    </select>


                                </div>
                            </div><div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <label for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >Price</label
                                    >
                                    <input
                                        type="Number"
                                        className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="Price"
                                        placeholder="price"
                                    />
                                </div>
                            </div><div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <label for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                                    >Stock</label
                                    >
                                    <input
                                        type="Number"
                                        className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="Stock"
                                        placeholder="Stock"
                                    />
                                </div>
                            </div>
                            <div>
                                <div>Image</div>
                                <button className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() => { }} >
                                    Image
                                </button>


                            </div>

                        </div>
                        <button className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() =>{ submit()}} >
                                    Submit
                                </button> 
                        
                    </div>

                </div>
                <div className="w-full bg-stone-100  border-2 bg-fixed mt-2  ">
                    <div className="flex">
                        <div style={{}} className=" p-5 ">
                            <div className=" text-sm 1px solid gray  ">
                                Total Product
                            </div>
                            <div className="text-xl font-medium">{TProducts}</div>
                        </div>
                        <div className="p-5">
                            <div className="absolute top-10 right-12">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() => { PromtOpt() }}
                                >
                                    Add Product
                                </button>
                            </div>
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
                                    Description
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Tax
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Price(per Unit)
                                </th> <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Stock
                                </th> <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Sold
                                </th><th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Update
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
