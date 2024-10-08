import { CiInstagram, CiLocationOn } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaPaperPlane,
  FaTiktok,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const Contactpage = () => {
  return (
    <>
      <div className="container mx-auto p-20">
        <img
          src="image/banner.jpg"
          alt=""
          className="w-full"
          style={{ border: "2px soid #ddd", borderRadius: "6px",height:"600px" }}
        />
      </div>
      <div className="flex flex-row pl-40">
        <div className="basis-1/3">
          <div className="flex">
          <div className="text-4xl text-green-600">
            <CiLocationOn />
            </div>
            <div className="flex flex-col">
              <p className="font-bold ml-4">ADDRESS</p>
              <p className="font-bold text-gray-400 text-base ml-4">60/850 Đường Láng, Láng</p>
              <p className="font-bold text-gray-400 text-base ml-4">Thượng, Đống Đa, Hà Nội</p>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex">
          <div className="text-4xl text-green-600">
            <IoIosContact />
        </div>
            <div className="flex flex-col">
              <p className="font-bold ml-4 ">CONTACT DETAILS</p>
              <p className="font-bold text-gray-400 ml-4">info@furniro.com</p>
              <p className="font-bold text-gray-500 ml-4">02056278686</p>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex">
            <div className="text-4xl text-green-600">
            <IoShareSocialOutline />
            </div>
            <p className="font-bold ml-4 ">SOCIAL NETWORKS</p>
          </div>
          <div className="flex ml-8 pl-5">
            <FaFacebookSquare />
            <CiInstagram />
            <FaTiktok />
            <FaTwitterSquare />
            <FaYoutubeSquare />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex bg-gray-200">
        <img
          src="image/housecontact.png"
          width={704}
          height={485}
        />
        <div className="flex-col ml-10 mt-40">
        <p className="font-bold text-2xl">CONTACT</p>
        <p className="font-bold text-4xl mt-4">CONTACT WITH US NOW</p>
        <form className="mt-10">
            <div className="flex mt-4">
                <input placeholder="First Name" name="firstname"required type="text" className="rounded-lg"/>
                <div className="pl-4">
                <input placeholder="Last Name" name="lastname" required type="text" className="rounded-lg"/>
                </div>
            </div>
            <div className="flex mt-4">
                <input placeholder="Email" name="email" required type="email"/>
                <div className="pl-4">
                <input placeholder="Phone Number" name="phonenumber" required type="number" className="rounded-lg"/>
                </div>
            </div>
            <div className="flex mt-4">
            <input placeholder="Message" name="message" required type="text" className="rounded-lg"/>
            </div>
            <div className="flex-col mt-4">
            <button className="bg-green-600 text-white flex px-3 py-3"><div className="mr-2 mt-1"><FaPaperPlane /></div>Send Infomation</button>
            </div>
        </form>
        </div>
      </div>
    </>
  );
};
export default Contactpage;
