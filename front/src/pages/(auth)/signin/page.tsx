
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const SigninPage = () => {
    const{register,handleSubmit}=useForm();
    const nav=useNavigate();
    const onSubmit=async(formData)=>{
        try{
            await axios.post(`http://localhost:3000/login`,formData);
            window.alert('đăng nhập xong');
            nav('/admin/dashboard');  
        }catch(error){console.log(error.response.data);
        }
    }
    return(
        <>
        <div className="container">
            <h3 className="alert alert-light">đăng nhập thành viên</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-2">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="text" placeholder="email" {...register('email',{required:true})} className="form-control"/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" placeholder="password" {...register('password',{required:true})} className="form-control"/>
                </div>
                <button className="btn btn-primary mt-2">đăng nhập</button>
            </form>
            <Link to={`/auth/signup`}><button className="btn btn-success mt-5">đăng kí??</button></Link>
        </div>
        </>
    )
};
export default SigninPage;
