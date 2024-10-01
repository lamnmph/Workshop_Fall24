import {Navigate,Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignupPage from "./pages/(auth)/signup/page";
import LayoutAdmin from "./pages/(admin)/layout";
import NotFoundPage from "./pages/(website)/404/page";
import SigninPage from "./pages/(auth)/signin/page";
import Shoppage from "./pages/(website)/home/shoppage";
import Aboutpage from "./pages/(website)/home/aboutpage";
import Contactpage from "./pages/(website)/home/contactpage";
import Searchpage from "./pages/(website)/home/searchpage";
import Wishlistpage from "./pages/(website)/home/wishlistpage";
import Shoppingcartpage from "./pages/(website)/home/shoppingcart";
import Detailpage from "./pages/(website)/home/detailpage";
import Paymentpage from "./pages/(website)/home/payment";
import Productaddpage from "./pages/(admin)/dashboard/productadd";
import Producteditpage from "./pages/(admin)/dashboard/productedit";
import Productdetailpage from "./pages/(admin)/dashboard/productdetail";
import DashboardAdminpage from "./pages/(admin)/dashboard/page";
import Shoppage2 from "./pages/(website)/home/shoppage2";
import Shoppage3 from "./pages/(website)/home/shoppage3";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage/>} />
                    <Route path="signup" element={<SignupPage/>} />
                    <Route path="/auth/login" element={<SigninPage/>} />
                    <Route path="shop" element={<Shoppage/>}/>
                    <Route path="shop2" element={<Shoppage2/>}/>
                    <Route path="shop3" element={<Shoppage3/>}/>
                    <Route path="about" element={<Aboutpage/>}/>
                    <Route path="contact" element={<Contactpage/>}/>
                    <Route path="search" element={<Searchpage/>}/>
                    <Route path="wishlist" element={<Wishlistpage/>}/>
                    <Route path="shoppingcart" element={<Shoppingcartpage/>}/>
                    <Route path="detail" element={<Detailpage/>}/>
                    <Route path="pay" element={<Paymentpage/>}/>
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard"/>} />
                    <Route path="dashboard" element={<DashboardAdminpage />} />
                    <Route path="dashboard/product/add" element={<Productaddpage/>} />
                    <Route path="dashboard/product/edit/:id" element={<Producteditpage/>} />
                    <Route path="dashbard/product/detail/:id" element={<Productdetailpage/>} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}
export default App;
