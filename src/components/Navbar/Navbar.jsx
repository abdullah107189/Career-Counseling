import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)
    return (
        <div className="sticky top-0 z-50 backdrop-blur-lg bg-gray-400/30">
            <div className="navbar   mx-auto max-w-[1440px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className={({ isActive }) => `btn mr-3 text-white ${isActive ? "btn-accent" : "btn-neutral"}`}>Home</NavLink>
                            <NavLink to="/career-blog" className={({ isActive }) => `btn mr-3 text-white ${isActive ? "btn-accent" : "btn-neutral"}`}>Career Blog</NavLink>
                            <NavLink to="/my-profile" className={({ isActive }) => `btn mr-3 text-white ${isActive ? "btn-accent" : "btn-neutral"}`}>My Profile</NavLink>
                        </ul>
                    </div>
                    <a href="/" className="font-bold text-2xl">Career Counseling</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className={({ isActive }) => `btn mr-3 text-white ${isActive ? 'btn-accent' : 'btn-neutral'}`}>Home</NavLink>
                        <NavLink to="/career-blog" className={({ isActive }) => `btn mr-3 text-white ${isActive ? "btn-accent" : "btn-neutral"}`}>Career Blog</NavLink>
                        <NavLink to="/my-profile" className={({ isActive }) => `btn mr-3 text-white ${isActive ? "btn-accent" : "btn-neutral"}`}>My Profile</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center gap-6">
                                {/* <div className="w-12 rounded-full object-cover">
                                    <img
                                        title="abdullah"
                                        className="rounded-full object-cover"
                                        src={user?.photoURL} />
                                </div> */}
                                <div className="avatar">
                                    <div className="ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL} title={user?.displayName} />
                                    </div>
                                </div>
                                <button onClick={userSignOut} className="btn btn-accent">Log Out</button>
                            </div>
                            :
                            <Link to={'/login'} className="btn btn-accent">login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;