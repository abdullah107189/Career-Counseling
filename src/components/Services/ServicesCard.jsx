import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    // const { id, image, serviceName, category, description, pricing, duration, counselor, rating } = service;
    const { id, image, serviceName, category, description, pricing, counselor } = service;
    return (
        <div className="card bg-base-100 shadow-xl w-full" data-aos="fade-up">
            <figure>
                <img
                    className='w-full h-[200px] object-cover'
                    src={image}
                    alt={serviceName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {serviceName}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{description}</p>
                <p className=''>price : <span className='text-xl'>{pricing}</span></p>
                <p className=''>Counselor Name : <span className='text-xl'>{counselor}</span></p>

                <div className="card-actions justify-end">
                    <Link to={`/servicesDetails/${id}`} className="btn btn-accent text-white mt-2 w-full">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object.isRequired,
}
export default ServicesCard;