export function TitleHeader({data}) {
    return (
        <section id={data.name} className='py-6' style={{
            backgroundImage: `url(${data.backgroundImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container text-center text-white">
                <h1 className="font-weight-bolder">{data.title}</h1>
            </div>
        </section>
    )
}