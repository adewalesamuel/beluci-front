export function ServiceSection({data}) {
    return (
        <section className="bg-light py-2" id={data.id}>
            <div className="container py-3">
                <div className="py-3">
                    <h1 className="font-weight-lighter mb-3 text-uppercase">
                        {data.title}
                    </h1>
                    <p className="mt-2">{data.description}</p>
                </div>
                <ul className="row align-content-stretch list-unstyled flex-wrap">
                    {data.serviceList.map((serviceItem, index) => {
                         return (
                            <li className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="font-weight-light">{serviceItem.number}</h1>
                                        <h6 className="font-weight-bolder">
                                            {serviceItem.title}
                                        </h6>
                                        <p className="pt-2">{serviceItem.description}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}