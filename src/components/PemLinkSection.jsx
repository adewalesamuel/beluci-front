export function PemLinkSection({data}) {
    return (
        <section className="py-3">
            <div className="container">
                <div className='row align-items-stretch'>
                    <div className="col-12 col-lg-8">
                        {data.link_item_list.map((linkItem, index) => {
                            return (
                                <div className='mb-3 shadow' key={index}>
                                    <div className='bg-primary text-white text-center 
                                    font-weight-bold py-1'>
                                        {linkItem.title} <br />
                                    </div>
                                    <div className='bg-light px-4 py-3'>
                                        <h5 className='d-inline-block w-100'>
                                            <a target='_blank' className='text-primary' 
                                            href={linkItem.url}>
                                                {linkItem.description}
                                            </a>
                                        </h5>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <div className="h-100 bg-light" style={{
                            backgroundImage: `url(${data.backgroundImgUrl})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
