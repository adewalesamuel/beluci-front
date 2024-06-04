import { useState } from "react";
import { Components } from ".";

export function HomeHeroSection({data}) {
    const [isOpen, setIsOpen] = useState(false);

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
                            <p className="px-3" style={{whiteSpace: 'pre-wrap'}}>
                                {!isOpen ? data.description.substr(0,711) : data.description}
                            </p>
                            <div className="px-3">
                                <button className="btn bg-primary text-white rounded-pill px-4 mt-3 scale"
                                onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? 'Masquer' : data.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}