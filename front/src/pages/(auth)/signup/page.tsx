import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
    const{register,handleSubmit}=useForm();
    const nav=useNavigate();
    const onSubmit=async(formData)=>{
        try{
            await axios.post(`http://localhost:3000/users`,formData);
            window.alert('đăng kí xong');
            nav('/auth/login');  
        }catch(error){
            console.log("lỗi :",error.response.data);
        }
    }
    return(
        <>
        <div className="container">
            <h3 className="alert alert-light">đăng kí thành viên</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-2">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" placeholder="email" {...register('email',{required:'email k dc trống'})} className="form-control"/>
                    {/* {errors.email&&<span style={{color:'red'}}>{errors.email.message}</span>} */}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" placeholder="password" {...register('password',{required:true})} className="form-control"/>
                </div>
                <button className="btn btn-primary mt-2">đăng kí</button>
            </form>
            <Link to={`/auth/login`}><button className="btn btn-success mt-5">đăng nhập??</button></Link>
        </div>
        </>
    )
};
export default SignupPage;
