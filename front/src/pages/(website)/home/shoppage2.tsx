import { Link } from "react-router-dom";

const Shoppage2 = () => {
  return (
    <>
      <div className="container mx-auto p-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/5bb3/fdf0/0085f47543e899c5caa8f36bd70b330d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAI317j3pczuLHWc9MkwAZw4c6soV0wsZDtzTghIGsat9KoxDqPAc6VEjC8bz6WnzzpMyYaOGp8dtJi7GxKjvvAntWpyg7~A~r9Yf-AfHZYrJf5vb8~UH~-v8Nsmp3sv8X0gqa6xXYqt30nIaZVhiWwie-DBUWIuUnkidBxFgXjNq-cWDcnnLzCR6M-o-u41dlyaaRNLgZ7uMDw9WAcDZ8ElmY8dhO7VHx9erx3pBoZAHWaGSOjJTtQeCOuHGryqoxHjKDHrGJ4EMattRd0lR3Q7rp9Zl-YjsDCCc3Az0XUSVS5GAWeYoYNmiPaMzHHfp4gjQsMt0qHBS8ZJnrsufw__"
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
            <img src="https://s3-alpha-sig.figma.com/img/4e6b/2268/5e9c1e159d9b916c6596ed9c63a9c518?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYgcbUceZ9vVuYU-dOFETSF~9ocbGBnIHT9ndazp5Gf1lqwFei3avhG-GMUGwaxJT2qSJOFJMxyrgac5hMoK1ckdv-LjeRs12YGMI56XY-igQvAymb5mPrgu16LHHL1TUJgQgv3iHl9YKlGJ1rT6DzZQqC~nJkW5AN0q71y6a0PrmnesCfvvVk2JfnPTQoi6MoaAyiKGd8hxtXUHQ9b3zJN7YHiTwvJetMa8UGXccVIB4MzEbuNpAZAIL7NOLJq3OZf4TaLwU2rXMIPyWlK778UbPYJpSHSzZUUX1OKdiOHzOaZw0qQ49ZHNi3TKk~B35tJlxD0JEpIy6fbimwNq9Q__" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/4e6b/2268/5e9c1e159d9b916c6596ed9c63a9c518?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYgcbUceZ9vVuYU-dOFETSF~9ocbGBnIHT9ndazp5Gf1lqwFei3avhG-GMUGwaxJT2qSJOFJMxyrgac5hMoK1ckdv-LjeRs12YGMI56XY-igQvAymb5mPrgu16LHHL1TUJgQgv3iHl9YKlGJ1rT6DzZQqC~nJkW5AN0q71y6a0PrmnesCfvvVk2JfnPTQoi6MoaAyiKGd8hxtXUHQ9b3zJN7YHiTwvJetMa8UGXccVIB4MzEbuNpAZAIL7NOLJq3OZf4TaLwU2rXMIPyWlK778UbPYJpSHSzZUUX1OKdiOHzOaZw0qQ49ZHNi3TKk~B35tJlxD0JEpIy6fbimwNq9Q__" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/4e6b/2268/5e9c1e159d9b916c6596ed9c63a9c518?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYgcbUceZ9vVuYU-dOFETSF~9ocbGBnIHT9ndazp5Gf1lqwFei3avhG-GMUGwaxJT2qSJOFJMxyrgac5hMoK1ckdv-LjeRs12YGMI56XY-igQvAymb5mPrgu16LHHL1TUJgQgv3iHl9YKlGJ1rT6DzZQqC~nJkW5AN0q71y6a0PrmnesCfvvVk2JfnPTQoi6MoaAyiKGd8hxtXUHQ9b3zJN7YHiTwvJetMa8UGXccVIB4MzEbuNpAZAIL7NOLJq3OZf4TaLwU2rXMIPyWlK778UbPYJpSHSzZUUX1OKdiOHzOaZw0qQ49ZHNi3TKk~B35tJlxD0JEpIy6fbimwNq9Q__" />
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
            <img src="https://s3-alpha-sig.figma.com/img/5b51/6456/709e23342652266512ee1ce75f681293?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcyz9Bb3yE98oOi5VsydSxDJBnO2w8UuOcPgxs-PxupCLqUX5Ui6tcXG4Wv9XMmFr9qGT-Rvr6YTZ75uWMRhafsHrl7qEiddCln7OOnO5Lz5nqwa6BGvzVwE052vY6Zs98qLPmrnFqrM5gIT3XwIUpw0pPe-vUA-eJ62Qyk~mDv6j97n8slMA~qHFtM9h~ZmU5muLXFVsbRXwOIK4sSmlsPHQ~Z5jsHJHWjX-pApo7waPsgqlu-eAlYk-vtZST30kTN7tgyBdXDh3LlneCynT6mQO7ORwtSWSy~GlptpvmmaVrmiks3RjGAl0-bTrxTD7b0ktU2xZGpKuGkFFYH8lQ__" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/5b51/6456/709e23342652266512ee1ce75f681293?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcyz9Bb3yE98oOi5VsydSxDJBnO2w8UuOcPgxs-PxupCLqUX5Ui6tcXG4Wv9XMmFr9qGT-Rvr6YTZ75uWMRhafsHrl7qEiddCln7OOnO5Lz5nqwa6BGvzVwE052vY6Zs98qLPmrnFqrM5gIT3XwIUpw0pPe-vUA-eJ62Qyk~mDv6j97n8slMA~qHFtM9h~ZmU5muLXFVsbRXwOIK4sSmlsPHQ~Z5jsHJHWjX-pApo7waPsgqlu-eAlYk-vtZST30kTN7tgyBdXDh3LlneCynT6mQO7ORwtSWSy~GlptpvmmaVrmiks3RjGAl0-bTrxTD7b0ktU2xZGpKuGkFFYH8lQ__" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/5b51/6456/709e23342652266512ee1ce75f681293?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcyz9Bb3yE98oOi5VsydSxDJBnO2w8UuOcPgxs-PxupCLqUX5Ui6tcXG4Wv9XMmFr9qGT-Rvr6YTZ75uWMRhafsHrl7qEiddCln7OOnO5Lz5nqwa6BGvzVwE052vY6Zs98qLPmrnFqrM5gIT3XwIUpw0pPe-vUA-eJ62Qyk~mDv6j97n8slMA~qHFtM9h~ZmU5muLXFVsbRXwOIK4sSmlsPHQ~Z5jsHJHWjX-pApo7waPsgqlu-eAlYk-vtZST30kTN7tgyBdXDh3LlneCynT6mQO7ORwtSWSy~GlptpvmmaVrmiks3RjGAl0-bTrxTD7b0ktU2xZGpKuGkFFYH8lQ__" />
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
            <img src="https://s3-alpha-sig.figma.com/img/fb74/ef0c/a6998a2c32659fca5e3b95711b12b8d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nWbOGUrcD65XgdFEUC8H-qD35xKRiHsgGxOqSchBnaCGew6~ZZnHa7Pm1Zawun8-vgo9bcMa6TOPXB1hKlwb3FNkDIll9bf~Weaj6fTWpGhQ0eIXZg2Ec1PUvtSYIVnxcFHB2Ma06QFQrS6a4yjsfYn2i19q4xbT1-xCVxrnXssZGbEJQyNVwt8Glaxov8h2royWlqTB8StO6Z177k8TzkNQu0l5vDikOLxgpKVuECTiLY5A4AYwfUy1ZoiUz1rPURty5xQjmtAgb92xTL5l6fCuKQ~ILyl-664K74rgo2ZBiI37zi~oX6gbXgSYYWlyGNvvv0rdixv74ZzSbEzwZA__" />
            <p className="text-2xl font-bold pl-5">leviosa</p>
            <p className="text-gray-500 text-lg pl-5">stylish cafe chair</p>
            <p className="font-bold text-red-500 text-2xl pl-5">1.800.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/fb74/ef0c/a6998a2c32659fca5e3b95711b12b8d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nWbOGUrcD65XgdFEUC8H-qD35xKRiHsgGxOqSchBnaCGew6~ZZnHa7Pm1Zawun8-vgo9bcMa6TOPXB1hKlwb3FNkDIll9bf~Weaj6fTWpGhQ0eIXZg2Ec1PUvtSYIVnxcFHB2Ma06QFQrS6a4yjsfYn2i19q4xbT1-xCVxrnXssZGbEJQyNVwt8Glaxov8h2royWlqTB8StO6Z177k8TzkNQu0l5vDikOLxgpKVuECTiLY5A4AYwfUy1ZoiUz1rPURty5xQjmtAgb92xTL5l6fCuKQ~ILyl-664K74rgo2ZBiI37zi~oX6gbXgSYYWlyGNvvv0rdixv74ZzSbEzwZA__" />
            <p className="text-2xl font-bold pl-5">lolito</p>
            <p className="text-gray-500 text-lg pl-5">luxury big sofa</p>
            <p className="font-bold text-red-500 text-2xl pl-5">2.000.000đ</p>
            <button className="border-solid border-2 border-yellow-500 min-w-full text-yellow-500 font-bold px-4 py-2">
              Add To Cart
            </button>
          </div>
          <div className=" bg-slate-100">
            <img src="https://s3-alpha-sig.figma.com/img/fb74/ef0c/a6998a2c32659fca5e3b95711b12b8d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nWbOGUrcD65XgdFEUC8H-qD35xKRiHsgGxOqSchBnaCGew6~ZZnHa7Pm1Zawun8-vgo9bcMa6TOPXB1hKlwb3FNkDIll9bf~Weaj6fTWpGhQ0eIXZg2Ec1PUvtSYIVnxcFHB2Ma06QFQrS6a4yjsfYn2i19q4xbT1-xCVxrnXssZGbEJQyNVwt8Glaxov8h2royWlqTB8StO6Z177k8TzkNQu0l5vDikOLxgpKVuECTiLY5A4AYwfUy1ZoiUz1rPURty5xQjmtAgb92xTL5l6fCuKQ~ILyl-664K74rgo2ZBiI37zi~oX6gbXgSYYWlyGNvvv0rdixv74ZzSbEzwZA__" />
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
          <button className="border-solid border-2 bg-gray-400 rounded-lg text-white mr-5 px-5 py-3 mr-5">
            1
          </button>
        </Link>
        <Link to={`/shop2`}>
          <button className="border-solid border-2 border-yellow-600 bg-yellow-500 rounded-lg text-white mr-5 px-5 py-3 mr-5">
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
export default Shoppage2;
