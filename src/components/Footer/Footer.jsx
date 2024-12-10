const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <h2 className="text-lg font-bold mb-4">About Us</h2>
                        <p className="text-sm">
                            Career Counseling is dedicated to guiding individuals toward their professional goals with expert advice and resources.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/services" className="hover:underline">Our Services</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/blog" className="hover:underline">Blog</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold mb-4">Resources</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/faq" className="hover:underline">FAQs</a></li>
                            <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
                            <li><a href="/careers" className="hover:underline">Careers</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p className="text-sm">Email: <a className="hover:underline">abdullah107189@gmail.com</a></p>
                        <p className="text-sm">Phone: 0177########</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/30"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Career Counseling. All Rights Reserved.</p>
                    <p>Designed by <a href="https://example.com" className="hover:underline">Abdullah107189</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;