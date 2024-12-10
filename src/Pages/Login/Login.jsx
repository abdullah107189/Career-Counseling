import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [gloading, setGloading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { loginUserEmailAndPass, userLoginWithGoogle, } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true)
        loginUserEmailAndPass(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Successfully done!",
                        text: "Your registration complete 🥰",
                        icon: "success"
                    });
                    setLoading(false)
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        setGloading(true)
        userLoginWithGoogle()
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Register successful!",
                        text: "Register with Google 🥰",
                        icon: "success"
                    });
                    setGloading(false)
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                toast.error(error.message)
                setGloading(false)
            })
    }


    return (
        <div className="min-h-screen items-center flex p-4">
            <Helmet>
                <title>Login || Career Counseling</title>
            </Helmet>
            <Toaster
                position="top-right"
            />
            <div className="lg:w-3/5 md:w-4/5 w-full mx-auto md:p-10 bg-base-100 shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center md:py-10 py-5">Login Section</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative w-full">
                            <input name="password" type={open ? 'password' : 'text'} placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-2 right-1 cursor-pointer p-2" onClick={() => setOpen(!open)}>{open ? <FaEye className="w-10" /> : <FaEyeSlash className="w-10" />}</span>
                        </div>
                        <label className="label">
                            {
                                email ? <Link to={`/forget-password/${email}`} className="label-text-alt link link-hover">Forgot password?</Link> : <button onClick={() => toast.error('please add email')} className="label-text-alt link link-hover">Forgot password?</button>
                            }
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">{loading ? <span className="loading loading-dots loading-lg"></span> : 'Login'}</button>
                        <div onClick={handleGoogleLogin} className="btn btn-accent mt-4 text-white">
                            {gloading ?
                                <span className="loading loading-dots loading-lg"></span>
                                :
                                <div className="flex gap-3 items-center">
                                    Login with google
                                    <img className="w-6 object-contain" src={googleLogo} alt="" />
                                </div>}
                        </div>
                    </div>
                </form>
                <p>If you are new user then <Link className="btn btn-link" to={'/reg'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;