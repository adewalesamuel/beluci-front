//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';

export function EventListSection({data}) {
    let abortController = new AbortController();

    const { EventService } = Services;
    
    const [searchParams] = useSearchParams();

    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {events} = await EventService.getAll(
                {page: page}, abortController.signal);

            setEvents(events.data);
            setPageLength(events.last_page);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init]);

    useEffect(() => {
        if (!searchParams.get('page')) return;

        setPage(searchParams.get('page'));
    }, [searchParams.get('page')]);

    return (
        <section className="bg-light py-2" id={data.id}>
            <div className="container py-3">
                <Components.Loader isLoading={isLoading}>
                    <div className='row'>
                        <div className="col-12 col-md-9">
                            {events.map((event, index) => {
                                return (
                                    <div className="mb-4" key={index}>
                                        <Components.EventItem event={event}/>
                                    </div>
                                )
                            })}
                            <Components.Pagination pageLength={pageLength} page={parseInt(page)} />
                        </div>
                        <div className='d-none d-md-block col-md-3'>
                            <div className='bg-primary jumbotron rounded-0 px-0'>
                                <div className="jumbotron rounded-0 px-0 text-center bg-transparent">
                                    <h5 className='text-white text-uppercase'>
                                        ÊTES-VOUS PRÊT À PROFITER DE NOS SERVICES ?
                                    </h5>
                                    <Link to="/devenir-membre" className='btn btn-sm bg-white text-primary 
                                    fw-bold mt-3 rounded-pill'>
                                        Devenir membre
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Components.Loader>
            </div>
        </section>
    )
}
