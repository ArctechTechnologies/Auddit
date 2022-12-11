import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import { useState } from "react";
const productdata = [
    // {
    //     image: "logo.png",
    //     Productname: '',
    //     Price: '',
    //     discription: ''
    // },
];

const customStyles = {
    content: {
        top: '10%',
        left: '90%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ProductCatalog() {
    let count = 0;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    function sumbitModal(e) {
        e.preventDefault();
        productdata.push({
            Productname: productname,
            Price: price,
            discription: discription,
        })
        const tempproductdata = [{
            Productname1: productname,
            Price1: price,
            discription: ''
        }];

        setIsOpen(false);

        localStorage["productdata"] = JSON.stringify(productdata);

    }




    const [productname, setproductname] = useState("");
    const [price, setprice] = useState("");
    const [discription, setdiscription] = useState("");
    return (
        <>

            <div className="w-full bg-stone-100  border-2 bg-fixed  mt-2">
                <div className="flex">
                    <div style={{}} className=" p-5 ">
                        <div className=" text-sm   ">
                            Total Product 
                        </div>
                        <div className="text-xl ">{count}</div>
                    </div>
                    <div className="p-5">
                        <div className="absolute top-10 right-12">
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                onClick={openModal} >
                                Add Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            < div >
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className=""></div>
                    <div style={{
                        position: 'absolute', top: "-40rem", border: '1px solid gray', borderRadius: '12px', left: '35rem', height: "12.5cm", padding: '5px', width: "13cm", color: "white", 
                    }} className="absowhite-900 -top-96  bg-slate-200">
                        <h2 className=" pb-8 pl-40 text-xl text-black">Add New product</h2>
                        <form className="w-full max-w-lg ">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full  px-3 mb-6 md:mb-0">
                                    <label className=" pl-52 block uppercase tracking-wide  text-xs  mb-2 text-white" >
                                        Product Name
                                    </label>
                                    <input style={{ border: '2px solid gray' }} className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="Product Name" value={productname} onChange={(e) => setproductname(e.target.value)} />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="pl-24 block uppercase tracking-wide text-gray-700 text-xs  mb-2"  >
                                        Quantity
                                    </label>
                                    <input style={{ border: '2px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="qunatity" type="number" placeholder="quantity" />
                                </div>  <div className="w-full md:w-1/2 px-3">
                                    <label className="pl-28 block uppercase tracking-wide text-gray-700 text-xs  mb-2"  >
                                        Price
                                    </label>
                                    <input style={{ border: '2px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" value={price} placeholder="Price" onChange={(e) => setprice(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="pl-52 block uppercase tracking-wide text-gray-700 text-xs  mb-2" >
                                        Discription
                                    </label>
                                    <input style={{ border: '2px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="discription" type="text" placeholder="Discription" value={discription} onChange={(e) => setdiscription(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex -mt-2 ">
                                <button style={{  }} className="mb-4 mt-2 ml-20 pl-6 pr-6 bg-transparent hover:bg-blue-500 text-black hover:text-white  hover:border-transparent py-2 px-4 border  rounded-sm" onClick={sumbitModal}>Add Image</button>
                                <button style={{  }} className="ml-12 mb-4 mt-2  pl-6 pr-6 bg-transperant hover:bg-blue-500 hover:text-white  text-black  hover:border-transparent py-2 px-4 border rounded-sm" onClick={sumbitModal}>Sumbit</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div >

            <div className="w-full   h-fit  mt-4" >
                <table className="w-full ">
                    <thead className="border-b bg-gray-800 text-white font-extralight ">
                        <tr className="">
                            <th
                                scope="col"
                                className="text-xs font-extralight text-left  uppercase h-2 p-5"
                            >
                                S.no
                            </th>
                            <th
                                scope="col"
                                className="text-left text-xs font-extralight  uppercase h-2 "
                            >
                                Product name
                            </th>
                            <th
                                scope="col"
                                className="text-xs  pl-36 text-left font-extralight uppercase h-2"
                            >
                                Discription
                            </th>
                            <th
                                scope="col"
                                className="text-xs  pr-26 text-left font-extralight uppercase h-2"
                            >
                                Price(one Quantity)
                            </th>
                            <th
                                scope="col"
                                className="text-xs  pr-8 text-right font-extralight uppercase pl-8 h-2"
                            >
                                Inventory
                            </th>
                            <th
                                scope="col"
                                className="text-xs  pl-32 text-left font-extralight uppercase pl-8 h-2"
                            >
                                Total Sold
                            </th>
                            <th
                                scope="col"
                                className="text-xs  pr-6 font-extralight uppercase h-2"
                            >
                                Update
                            </th>
                        </tr>
                    </thead >

                    {
                        productdata.map((product, i) => (

                            <tbody className="p-4 divide-y divide-gray-200 ml-2 overflow-auto ">

                                <td className="py-4 pl-4">
                                    <div className="flex items-center ">
                                        {++count}
                                    </div>
                                </td>
                                <td className=" pl-4">
                                    <div className="flex items-center ">
                                        {product.Productname}
                                    </div>
                                </td>
                                <td className=" pl-4">
                                    <div className="">
                                        {product.discription}
                                    </div>
                                </td>
                                <td className=" pl-4">
                                    <div className="pl-12">
                                        {product.Price}
                                    </div>
                                </td>
                                <td className=" pl-12">
                                    <div className="pl-12 pr-4">
                                        {2 + 3}
                                    </div>
                                </td>
                                <td className=" pl-4">
                                    <div className="pl-12 pr-4">
                                        {'xxx'}
                                    </div>
                                </td>
                                <td className=" pl-4">
                                    <div className="flex items-center h-5">
                                        <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded ml-4">
                                            Add Units
                                        </button>
                                    </div>
                                </td>

                            </tbody >

                        ))
                    }

                </table >
            </div>


        </>


    );
}

export default ProductCatalog;




