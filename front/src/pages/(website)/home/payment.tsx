import { FaCircle } from "react-icons/fa";

const Paymentpage = () => {
  return (
    <>
      <div className="flex pl-10 ">
        <p className="font-bold text-3xl mt-10">Billing details</p>
      </div>
      <div className="container mx-auto p-10">
        <div className="flex">
          <div>
            <form>
              <div className="flex ">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="font-bold">
                    First Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    className="border-solid border-2 border-gray-600 px-2 py-2"
                  />
                </div>
                <div className="flex flex-col pl-20">
                  <label htmlFor="lastname" className="font-bold">
                    Last Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    className="border-solid border-2 border-gray-600 px-2 py-2"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="companyname" className="font-bold mt-10">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="companyname"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="font-bold mt-10">
                  Country/Region
                </label>
                <select
                  name="contry"
                  className="border-solid border-2 border-gray-600 mt-5 text-gray-400 px-2 py-2"
                >
                  <option>Sri Lanka</option>
                  <option>Florida</option>
                  <option>Cina</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="streetaddress" className="font-bold mt-10">
                  Street address
                </label>
                <input
                  type="text"
                  name="streetaddress"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="font-bold mt-10">
                  Town/City
                </label>
                <input
                  type="text"
                  name="city"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="province" className="font-bold mt-10">
                  Province
                </label>
                <select
                  name="province"
                  className="border-solid border-2 border-gray-600 mt-5 text-gray-400 px-2 py-2"
                >
                  <option>Western Province</option>
                  <option>Alabama</option>
                  <option>Cina</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="code" className="font-bold mt-10">
                  Zip code
                </label>
                <input
                  type="text"
                  name="code"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-bold mt-10">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold mt-10">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-solid border-2 border-gray-600 mt-5 px-2 py-2"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col">
          <div className="pl-10 flex ">
            <div className="pl-20">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">Product</p>
                <div className="flex">
                  <p className="mt-5 text-gray-400 font-base">Asgaard sofa</p>
                  <p className="font-bold mt-5 pl-2">X1</p>
                </div>
                <p className="mt-5 font-base">Subtotal</p>
                <p className="mt-5 font-base">Total</p>
              </div>
            </div>
            <div className="pl-80">
              <p className="text-2xl font-bold">Subtotal</p>
              <p className="mt-5 font-bold">25.000.000đ</p>
              <p className="mt-5 font-bold">25.000.000đ</p>
              <p className="mt-5 font-black text-2xl text-yellow-600">
                25.000.000đ
              </p>
            </div>
          </div>
          <div className="pl-10">
            <div className="flex flex-col">
            <div className="pl-20 flex mt-5">
              <div className="mt-1">
              <FaCircle />
              </div>
              <p className="font-bold ml-2">Direct Bank Transfer</p>
            </div>
            <p className="text-gray-400 font-base mt-2 pl-20">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <div>
              <div className="text-gray-400 flex pl-20 mt-5"><div className="mt-1"><FaCircle /></div><p className="font-bold ml-2">ATM Bank Transfer</p></div>
              <div className="text-gray-400 flex pl-20 mt-5"><div className="mt-1"><FaCircle /></div><p className="font-bold ml-2">Cash On Delivery</p></div>
            </div>
            <div className="flex flex-col mt-5">
              <p className="font-base pl-20">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <p className="font-bold">privacy policy.</p>
              </p>
              <div className="pl-20">
              <button className="border-2 mt-5 text-yellow-600 font-bold border-yellow-600 my-5 px-40 py-2">Place order</button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paymentpage;
