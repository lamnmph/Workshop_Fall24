import { FaBook, FaRoad } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";

const Aboutpage = () => {
  return (
    <>
      <div className="container mx-auto p-20">
        <img
          src="image/banner.jpg"
          alt=""
          className="w-full"
          style={{ border: "2px soid #ddd", borderRadius: "6px", height: "600px" }}
        />
        <br />
        <br />
        <div className="flex flex-row pl-30">
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                  <div className="text-green-600">
                  <PiTarget />
                  </div>
                </div>
                <p className="font-bold text-3xl text-center">OUR MISSION</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                <div className="text-green-600">
                  <FaRoad />
                </div>
                </div>
                <p className="font-bold text-3xl text-center">OUR VISION</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                <div className="text-green-600">
                  <FaBook />
                  </div>
                </div>
                <p className="font-bold text-3xl text-center">OUR VALUES</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex">
          <img
            src="image/housecontactt.jpg"
            width={624}
            height={408}
          ></img>
          <div className="flex flex-col ml-10 mt-20">
            <p className="font-bold text-3xl">ABOUT FURNIO COMPANY</p>
            <p className="text-base mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-base mt-5">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-3xl font-bold">WE CREATE NATURAL WOOD FURNITURE</p>
          <p className="text-3xl font-bold">AS WELL AS HIGH-QUALITY</p>
        </div>
        <div className="flex justify-center ">
          <div className="mr-4 mt-4">
            <img
              src="image/housecontact2.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="image/housecontact3.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="image/housecontact4.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="image/housecontact5.jpg"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutpage;
