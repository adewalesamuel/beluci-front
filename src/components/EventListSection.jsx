//'use client'
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
                        {events.map((event, index) => {
                            return (
                                <div className='col-12 col-md-6 p-4' key={index}>
                                    <Components.EventItem event={event}/>
                                </div>
                            )
                        })}
                    </div>

                    <Components.Pagination pageLength={pageLength} page={parseInt(page)} />
                </Components.Loader>
            </div>
        </section>
    )
}