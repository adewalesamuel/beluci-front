import { Link } from "react-router-dom";
import heroBg from '../assets/images/hero-bg.jpg';

export function CTASection(){
    return (
        <section className="bg-light px-2 py-6 text-white" id="cta" style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container text-center">
                <h2 className="font-weight-bolder text-uppercase">
                    Êtes vous prêt à profiter de nos services ?
                </h2>
                <Link to={'/'} className="btn bg-white text-primary px-5 py-2
                rounded-pill text-uppercase mt-5">
                    Adhérez à la Beluci
                </Link>
            </div>
        </section>
    )
}