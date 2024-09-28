import { Components } from ".";

export function HomeHeroSection({data}) {
    return (
        <section id={data.name} className="d-flex flex-column">
            <div className="w-100 position-relative">
                <img src={data.backgroundImgUrl} className="w-100 bg-primary" 
                width={1920} height={834} loading="lazy" style={{
                    objectFit: 'cover',
                    maxHeight: '600px'
                }}/> 
                <Components.ImageOverlay />
            </div>
            <div className="w-100 mb-2">
                <div className="mx-auto px-2" id="heroContent" style={{maxWidth: '1000px'}}>
                    <div className="card">
                        <div className="card-title pt-3">
                            <h1 className="text-uppercase text-center px-2 
                            px-md-5 text-primary" style={{fontWeight: '200'}}>
                                {data.title}
                            </h1>
                        </div>
                        <div className="card-body">
                            <p className="px-3 text-justify" style={{whiteSpace: 'pre-wrap'}}>
                                {data.description}
                            </p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}