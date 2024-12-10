const WorkShops = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return (
        <div className="" >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Career Counseling Workshops and Events</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {numbers.map((e) => (
                        <div
                            data-aos="fade-up"
                            key={e}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold mb-2">Event Title {e}</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Join us for an engaging workshop to enhance your skills.
                            </p>
                            <div className="text-gray-700 text-sm mb-3">
                                <p><strong>Date:</strong> 20th Dec 2024</p>
                                <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
                            </div>
                            <button className="btn btn-accent text-white w-full">Register Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkShops;