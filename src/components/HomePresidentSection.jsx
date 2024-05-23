export function HomePresidentSection({data}) {
    return (
        <section className="mt-5 bg-light py-5" id={data.naem}>
            <div className="container position-relative">
                <div className="bg-primary p-4 text-white text-content 
                position-relative col-12 col-md-8">
                    <h1 className="mb-3">{data.title}</h1>
                    <p>{data.description}</p>
                    <div className="mt-4">
                        <h5 className='mb-1'>{data.authorName}</h5>
                        <p>{data.authorJob}</p>
                    </div>
                </div>
                <div className="position-absolute" id="presidentImg">
                    <img src={data.authorImgUrl} className="img-fluid" width={303} 
                    height={487} loading="lazy"/>
                </div>
            </div>
        </section>
    )
}