import ScrollAnimation from "react-animate-on-scroll";

export function HomePresidentSection({data}) {
    return (
        <section className="mt-5 bg-light py-5" id={data.name}>
            <div className="container position">
                <div className="row">
                    <div className="col-12 col-md-7 mb-4">
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                            <div className="bg-primary p-4 text-white text-content 
                            position-relative">
                                <h1 className="mb-3">{data.title}</h1>
                                <p>{data.description}</p>
                                <div className="mt-4">
                                    <h5 className='mb-1'>{data.authorName}</h5>
                                    <p>{data.authorJob}</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="text-center col-12 col-md-5" id="presidentImg">
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                            <img src={data.authorImgUrl} className="img-fluid bg-dark" width={303} 
                            height={487} loading="lazy"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}