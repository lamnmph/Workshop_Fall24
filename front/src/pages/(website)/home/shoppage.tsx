import { Link } from "react-router-dom";

const Shoppage = () => {
  return (
    <>
      <div className="container mx-auto p-20">
        <img
          src="image/banner.jpg"
          alt="er"
          className="w-full"
          style={{
            border: "2px soid #ddd",
            borderRadius: "6px",
            height: "600px",
          }}
        />
        <br />
        <br />
        <div className="flex flex-col">
          <p className="text-2xl font-bold pl-40">Categories</p>
          <a href="">
            <p className="text-base pl-40 text-yellow-500">Cafe chair</p>
          </a>
          <a href="">
            <p className="text-base pl-40">Sofa</p>
          </a>
          <a href="">
            <p className="text-base pl-40">Lamp</p>
          </a>
          <a href="">
            <p className="text-base pl-40">Carpet</p>
          </a>
          <a href="">
            <p className="text-base pl-40">Cabinet</p>
          </a>
          <a href="">
            <p className="text-base pl-40">Tea table</p>
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-items-end">
          <div></div>
          <div className=" bg-slate-100">
            <img src="image/chair.png" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/chair.png" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/chair.png" />
            <p className="text-2xl font-bold pl-5">respira</p>
            <p className="text-gray-500 text-lg pl-5">
              outdoor bar table and stool
            </p>
            <p className="font-bold text-red-500 text-2xl pl-5">4.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=""></div>
          <div className=" bg-slate-100">
            <img src="image/sofa3.jpg" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/sofa3.jpg" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/sofa3.jpg" />
            <p className="text-2xl font-bold pl-5">respira</p>
            <p className="text-gray-500 text-lg pl-5">
              outdoor bar table and stool
            </p>
            <p className="font-bold text-red-500 text-2xl pl-5">4.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=""></div>
          <div className=" bg-slate-100">
            <img src="image/sofanow.jpg" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/sofanow.jpg" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="image/sofanow.jpg" />
            <p className="text-2xl font-bold pl-5">respira</p>
            <p className="text-gray-500 text-lg pl-5">
              outdoor bar table and stool
            </p>
            <p className="font-bold text-red-500 text-2xl pl-5">4.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex item-center justify-center mt-10 ">
        <Link to={`/shop`}>
          <button className="border-solid border-2 border-yellow-600 bg-yellow-500 rounded-lg text-white mr-5 px-5 py-3 mr-5">
            1
          </button>
        </Link>
        <Link to={`/shop2`}>
          <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-5 px-5 py-3 mr-5">
            2
          </button>
        </Link>
        <Link to={`/shop3`}>
          <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-5 px-5 py-3 mr-5">
            3
          </button>
        </Link>
        <Link to={`/shop`}>
          <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-5 px-5 py-3 mr-5">
            Next
          </button>
        </Link>
      </div>
      <br />
      <br />
    </>
  );
};
export default Shoppage;
