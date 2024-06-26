import { useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import FsLightbox from "fslightbox-react";

export function GalleryTypeListSection() {
    let abortController = new AbortController();

    const { GalleryTypeService } = Services;

    const [gallery_types, setGallery_types] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toggler, setToggler] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleGalleryTypeClick = async galleryType => {
        if (isDisabled) return;

        setIsDisabled(true);

        try {
            const {galleries} = await Services.GalleryTypeService.getGallerysById(
                galleryType.id, {page:''}, abortController.signal);

            setGalleries(galleries);
            setToggler(!toggler);
        } catch (error) {
            console.log(error);
        } finally {
            setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        try {
            const {gallery_types} = await GalleryTypeService.getAll(
                {page: ''}, abortController.signal);

            setGallery_types(gallery_types);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init]); 

    return (
        <section className="bg-primary text-white mt-4 py-5">
            <div className='container'>
                <div className="position-relative my-4">
                    <hr className="border-white position-absolute w-100 m-0 title-line"/>
                    <h3 className="text-center p-2 position-relative">
                        <span className="bg-primary d-inline-block p-2">
                            Gallery photo
                        </span>
                    </h3>    
                </div>
                <Components.Loader isLoading={isLoading}>
                    <ul className='list-unstyled d-flex align-items-stretch flex-wrap'>
                        {gallery_types.map((gallery_type, index) => {
                            return (
                                <li className="p-2 col-12 col-md-6 col-xl-4" key={index}>
                                    <div className='card shadow-md'>
                                        <div className="card-body" role="button" 
                                        onClick={() => handleGalleryTypeClick(gallery_type)}>
                                            <img src={gallery_type.display_img_url ?? ''} 
                                            className='img-fluid' alt={gallery_type.name}
                                            loading="lazy"/> 
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </Components.Loader>
            </div>
            <FsLightbox
				toggler={toggler}
				sources={galleries.map(g => g.img_url)}
			/>
        </section>
    )
}
