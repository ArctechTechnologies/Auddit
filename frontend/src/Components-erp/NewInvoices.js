import React from 'react'

const NewInvoices = () => {
    const y= document.getElementById('div1');
    let x=document.createElement('div');
    x.textContent='efvefvf';
    y.appendChild(x);
  return (
    <>
    <div id='div1'>
        <h1 className='text-blue-700 text-xl mt-2 ml-4'>INVOICE</h1>
        <p className='text-gray-700 ml-4'>Invoice No :</p>
        <p className='text-gray-700 ml-4'>Invoice Date :</p>
        <p className='text-gray-700 ml-4'>Due date :</p>
    </div>
    </>
  )
}
export default NewInvoices