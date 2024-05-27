export function PemAboutSection({data}) {
    return (
        <section id={data.name} className="p-4 bg-light">
            <div className="container card p-4 px-5">
                <div className="row flex-wrap align-items-stretch">
                    <div className="col-12 col-lg-6 py-5">
                        <h1 className="font-weight-lighter text-uppercase">
                            {data.title}
                        </h1>
                        <p className="py-3">{data.description}</p>
                    </div>
                    <div className="col-12 col-lg-6" style={{
                        backgroundImage: `url('${data.backgroundImgUrl}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}></div>
                </div>
            </div>
        </section>
    )
}