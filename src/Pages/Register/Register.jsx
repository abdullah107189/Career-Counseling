import { Link, useNavigate } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [gloading, setGloading] = useState(false)
    const navigate = useNavigate()
    const { userLoginWithGoogle, createUserEmailAndPass, updateUserProfile } = useContext(AuthContext)
    const handleReg = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length <= 5) {
            return toast.error('please set must be 6 charecter')
        }
        if (password.length < 0) {
            return toast.error('please add minimum 6 charecters')
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long.");
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }
        setLoading(true)
        createUserEmailAndPass(email, password)
            .then(res => {
                if (res.user) {
                    updateUserProfile(name, photoURL)
                        .then(() => {
                            Swal.fire({
                                title: "Successfully done!",
                                text: "Your registration complete 🥰",
                                icon: "success"
                            });
                            setLoading(false)
                            navigate('/')
                        })
                        .catch(error => {
                            toast.error(error.message)
                            setLoading(false)
                        })
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
                    navigate('/')
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
                <title>Register || Career Counseling</title>
            </Helmet>
            <Toaster
                position="top-right"
            />
            <div className="lg:w-3/5 md:w-4/5 w-full mx-auto md:p-10 bg-base-100 shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center py-5">Register Section</h1>
                <form onSubmit={handleReg} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name="photoURL" type="url" placeholder="Your photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative w-full">
                            <input name="password" type={open ? 'password' : 'text'} placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-2 right-1 cursor-pointer p-2" onClick={() => setOpen(!open)}>{open ? <FaEye className="w-10" /> : <FaEyeSlash className="w-10" />}</span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">{loading ? <span className="loading loading-dots loading-lg"></span> : 'Register'}</button>
                        <div onClick={handleGoogleLogin} className="btn btn-accent mt-4 text-white">
                            {gloading ?
                                <span className="loading loading-dots loading-lg"></span>
                                :
                                <div className="flex gap-3 items-center">
                                    Register with google
                                    <img className="w-6 object-contain" src={googleLogo} alt="" />
                                </div>}
                        </div>
                    </div>
                    <p>If you have an account then <Link className="btn btn-link" to={'/login'}>Login</Link></p>
                </form>
            </div >
        </div >
    );
};

export default Register;