import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const [comments, setComment] = useState([])
    const handleSubmitComment = (e) => {
        e.preventDefault()
        const inputComment = e.target.comment.value;
        const newComment = inputComment;
        const oldComments = [...comments, newComment]
        setComment(oldComments)
        e.target.reset()
    }
    return (
        <div className="bg-gray-50 py-8 p-4">
            <Helmet>
                <title>Service Details || Career Counseling</title>
            </Helmet>
            <header data-aos="fade-up" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">{service?.serviceName}</h1>
                    <p className="text-lg">{service?.category}</p>
                </div>
            </header>

            <div data-aos="fade-up" className="container mx-auto mt-8 px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                        <img
                        data-aos="fade-up"
                        data-aos-delay="300"
                            src={service?.image}
                            alt={service?.serviceName}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-delay="500" className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold mb-4">{service?.serviceName}</h2>
                        <p className="text-gray-700 mb-6">{service?.description}</p>

                        <div className="space-y-4">
                            <p className="text-lg">
                                <span className="font-bold">Pricing:</span> {service?.pricing}
                            </p>
                            <p className="text-lg">
                                <span className="font-bold">Duration:</span> {service?.duration}
                            </p>
                            <p className="text-lg">
                                <span className="font-bold">Counselor:</span> {service?.counselor}
                            </p>
                            <p className="text-lg">
                                <span className="font-bold">Rating:</span>{" "}
                                <span className="text-yellow-500 font-bold">{service?.rating}⭐</span>
                            </p>
                        </div>
                        <form onSubmit={handleSubmitComment} className="mt-6 flex gap-5">
                            <input
                                type="text"
                                name="comment"
                                placeholder="Comment here"
                                className="input input-bordered input-success w-full max-w-xs" />
                            <button className="btn btn-success text-white">Comment</button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* comment section  */}
            <div>
                <h1 className="text-3xl font-bold md:my-10 my-5">Comments here.. ({comments.length})</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        comments.map((comment, idx) => <div key={idx} className="bg-white p-4 shadow rounded-lg mb-4">
                            <p className="text-gray-600">{comment}</p>
                            <div className="text-sm text-gray-500 mt-2">- {user?.displayName}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
