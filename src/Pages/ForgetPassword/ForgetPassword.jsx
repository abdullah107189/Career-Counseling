import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ForgetPassword = () => {
    const { passReset } = useContext(AuthContext)
    const { email } = useParams()
    const [newEmail, setNewEmail] = useState(email)
    // const navigator = useNavigate()
    const handleResetPassword = (e) => {
        e.preventDefault()
        passReset(newEmail)
            .then(() => {
                Swal.fire({
                    title: "Massage sent",
                    text: `Check your email 👉${newEmail}👈`,
                    icon: "success"
                });
                window.open("https://www.gmail.com", "_blank");
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }
    return (
        <div className="w-1/2 mx-auto min-h-screen flex items-center">
            <Helmet>
                <title>Forget Password || Career Counseling</title>
            </Helmet>
            <form onSubmit={handleResetPassword} className="w-full shadow-lg rounded-lg border p-10">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input onChange={(e) => setNewEmail(e.target.value)} type="email" name="email" defaultValue={email} required className="grow" placeholder="Email" />
                </label>
                <button type="submit" className="btn btn-accent mt-3">
                    Reset Password
                </button>
                <Link to={'/login'} className="btn btn-accent ml-4">Login</Link>
            </form>

        </div>
    );
};

export default ForgetPassword;