export function PemFeatureSection({data}) {
    return (
        <section className="py-5">
            <h2 className="text-center  font-weight-light">{data.title}</h2>
            <div className='container px-3 px-md-5'>
                <ul className="list-unstyled mt-3">
                    {data.featureList.map((featureItem, index) => {
                        return (
                            <li className="py-2 w-100" key={index}>
                                <div className="d-flex align-items-stretch">
                                    <div className="bg-primary text-white px-3 py-2">
                                        {featureItem.number}
                                    </div>
                                    <div className="text-white p-2 flex-fill" 
                                    style={{backgroundColor: '#16263b'}}>
                                        {featureItem.description}
                                    </div>
                                </div>
                            </li>
                        )
                    } )}
                </ul>
                <ul className="list-unstyled mt-5">
                    {data.questionList.map((questionItem, index) => {
                        return (
                            <li className="py-2" key={index}>
                                <h5 className="font-weight-light">
                                    &rarr; {questionItem}
                                </h5>
                            </li>
                        )
                    })}
                </ul>
                <ul className="list-unstyled mt-1">
                    {data.ctaList.map((ctaItem, index) => {
                        return (
                            <li className="py-2 ml-0 ml-md-3" key={index}>
                                <h5 className="font-weight-light text-dark">
                                    {ctaItem}
                                </h5>
                            </li>
                        )
                    })}
                </ul>
                <ul className="list-unstyled mt-2 row align-items-stretch">
                    {data.stepList.map((stepItem, index) => {
                        return (
                            <li className="col-12 col-lg-4 mb-2" key={index}>
                                <div className="bg-primary text-white p-3 h-100">
                                    <h3 className="font-weight-light mb-3">
                                        {stepItem.number}
                                    </h3>
                                    <h6 className="text-uppercase mb-3">{stepItem.title}</h6>
                                    <small className="mb-3 d-block">{stepItem.description}</small>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}