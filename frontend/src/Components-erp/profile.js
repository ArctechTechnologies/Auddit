import React from "react";

const productdata = [
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },
];

// const profiledata = () => {
//   const nam = localStorage.getItem("Username");
//   const name = JSON.parse(nam);
//   const Adres = localStorage.getItem("Adress");
//   const Adress = JSON.parse(Adres)
//   const Emai = localStorage.getItem("Email");
//   const Email = JSON.parse(Emai)
//   const GSTI = localStorage.getItem("GSTIN");
//   const GSTIN = JSON.parse(GSTI)
//   console.log(name);
// };

function profile() {
  return (
    <>
      <div className="overflow-auto h-screen">
        <div className="w-full flex font-medium ">
          <div className="w-1/4 ml-2 border-2 outline m-4 mr-2">
            <img className="w-full " src="logo.png" alt="" />
          </div>
          <div className=" m-4 mr-6 w-3/4 h-80 border   p-4">
            <div className="mt-4 ml-2 flex ">
              <div className="-mt-8 h-80 -ml-8 pl-4 bg-violet-900 text-white">
                <span className="mr-20  underline">Businesses Name :</span>
                <br />
                <br />
                <span className="mr-40 underline ">Adress:</span>
                <br />
                <br />
                <span className="mr-40 underline">Email :</span>
                <br />
                <br />
                <span className="mr-40 underline">GSTIN :</span>
                <br />
                <br />
                <span className="mr-24 underline">Businesses Type :</span>
                <br />
                <br />
                <span className="mr-40 underline"> Contact :</span>
                <br />
                <br />
              </div>
              <div className="-mt-8 h-80  pl-4  text-black w-full bg-stone-100">
                <span className="text-l  p-2">
                  {JSON.parse(localStorage.getItem("Username"))}
                </span>
                <br />
                <br />
                <span className="text-l  p-2 ">
                  {JSON.parse(localStorage.getItem("Adress"))}
                </span>
                <br />
                <br />
                <span className="text-l  p-2 ">
                  {" "}
                  {JSON.parse(localStorage.getItem("Email"))}
                </span>
                <br />
                <br />
                <span className="text-l  p-2 ">
                  {" "}
                  {JSON.parse(localStorage.getItem("GSTIN"))}
                </span>
                <br />
                <br />
                <span className="text-l  p-2 ">
                  fewrfw{JSON.parse(localStorage.getItem(""))}
                </span>
                <br />
                <br />
                <span className="text-l  p-2 ">
                  rwegewg{JSON.parse(localStorage.getItem(""))}
                </span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-3/6 overflow-auto">
          <div className="w-full  items-center justify-center flex flex-wrap">
            {productdata.map((product, i) => (
              <div className="w-1/5 border outline-black  m-4 shadow shadow-black bg-white-900 text-black">
                <img
                  className=" p-auto mb-1"
                  src={`${product.image}`}
                  alt="img"
                />
                <br />
                <br />
                <span className=" px-20 text-l text-grey-300">
                  {product.Productname}
                </span>
                <br />
                <span className=" px-20 text-xl">{product.Price}</span>
                <br />
                <br />
                <button className="bg-blue-900 w-24 text-white ml-16 hover:bg-sky-700 mb-1">
                  Click
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
