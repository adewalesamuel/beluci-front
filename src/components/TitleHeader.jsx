import { Components } from ".";

export function TitleHeader({data}) {
    return (
        <section id={data.name} className='py-6 position-relative' style={{
            backgroundImage: `url(${data.backgroundImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Components.ImageOverlay />
            <div className="container text-center text-white position-relative">
                <h1 className="font-weight-bolder">{data.title}</h1>
            </div>
        </section>
    )
}