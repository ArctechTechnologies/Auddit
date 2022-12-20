import React from 'react'

function ProductCatalog() {

    var x = 15;
    // function edit(){
    //      if(document.getElementById('input').innerText===''){
    //        alert('edit quantity cannot be null')
    //     }
    //     else{
    //         var a=document.getElementById('input').value;
    //         x=a;

    //         console.log(x);
            
    //     }
    // }
    return (
        <div>
            <div
                className={`bg-transparent absolute w-full h-full z-50 grid justify-items-center`}
            >
                <div className="absolute h-fit w-fit top-24 bg-white shadow-xl rounded-lg p-10 border-2 text-center">
                    <div
                        className="absolute border-2  right-10 p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {

                        }}
                    >
                        X
                    </div>
                    <div className="text-center font-bold text-2xl  ">MESSAGE</div>
                    <br></br>
                <div>

                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                        In Stock
                        </div>
                      
                        <div className='cursor-pointer	'>
                            {x}
                        </div>
                        <div>
                     Add Quantity
                        </div>
                
                        <div className='cursor-pointer	'>
                           <input id='input' className='border' type="number" name=""  ></input>
                        </div>
                    </div>
                        <div class="flex space-x-2 justify-center mt-4">
                            <button onClick={()=>{
                                  var a=document.getElementById('input').value;
                                  x=a;
                                  
                                  console.log(x);
                            }} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Quantity</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCatalog