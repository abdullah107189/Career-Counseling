import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/careerServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div
            className="md:my-10 my-5"
            id="allServices"
        >
            <h1 data-aos="fade-up"
                className="text-4xl font-bold md:py-8 text-center py-5"
            >
                Career Counseling Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;