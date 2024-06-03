import ScrollAnimation from "react-animate-on-scroll";

export function HomePresidentSection({data}) {
    return (
        <section className="mt-5 bg-light py-5" id={data.name}>
            <div className="container position-relative">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="bg-primary p-4 text-white text-content 
                    position-relative col-12 col-lg-7">
                        <h1 className="mb-3">{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="mt-4">
                            <h5 className='mb-1'>{data.authorName}</h5>
                            <p>{data.authorJob}</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className="position-absolute text-center mt-4 mt-lg-0" 
                id="presidentImg">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                        <img src={data.authorImgUrl} className="img-fluid" width={303} 
                        height={487} loading="lazy"/>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}