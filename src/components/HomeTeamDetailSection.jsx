import ScrollAnimation from "react-animate-on-scroll";
import { AiFillPhone as PhoneIcon} from "react-icons/ai";
import { BsEnvelopeFill as EnvelopeIcon } from 'react-icons/bs';

export function HomeTeamDetailSection({data}) {
    return (
        <section className="bg-primary text-white p-4" id={data.name}>
            {data.landscapeImgUrl && 
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <img src={data.landscapeImgUrl} width={1920} height={600} 
                    loading="lazy" className="w-100" 
                    style={{objectFit: 'cover', objectPosition: 'top'}}/>
                </ScrollAnimation>
            }
            <div className="position-relative my-4">
                <hr className="border-white position-absolute w-100 m-0 title-line"/>
                <h3 className="text-center p-2 position-relative">
                    <span className="bg-primary d-inline-block p-2">
                        {data.title}
                    </span>
                </h3>    
            </div>
            <div className="d-flex flex-wrap">
                <div className="col-12 col-md-6">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <img  src={data.portraitImgUrl} className='w-100' width={666} height={700} 
                        loading="lazy" style={{objectFit: 'cover', objectPosition: 'top'}}/>
                    </ScrollAnimation>
                </div>
                <div className="col-12 col-md-6 pl-1 pl-lg-5">
                    <ul className="list-unstyled mt-5">
                        {data.team_detail_item_list.map((teamMember, index) => {
                            return (
                                <li className="py-2 mb-2 mb-md-5" key={index}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}
                                    delay={100 * (index + 1)}>
                                        <h2>{teamMember.name}</h2>
                                        <p>{teamMember.job}</p>
                                        {teamMember.email && 
                                            <div className="mb-3">
                                                <a href={`mailto:${teamMember.email}`} 
                                                className="badga badge-pill bg-white text-primary 
                                                text-decoration-none">
                                                    <EnvelopeIcon /> {teamMember.email}
                                                </a>
                                            </div>
                                        }
                                        {teamMember.phoneNumber && 
                                            <div className="mb-3">
                                                <a href={`tel:${teamMember.phoneNumber}`} 
                                                className="text-white text-decoration-none">
                                                    <PhoneIcon /> {teamMember.phoneNumber}
                                                </a>
                                            </div>
                                        }
                                    </ScrollAnimation>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}