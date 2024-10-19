import pemImg from '../assets/images/pem.png';

export function PemAboutSection({data}) {
    return (
        <section id={data.name} className="p-4 bg-light">
            <h2 className="text-center text-uppercase fw-bold mb-3">
                {data.title}
            </h2>
            <div className="container card py-1 py-md-4 px-3 px-md-5">
                <img src={pemImg} width={380} className='img-fluid mr-3' loading='lazy'/>
                <div className="row flex-wrap align-items-stretch">
                    <div className="col-12 col-lg-6 py-md-5 py-3">
                        <p className="py-3" style={{
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word'
                        }}>
                            {data.description}
                        </p>
                    </div>
                    <div className="col-12 col-lg-6" style={{
                        backgroundImage: `url('${data.backgroundImgUrl}')`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}></div>
                </div>
            </div>
        </section>
    )
}