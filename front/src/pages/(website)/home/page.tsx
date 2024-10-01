import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container mx-auto p-20">
      <img
        src="image/banner.jpg" alt="er"
        className="w-full"
        style={{ border: "2px soid #ddd", borderRadius: "6px",height:"600px"}}/>
      <br />
      <div className="pr-4 ...">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">New Products</p>
            <button className="border-solid border-2 border-yellow-500 px-4 py-2 font-bold text-yellow-500">
              View all products
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-slate-100">
          <img src="image/chair.png" alt="er" />
          <Link to={`detail`}><p className="text-2lg font-bold pl-5">Syltherine</p></Link>
          <p className="text-base pl-5">stylish cafe chair</p>
          <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
          <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
            Add To Cart
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/sofa3.jpg" alt="er" />
          <Link to={`detail`}><p className="text-2lg font-bold pl-5">Syltherine</p></Link>
          <p className="text-base pl-5">stylish cafe chair</p>
          <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
          <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
            Add To Cart
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/sofaoce.jpg" alt="er" />
          <Link to={`detail`}><p className="text-2lg font-bold pl-5">Syltherine</p></Link>
          <p className="text-base pl-5">stylish cafe chair</p>
          <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
          <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
            Add To Cart
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/sofa3.jpg" alt="er" />
          <Link to={`detail`}><p className="text-2lg font-bold pl-5">Syltherine</p></Link>
          <p className="text-base pl-5">stylish cafe chair</p>
          <p className="text-2lg text-red-600 font-bold pl-5">2.500.000đ</p>
          <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2 ">
            Add To Cart
          </button>
        </div>
      </div>
      <br />
      <div className="flex items-center justify-between">
      <Link to={`detail`}><p className="text-2xl font-bold">Gallery</p></Link>
        <button className="border-solid border-2 border-yellow-500 px-4 py-2 font-bold text-yellow-500">
          View all gallery
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src="image/sofa3.jpg" width={"500px"} />
        </div>
        <div>
          <img src="image/sofanice.png" width={"500px"} />
        </div>
        <div>
          <img src="image/sofanow.jpg" width={"500px"} />
        </div>
        <div>
          <img src="image/sofanow.jpg" width={"500px"} />
        </div>
        <div>
          <img src="image/sofaoce.jpg" width={"500px"} />
        </div>
        <div>
          <img src="image/sofa3.jpg" width={"500px"} />
        </div>
      </div>
      <br />
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">News</p>
        <button className="border-solid border-2 border-yellow-500 px-4 py-2 font-bold text-yellow-500">
          View all news
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-slate-100">
          <img src="image/nicesofa.jpg" alt="er" />
          <p className="flex items-center pl-5">
          <CiCalendar />
          <p className="flex items-center text-gray-500">24/04/2024</p>
          </p>
          <p className="text-2xl font-bold pl-5">
            A bedroom must have something like this
          </p>
          <button className="flex items-center">
            <Link to={`detail`}><p className="text-2lg text-red-600 font-bold pl-5 flex items-center">Xem chi tiết <FaArrowRight className="ml-2" /></p></Link>
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/sofa3.jpg" alt="er" />
          <p className="flex items-center pl-5">
          <CiCalendar />
          <p className="flex items-center text-gray-500">24/04/2024</p>
          </p>
          <p className="text-2xl font-bold pl-5">
            A bedroom must have something like this
          </p>
          <button className="flex items-center">
          <Link to={`detail`}><p className="text-2lg text-red-600 font-bold pl-5 flex items-center">Xem chi tiết <FaArrowRight className="ml-2" /></p></Link>
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/sofaoce.jpg" alt="er" />
          <p className="flex items-center pl-5">
          <CiCalendar />
          <p className="flex items-center text-gray-500">24/04/2024</p>
          </p>
          <p className="text-2xl font-bold pl-5">
            A bedroom must have something like this
          </p>
          <button className="flex items-center">
          <Link to={`detail`}><p className="text-2lg text-red-600 font-bold pl-5 flex items-center">Xem chi tiết <FaArrowRight className="ml-2" /></p></Link>
          </button>
        </div>
        <div className="bg-slate-100">
          <img src="image/chair.png" alt="er" />
          <p className="flex items-center pl-5">
          <CiCalendar />
          <p className="flex items-center text-gray-500">24/04/2024</p>
          </p>
          <p className="text-2xl font-bold pl-5">
            A bedroom must have something like this
          </p>
          <button className="flex items-center">
          <Link to={`detail`}><p className="text-2lg text-red-600 font-bold pl-5 flex items-center">Xem chi tiết <FaArrowRight className="ml-2" /></p></Link>
          </button>
        </div>
      </div><br/><br/>
    </div>
  );
};
export default HomePage;
