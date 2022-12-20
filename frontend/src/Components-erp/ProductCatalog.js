import React from 'react'
import { useState } from 'react'
function ProductCatalog() {
  const [PromtScale, setPromtScale] = useState('scale-100')
  const [Promt, setPromt] = useState('asdas')
  const PromtOpt=()=>{
    if(PromtScale==='scale-100')
    {
      setPromtScale('scale-0')
    }else{
      setPromtScale('scale-100')
    }

  }

  const append=()=>{
    console.log('append')
  }
  window.onload =      function(){
     console.log(document.readyState)
  }
  const aaa=()=>{
    let x = prompt('enter the quantity')
    console.log('x',x)
  }

  return (
<>
<div
          className={`bg-transparent absolute w-full h-full z-50 grid justify-items-center ${PromtScale} `}
        >
          <div className="absolute h-fit w-fit top-24 bg-white shadow-xl rounded-lg p-10 border-2 text-center">
            <div
              className="absolute border-2  right-10 p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => { PromtOpt()
               
              }}
            >
              X
            </div>
            <div className="text-center font-bold text-2xl  ">Add Product</div>
            <br></br>
             <div className='grid grid-flow-col grid-cols-7 gap' >
             <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Name</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="Name"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Description</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="Description"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Code</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="HSN CODE"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Example label</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="Example label"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Price</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="Price"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Quantity</label
    >
    <input
      type="text"
      class="
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
      id="exampleFormControlInput1"
      placeholder="Quantity"
    />
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700">Add Image </div>
    <div>
    <button className="    bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {  }} >
                 Image
                  </button>
            
    </div>
            
  </div>
</div>

             </div>
             <div className='w-full grid justify-items-center'>
             <button className="    bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {  }} >
                    Submit
                  </button> 
             </div>
           
          </div>
        </div>

        <div >
        <div className="w-full h-fit mt-2 border-2 bg-fixed ">
          <div className="     flex ">
            <div className=" p-5  ">
              <div className=" text-sm text-gray-500  ">
                Total Credit Balance
              </div>
              <div className="text-xl font-bold">₹70000</div>
            </div>
            <div className="p-5">
              <div className=" absolute right-5 top-10">
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>{aaa()}}>
                  Delete Product
                </button>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>{}}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Description
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                HSN / Code
              </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
               Tax
              </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Price
              </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Stock
                </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                 Sold
              </th><th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Update
              </th>
            </tr>
          </thead >
          <tbody id='tbody'>
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
</>
  )
}

export default ProductCatalog