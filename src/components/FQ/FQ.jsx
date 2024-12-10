const FQ = () => {
    return (
        <div className="bg-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Question & Answer Form</h2>
                <div className="join join-vertical w-full" data-aos="fade-up">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How do I improve my resume for IT jobs?</div>
                        <div className="collapse-content">
                            <p className="mb-2">Tailor your resume to highlight relevant skills and experiences.</p>
                            <p>Focus on quantifiable achievements, such as completed projects or certifications.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What are the best resources to learn React?</div>
                        <div className="collapse-content">
                            <p className="mb-2">Official React documentation is a great starting point.</p>
                            <p>Platforms like FreeCodeCamp, Udemy, and YouTube tutorials are highly recommended.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">  How can I find internships in web development?</div>
                        <div className="collapse-content">
                            <p className="mb-2">Use LinkedIn, Glassdoor, and local job portals to search for opportunities.</p>
                            <p>Participate in coding challenges and open-source projects to build your profile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FQ;