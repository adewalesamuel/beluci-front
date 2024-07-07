import euImg from '../assets/images/eu.jpg';
import enabelImg from '../assets/images/enabel.png';
import belgiumFlag from '../assets/images/belgium-flag.png';
import ciFlag from '../assets/images/ci-flag.png';

export function PemFeatureSection({data}) {
    return (
        <section className="py-5">
            <h2 className="text-center  font-weight-light">{data.title}</h2>
            <div className='container px-3 px-md-5'>
                <ul className="list-unstyled mt-3 row align-items-stretch">
                    {data.feature_item_list.map((featureItem, index) => {
                        return (
                            <li className="col-12 col-md-6 col-lg-3 mb-3 py-2" key={index}>
                                <div className="h-100" style={{backgroundColor: '#16263b'}}>
                                    <img className='img-fluid' src={featureItem.imgUrl} 
                                    alt={featureItem.number} />
                                    <div className="text-white p-3 flex-fill" >
                                        {featureItem.description}
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
                <ul className="list-unstyled mt-1">
                    {data.about_item_list.map((ctaItem, index) => {
                        return (
                            <li className="py-2 ml-0 ml-md-3" key={index}>
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
                                <div className="bg-primary text-white p-3 h-100">
                                    <h3 className="font-weight-light mb-3">
                                        {stepItem.number}
                                    </h3>
                                    <h6 className="text-uppercase mb-3 pt-3">{stepItem.title}</h6>
                                    <small className="mb-3 d-block font-weight-lighter">
                                        {stepItem.description}
                                    </small>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="py-3 my-5 text-center">
                    <img src={euImg} width={180} className='img-fluid mr-3'/>
                    <img src={enabelImg} width={180} className='img-fluid'/>
                </div>
                <div className="mx-auto" style={{maxWidth: '700px'}}>   
                    <div className='bg-primary text-white text-center'>
                        Lien d&apos;inscription
                    </div>
                    <div className='bg-light px-4 py-3'>
                        <h5 className='py-2 d-inline-block w-100'>
                            <img src={belgiumFlag} width={20} className='mr-2'/>
                            <a target='_blank' href=' https://mr9tacmfl16.typeform.com/to/FMb1KGL9?typeform-source=stories.enabel.be'>
                                 Inscription pour les belges
                            </a>
                        </h5>
                        <h5 className='py-2 d-inline-block w-100'>
                            <img src={ciFlag} width={20} className='mr-2'/>
                            <a target='_blank' href='https://mr9tacmfl16.typeform.com/to/qDkM40IM'>
                                Inscription pour les Ivoirien(ne)s
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}