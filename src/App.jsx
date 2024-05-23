import { BrowserRouter } from "react-router-dom"
import { AiFillPhone as PhoneIcon} from "react-icons/ai";
import { FaLinkedinIn as LinkedInIcon } from 'react-icons/fa';
import { BsEnvelopeFill as EnvelopeIcon } from 'react-icons/bs';
import presidentImg from './assets/images/president.jpg';
import teamImg from './assets/images/team.jpg';
import { Components } from "./components";
import { MockData } from "./MockData";
import { Fragment } from "react";

function App() {
    const SectionMap = {
        homeHero: Components.HomeHeroSection,
        homeEvent: Components.HomeEventSection,
        homePresident: Components.HomePresidentSection
    }

    return (
        <BrowserRouter>
            <Components.Header />
            <main>
                {MockData.page.sectionList.map((sectionData, index) => {
                    const SectionComponent = SectionMap[sectionData.name] ?? null;
                    return (<Fragment key={index}>
                        <SectionComponent data={sectionData} />
                    </Fragment>)
                })}

                
                <section className="container my-2" id="homeTeam">
                    <div className="position-relative my-4">
                        <hr className="border-primary position-absolute w-100 m-0 title-line"/>
                        <h3 className="text-center p-2 position-relative">
                            <span className="bg-white d-inline-block p-2">
                                Présentation du conseil d&apos;administration
                            </span>
                        </h3>    
                    </div>
                    <div className="row flex-wrap align-content-stretch">
                        <div className="col-6 col-md-2 col-lg-3 mb-4">
                            <div className="border border-primary p-3 team-card-item">
                                <h5 className="mb-1">Pierre DECLERCK</h5>
                                <p>Président</p>
                                <div className="mt-2">
                                    <a href="" className="text-decoration-none">
                                        <LinkedInIcon className="rounded p-2 bg-primary 
                                        text-white icon" size={35}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-primary text-white p-4" id="homeTeamPresent">
                    <img src={teamImg} width={1920} height={600} loading="lazy" className="w-100" 
                    style={{objectFit: 'cover'}}/>
                    <div className="position-relative my-4">
                        <hr className="border-white position-absolute w-100 m-0 title-line"/>
                        <h3 className="text-center p-2 position-relative">
                            <span className="bg-primary d-inline-block p-2">
                                Présentation du conseil d&apos;administration
                            </span>
                        </h3>    
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="col-12 col-md-6">
                            <img  src={presidentImg} className='w-100' width={666} height={700} 
                            loading="lazy" style={{objectFit: 'cover'}}/>
                        </div>
                        <div className="col-12 col-md-6 pl-1 pl-lg-5">
                            <ul className="list-unstyled mt-5">
                                <li className="py-2 mb-5">
                                    <h2>Salomé YSEBAERT</h2>
                                    <p>Responsable de l&apos;implémentation du projet PEM N&apos;ZASSA</p>
                                    <a href="mailto:salmome.beluci@gmail.com" 
                                    className="badga badge-pill bg-white text-primary text-decoration-none">
                                        <EnvelopeIcon /> salmome.beluci@gmail.com
                                    </a>
                                </li>
                                <li className="py-2">
                                    <h2>Paulina ADEMOLA</h2>
                                    <p>Assistante administrative</p>
                                    <div className="mb-3">
                                        <a href="mailto:secretariat.beluci@gmail.com" 
                                        className="badga badge-pill bg-white text-primary text-decoration-none">
                                            <EnvelopeIcon/> secretariat.beluci@gmail.com
                                        </a>
                                    </div>
                                    <div className="mb-3">
                                        <a href="†el:+2250707409672" 
                                        className="text-white text-decoration-none">
                                            <PhoneIcon /> (+225) 07 07 40 96 72
                                        </a>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </section>
                <Components.CTASection />
            </main>
            <Components.Footer />
        </BrowserRouter>
    )
}

export default App
