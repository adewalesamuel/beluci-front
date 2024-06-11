import ScrollAnimation from "react-animate-on-scroll"

export function ServiceSection({data}) {
    return (
        <section className="bg-light py-2" id={data.id}>
            <div className="container py-3">
                <div className="py-3">
                    <h1 className="mb-3 text-uppercase" style={{fontWeight: '200'}}>
                        {data.title}
                    </h1>
                    <p className="mt-2">{data.description}</p>
                </div>
                <ul className="row align-content-stretch list-unstyled flex-wrap">
                    {data.item_list.map((serviceItem, index) => {
                         return (
                            <li className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}
                                delay={100 * (index + 1)} className="h-100">
                                    <div className="card h-100 service-card">
                                        <div className="card-body position-relative">
                                            <h1 className="font-weight-light position-relative">{serviceItem.number}</h1>
                                            <h6 className="font-weight-bolder">
                                                {serviceItem.title}
                                            </h6>
                                            <p className="pt-2">{serviceItem.description}</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}