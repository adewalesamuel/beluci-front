import ScrollAnimation from 'react-animate-on-scroll';
import { FaLinkedinIn as LinkedInIcon } from 'react-icons/fa';

export function HomeTeamListSection({data}) {
    return (
        <section className="container my-2" id={data.name}>
            <div className="position-relative my-4">
                <hr className="border-primary position-absolute w-100 m-0 title-line"/>
                <h3 className="text-center p-2 position-relative">
                    <span className="bg-white d-inline-block p-2">
                        {data.title}
                    </span>
                </h3>    
            </div>
            <div className="row flex-wrap align-content-stretch">
               {data.team_item_list.map((teamMember, index) => {
                return (
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <ScrollAnimation animateIn='fadeInUp' delay={100 * (index + 1)} 
                        animateOnce={true} key={index} className='h-100'>
                            <div className="border border-primary p-3 team-card-item h-100">
                                <h6 className="mb-1">{teamMember.name}</h6>
                                <p>{teamMember.job}</p>
                                {teamMember.linkedinLink && 
                                    <div className="mt-2">
                                        <a href={teamMember.linkedinLink} 
                                        className="text-decoration-none" target="_blank">
                                            <LinkedInIcon className="rounded p-2 bg-primary 
                                            text-white icon" size={35}/>
                                        </a>
                                    </div>
                                }
                                <hr className='m-0 p-0 border-primary'/>
                            </div>
                        </ScrollAnimation>
                    </div>
                )
               })} 
            </div>
        </section>
    )
}