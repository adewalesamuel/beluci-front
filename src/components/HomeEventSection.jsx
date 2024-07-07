import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { TbCalendar as CalendarIcon } from "react-icons/tb";

export function HomeEventSection({data}) {
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <section className="container my-2" id={data.name}>
                <div className="position-relative my-4">
                    <hr className="border-primary position-absolute w-100 m-0 title-line"/>
                    <h3 className="text-center p-2 position-relative">
                        <span className="bg-white d-inline-block p-2">{data.title}</span>
                    </h3>    
                </div>
                {data?.events?.map((event, index) => {
                    return (
                        <div className="row align-items-strech" key={index}>
                            <div className="col-12 col-lg-6 position-relative" style={{
                                backgroundImage: `url(${event.img_url})`,
                                backgroundSize: '100% auto',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            </div>
                            <div className="col-12 col-lg-6 p-5 bg-primary 
                            text-white">
                                <h3 className="text-uppercase">{event.name}</h3>
                                <p className="text-uppercase">
                                    {event.address}
                                </p>
                                <div className="my-2 d-flex align-items-center">
                                    <div className="bg-white text-primary d-flex align-items-center p-1 mr-2">
                                        <CalendarIcon size={18} /> 
                                        {new Date(event.date).toLocaleDateString()}
                                    </div>
                                </div>
                                <Link to={'/nos-evenements'} className='btn bg-white text-primary 
                                rounded-pill px-3 mt-3 scale'>
                                    <small>Voir tous nos évènements</small>
                                </Link>
                            </div>
                        </div>

                    )
                })}
            </section>

        </ScrollAnimation>
    )
}