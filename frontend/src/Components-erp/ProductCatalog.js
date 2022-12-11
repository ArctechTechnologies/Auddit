import React, { Component } from 'react'
import Userprofile from './UserProfile';
function ProductCatalog() {
    let count = 0;
    const productdata = [
        {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        }, {
            image: "logo.png",
            Productname: 'cvnggv',
            Price: '23',
            // discription: ''
        },
    ];

    return (
        <>

            <div style={{ height: '15cm' }} className="w-full  mt-10 overflow-auto" >
                <table className="w-full p-">
                    <thead className="bg-gray-50 p-3">
                        <tr>
                            <th
                                scope="col"
                                className="text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                S.no
                            </th>
                            <th
                                scope="col"
                                className="text-left text-xs font-bold text-gray-500 uppercase "
                            >
                                Product name
                            </th>
                            <th
                                scope="col"
                                className="text-xs font-bold pl-36 text-left text-gray-500 uppercase "
                            >
                                Discription
                            </th>
                            <th
                                scope="col"
                                className="text-xs font-bold pr-32 text-left text-gray-500 uppercase "
                            >
                                Price(one Quantity)
                            </th>
                            <th
                                scope="col"
                                className="text-xs font-bold pr-10 text-gray-500 uppercase "
                            >
                                More Details
                            </th>
                        </tr>
                    </thead >

                    {
                        productdata.map((product, i) => (

                            <tbody className="divide-y divide-gray-200 ml-2">

                                <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                        {++count}
                                    </div>
                                </td>
                                <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                        {product.Productname}
                                    </div>
                                </td>
                                <td className="py-3 pl-4">
                                    <div className="">
                                        leoemvgfdkg krgdygls wetwTEW  RWFFH E; pgPvt G;{product.discription}
                                    </div>
                                </td>
                                <td className="py-3 pl-4">
                                    <div className="pl-12">
                                        {product.Price}
                                    </div>
                                </td>
                                <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                        <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-s border border-purple-500 hover:border-transparent rounded ml-4">
                                            Details
                                        </button>
                                    </div>
                                </td>
                            </tbody >

                        ))
                    }

                </table >
            </div>
            <div>
                <h1 style={{ position: 'absolute', top: "0cm", left: '14.5cm', display: 'inline-block' }} className="text-xl mt-1" >Total Product are - {count}</h1>
            </div>
        </>

    );

}

export default ProductCatalog;