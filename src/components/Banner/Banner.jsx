
const Banner = () => {

    return (
        <div
            className="hero my-10 rounded-xl"
            data-aos="fade-up"
            style={{
                backgroundImage: "url(https://i.postimg.cc/mgVZfRjB/9a14b3113405679-Y3-Jvc-Cwy-MTA0-LDE2-NDYs-OTgs-MA.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60  rounded-xl"></div>
            <div className="hero-content text-center md:py-32 py-10 text-white w-11/12 rounded-xl">
                <div className="">
                    <h1 className="mb-5 lg:text-7xl md:text-5xl text-4xl font-bold ">Start your transformation journey Today!</h1>
                    <p className="mb-5">
                        Per leo gravida augue id rhoncus faucibus semper adipiscing. Porttitor nec porta ligula suscipit litora. Orci habitant ridiculus aenean commodo curae pulvinar dictumst nunc senectus.
                    </p>
                    <a href="#allServices" className="btn btn-accent text-white">Discover More</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;