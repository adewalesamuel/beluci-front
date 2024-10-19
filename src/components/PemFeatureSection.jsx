export function PemFeatureSection({data}) {
    return (
        <section className="pt-5">
            <h2 className="text-center">{data.title}</h2>
            <div className='container px-3 px-md-5'>
                <ul className="list-unstyled mt-3 row align-items-stretch">
                    {data.feature_item_list.map((featureItem, index) => {
                        return (
                            <li className="col-12 col-md-6 mb-3 mb-2" key={index}>
                                <div className="row m-0 shadow-sm bg-white align-items-stretch h-100">
                                    <div className="col-12 col-lg-4 px-0">
                                        <img className="img-fluid h-100" src={featureItem.imgUrl} 
                                        alt={featureItem.number} style={{objectFit: 'cover'}} loading="lazy"/>
                                    </div>
                                    <div className="col-12 col-lg-8 p-3">
                                        <div className="p-3 p-lg-0 pr-lg-4">
                                            <h5>
                                                {featureItem.number ?? "Titre de la section"}
                                            </h5>
                                            <p>{featureItem.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    } )}
                </ul>
                <ul className="list-unstyled mt-5">
                    {data.question_item_list.map((questionItem, index) => {
                        return (
                            <li className="py-2" key={index}>
                                <h5 className="font-weight-light">
                                    &rarr; {questionItem.description}
                                </h5>
                            </li>
                        )
                    })}
                </ul>
                <ul className="pl-4 pl-md-0 mt-1">
                    {data.about_item_list.map((ctaItem, index) => {
                        return (
                            <li className="ml-0 ml-md-3" key={index}>
                                <h5 className="font-weight-light text-dark">
                                    {ctaItem.description}
                                </h5>
                            </li>
                        )
                    })}
                </ul>
                <ul className="list-unstyled mt-2 row align-items-stretch">
                    {data.step_item_list.map((stepItem, index) => {
                        return (
                            <li className="col-12 col-lg-4 mb-2" key={index}>
                                <div className="p-3 h-100" style={{backgroundColor: "#afb8c5"}}>
                                    <h1 className="mb-3 d-flex align-items-center bg-primary 
                                    text-white justify-content-center rounded-circle font-weight-lighter" 
                                    style={{width: '4rem', height: '4rem'}}>
                                        {stepItem.number}
                                    </h1>
                                    <h6 className="text-uppercase mb-3 pt-3 text-primary">{stepItem.title}</h6>
                                    <small className="mb-3 d-block">
                                        {stepItem.description}
                                    </small>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}