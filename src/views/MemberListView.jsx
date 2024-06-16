//'use client'
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../assets/images/placeholder.jpg';

export function MemberListView() {
    let abortController = new AbortController();

    const { MemberService } = Services;
    
    const [searchParams] = useSearchParams();

    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageContent, setPageContent] = useState({});
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const response = await Services.PageService.getBySlug(
                '/membres', abortController.signal);
            setPageContent(response.page);

            const {members} = await MemberService.getAll(
                {page: page}, abortController.signal);

            setMembers(members.data);
            setPageLength(members.last_page);
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
        <>
            {pageContent.section_list && 
                <>
                    <Components.TitleHeader data={pageContent?.section_list[0] ?? {}}/>
                    <Components.EventAboutSection data={pageContent?.section_list[1] ?? {}}/>
                </>
            }
            <section className='p-4 bg-light'>
                <div className='container my-3'>
                    <Components.Loader isLoading={isLoading}>
                        <ul className='mt-4 list-unstyled row align-items-stretch'>
                            {members.map((member, index) => {
                                return (
                                    <li key={index} className='col-12 col-md-6 p-3'>
                                        <div className='card d-flex- flex-row flex-wrap align-items-start h-100'>
                                            <div className='col-4 px-0'>
                                                <img src={member.logo_url} className='img-fluid' 
                                                onError={e => e.currentTarget.src=placeholderImg}/>
                                            </div>
                                            <div className='card-body col-8'>
                                                <h5>{member.company_name}</h5>
                                                <div className='d-flex flex-column'>
                                                    <span className='text-muted'>{member.sector}</span>
                                                    <address className='mb-0'>{member.address}</address>
                                                    <span className='text-primary'>{member.phone_number}</span>
                                                    <span className='text-primary badge badge-pill badge-warning mt-2'>{member.website_url}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <Components.Pagination pageLength={pageLength} page={parseInt(page)} />
                    </Components.Loader>
                </div>
            </section>
        </>
    )
}
