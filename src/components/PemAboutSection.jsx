export function PemAboutSection({data}) {
    return (
        <section id={data.name} className="p-4 bg-light">
            <div className="container card py-1 py-md-4 px-3 px-md-5">
                <div className="row flex-wrap align-items-stretch">
                    <div className="col-12 col-lg-6 py-md-5 py-3">
                        <h1 className="text-uppercase" style={{fontWeight: '200'}}>
                            {data.title}
                        </h1>
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