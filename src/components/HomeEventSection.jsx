import { Link } from "react-router-dom";

export function HomeEventSection({data}) {
    return (
        <section className="container my-2" id={data.name}>
            <div className="position-relative my-4">
                <hr className="border-primary position-absolute w-100 m-0 title-line"/>
                <h3 className="text-center p-2 position-relative">
                    <span className="bg-white d-inline-block p-2">{data.title}</span>
                </h3>    
            </div>
            {data.events.map((event, index) => {
                return (
                    <div className="row align-items-strech" key={index}>
                        <div className="col-12 col-lg-6 position-relative" style={{
                            backgroundImage: `url(${event.image_url})`,
                            backgroudSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        </div>
                        <div className="col-12 col-lg-6 p-5 bg-primary 
                        text-white">
                            <h3 className="text-uppercase">Nos prochains évènements</h3>
                            <p className="text-uppercase">
                                {event.title}
                            </p>
                            <Link to={data.buttonLink} className='btn bg-white text-primary 
                            rounded-pill px-3 mt-3'>
                                <small>Voir tous nos évènements</small>
                            </Link>
                        </div>
                    </div>

                )
            })}
        </section>
    )
}