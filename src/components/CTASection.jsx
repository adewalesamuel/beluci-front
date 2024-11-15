import { Link } from "react-router-dom";
import ctaBg from '../assets/images/cta-bg.jpg';
import { Components } from ".";


export function CTASection(){
    return (
        <section className="bg-light px-2 py-6 text-white position-relative" id="cta" 
        style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Components.ImageOverlay />
            <div className="container text-center position-relative">
                <h2 className="font-weight-bolder text-uppercase">
                    Êtes-vous prêt à profiter de nos services ?
                </h2>
                <Link to={'/devenir-membre'} className="btn bg-white text-primary px-5 py-2
                rounded-pill text-uppercase mt-5 scale">
                    Adhérez à la Beluci
                </Link>
            </div>
        </section>
    )
}