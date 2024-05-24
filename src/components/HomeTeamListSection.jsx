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
               {data.teamMemberList.map((teamMember, index) => {
                return (
                    <div className="col-6 col-md-2 col-lg-3 mb-4" key={index}>
                        <div className="border border-primary p-3 team-card-item">
                            <h5 className="mb-1">{teamMember.name}</h5>
                            <p>{teamMember.job}</p>
                            <div className="mt-2">
                                <a href={teamMember.linkedinUrl} className="text-decoration-none">
                                    <LinkedInIcon className="rounded p-2 bg-primary 
                                    text-white icon" size={35}/>
                                </a>
                            </div>
                        </div>
                    </div>
                )
               })} 
            </div>
        </section>
    )
}