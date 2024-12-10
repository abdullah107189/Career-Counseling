import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user, updateUserProfile, setIsUpdate } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        updateUserProfile(name, photoURL)
            .then(() => {
                Swal.fire({
                    title: "Successfully Update!",
                    text: "Your  profile update successfully done ! 🥰",
                    icon: "success"
                });
                setIsUpdate((prev) => !prev)
            })
            .catch(error => toast.error(error.message))
    };
    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>My profile || Career Counseling</title>
            </Helmet>
            <div data-aos="fade-up" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 text-center p-1 rounded-lg">
                <h1 className="text-4xl font-bold mb-4">My Profile</h1>
                <p className="text-lg">Here you can will change or update name and photo.</p>
            </div>
            <div data-aos="fade-up" className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="text-center">
                    <img
                        data-aos="fade-up"
                        data-aos-delay="300"
                        src={user?.photoURL}
                        alt="User Avatar"
                        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h2 data-aos="fade-up"
                        data-aos-delay="400" className="text-xl font-semibold">{user?.displayName}</h2>
                    <p data-aos="fade-up"
                        data-aos-delay="500" className="text-gray-600">{user?.email}</p>
                </div>
                <form data-aos="fade-up"
                    data-aos-delay="600" onSubmit={handleUpdateProfile} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            defaultValue={user?.photoURL}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
