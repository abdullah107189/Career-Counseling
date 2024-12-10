import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const CareerBlog = () => {
    const blogs = useLoaderData()
    return (
        <div className="p-4">
            <Helmet>
                <title>Career Blogs || Career Counseling</title>
            </Helmet>
            <div data-aos="fade-up" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 text-center p-1 rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Boost Your Career with Expert Tips</h1>
                <p className="text-lg">Discover the latest insights, strategies, and stories to advance your career.</p>
            </div>

            <div className="md:py-12 py-5 bg-gray-100 md:px-5 px-2">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div data-aos="fade-up" key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                            <img src={blog.thumbnail} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                <div className="text-sm text-gray-500 mb-4">
                                    By <span className="font-semibold">{blog.author}</span> | {blog.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <button className="btn btn-accent text-white w-full">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerBlog;