import { FaCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Detailpage = () => {
  return (
    <>
      <div className="container mx-auto p-20">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <div className="flex flex-col left ">
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
                <div className="pl-5"></div>
              </div>
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
              </div>
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
              </div>
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
              </div>
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
              </div>
              <div className="flex ml-20 mt-5">
                <img src="image/chair.png" alt="er" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <img src="image/chair.png" alt="err" height={1000} width={500} />
          </div>
          <div className="basic-1/2">
            <div className="pl-20">
              <p className="font-bold ">Asgaard sofa</p>
              <p className="font-black text-3xl mt-5 text-red-500">
                25.000.000đ
              </p>
              <div className="flex mt-2 text-yellow-500 mt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex mt-5 font-bold">
                <p className="font-base ">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                  <p className="font-base text-gray-500 mt-5">Size</p>
                  <div className="flex mt-2">
                    <button className="border-solid border-2 bg-yellow-600 rounded-lg text-white mr-2 my-2 py-2 px-4">
                      L
                    </button>
                    <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-2 px-3 py-2 my-2">
                      XL
                    </button>
                    <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-2 px-3 py-2 my-2">
                      XS
                    </button>
                  </div>
                  <p className="font-base text-gray-500 mt-2">Color</p>
                  <div className="flex mt-2 ">
                    <div className="text-blue-600 mr-2">
                      <FaCircle />
                    </div>
                    <div className="text-black-600 mr-2">
                      <FaCircle />
                    </div>
                    <div className="text-green-600 mr-2">
                      <FaCircle />
                    </div>
                  </div>
                  <div className="flex flex-col mt-5" >
                    <div className="flex flex-row">
                      <div className="basis-1/3">
                      <input type="number" min={1} className="px-1 py-1 px-5 rounded-lg py-3"/>
                      </div>
                      <div className="basis-1/3">
                      <button className="border-2 border-green-300 px-20 rounded-lg py-3"> Add To Cart</button>
                      </div>
                      <div className="basis-1/3">
                      <button className="border border-rose-600 px-20 rounded-lg py-3">
                      + Compare
                    </button>
                    </div>
                    </div>
                  </div>
                  <hr className="mt-7"></hr>
                  <p className="font-base text-gray-400 mt-2">SKU : SS001</p>
                  <p className="font-base text-gray-400 mt-2">Category: Sofa</p>
                  <p className="font-base text-gray-400 mt-2">
                    Tags: Sofa, Chair, Home, Shop
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <p className="font-bold text-lg pl-10">Description</p>
          <p className="font-bold text-lg text-gray-400 pl-10">
            Additional Information
          </p>
          <p className="font-bold text-lg text-gray-400 pl-10">
            Reviews [1000]
          </p>
        </div>
        <br />
        <hr />
        <div className="flex flex-col mt-5 ">
          <p className="font-bold text-base text-gray-400 pl-10">
            Embodying the raw, wayward spirit of rock roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of
            Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-bold text-base text-gray-400 pl-10">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10">
          <p className="font-bold text-3xl">Related Products</p>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="bg-slate-100">
            <img src="image/chair.png" alt="er" />
            <Link to={`detail`}>
              <p className="text-2lg font-bold pl-5">Syltherine</p>
            </Link>
            <p className="text-base pl-5">stylish cafe chair</p>
            <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className="bg-slate-100">
            <img src="image/sofa3.jpg" alt="er" />
            <Link to={`detail`}>
              <p className="text-2lg font-bold pl-5">Syltherine</p>
            </Link>
            <p className="text-base pl-5">stylish cafe chair</p>
            <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className="bg-slate-100">
            <img src="image/sofaoce.jpg" alt="er" />
            <Link to={`detail`}>
              <p className="text-2lg font-bold pl-5">Syltherine</p>
            </Link>
            <p className="text-base pl-5">stylish cafe chair</p>
            <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className="bg-slate-100">
            <img src="image/sofa3.jpg" alt="er" />
            <Link to={`detail`}>
              <p className="text-2lg font-bold pl-5">Syltherine</p>
            </Link>
            <p className="text-base pl-5">stylish cafe chair</p>
            <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detailpage;
