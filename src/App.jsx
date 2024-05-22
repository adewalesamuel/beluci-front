import { BrowserRouter, Link } from "react-router-dom"
import { 
    AiFillHome as HomeIcon,
    AiFillPhone as PhoneIcon, 
    AiOutlineUsergroupAdd as UserGroupIcon } from "react-icons/ai";
import { BsEnvelopeFill as EnvelopeIcon } from 'react-icons/bs';
import logo from './assets/logo.jpg';
import heroBg from './assets/images/hero-bg.jpg';

function App() {

  return (
    <BrowserRouter>
        <main>
            <header>
                <div id="topHeader" className="bg-primary text-white py-3">
                    <div className="container d-flex justify-content-between">
                        <div className="d-flex">
                        <small><PhoneIcon className="text-white"/> Appelez-nous : </small>
                        <small>
                            <a href="tel: +225 27 22  43 34 00" 
                            className="text-white"> +225 27 22  43 34 00</a>
                        </small>
                        <small className="ml-4 d-inline-blockc">
                            <EnvelopeIcon className="text-white" /> Mail : 
                        </small> 
                        <small>
                            <a href="mailto:info@beluci.com" className="text-white">
                                info@beluci.com
                            </a>
                        </small>
                        </div>
                        <small>
                            <Link to={'/contact'} className="text-white">Contact</Link>
                        </small>
                    </div>
                </div>

                <div id="mainMenu">
                    <div className="container py-0 d-flex align-items-center 
                    justify-content-between">
                        <div className="">
                            <Link to={'/'}>
                                <img src={logo} alt="logo" className="img-fluid" 
                                width={100} height={50} />
                            </Link>
                        </div>
                        <nav className="d-flex align-items-center">
                            <Link to={'/'} className="py-1 px-2 border border-primary 
                            rounded-pill mr-3"> 
                                <HomeIcon className="text-primary"/>
                            </Link>

                            <Link to={'/'} className="text-uppercase text-decoration-none 
                            text-primary py-5 px-2 position-relative nav-item">
                                <div className="position-absolute w-100 bg-primary" 
                                style={{
                                    bottom: 0,
                                    left:0,
                                    height: 0,
                                    zIndex: -1,
                                    transition: 'height 300ms 100ms ease'
                                }}></div>
                                Services
                            </Link>

                            <Link to={'/'} className="text-uppercase text-decoration-none 
                            text-primary py-5 px-2 position-relative nav-item">
                                <div className="position-absolute w-100 bg-primary" 
                                style={{
                                    bottom: 0,
                                    left:0,
                                    height: 0,
                                    zIndex: -1,
                                    transition: 'height 300ms 100ms ease'
                                }}></div>
                                Nos évènements
                            </Link>

                            <Link to={'/'} className="text-uppercase text-decoration-none 
                            text-primary py-5 px-2 position-relative nav-item">
                                <div className="position-absolute w-100 bg-primary" 
                                style={{
                                    bottom: 0,
                                    left:0,
                                    height: 0,
                                    zIndex: -1,
                                    transition: 'height 300ms 100ms ease'
                                }}></div>
                                Pem N&apos;zassa
                            </Link>

                            <Link to={'/'} className="text-uppercase text-decoration-none 
                            text-primary py-5 px-2 position-relative nav-item">
                                <div className="position-absolute w-100 bg-primary" 
                                style={{
                                    bottom: 0,
                                    left:0,
                                    height: 0,
                                    zIndex: -1,
                                    transition: 'height 300ms 100ms ease'
                                }}></div>
                                Nous contacter
                            </Link>
                            <Link className="btn rounded-pill text-primary border 
                            btn-outilne-primary border-primary text-uppercase px-4 ml-4">
                            Adhérez à beluci
                        </Link>
                        </nav>
                        <Link to={'/'} className="btn btn-link text-primary text-decoration-none">
                            <UserGroupIcon className="text-primary" size={25}/> Membres
                        </Link>
                    </div>
                </div>
            </header>
            <section id="homeHero" className="d-flex flex-column">
                <div className="w-100">
                    <img src={heroBg} className="w-100 bg-primary" width={1920} 
                    height={834} loading="lazy" style={{
                        objectFit: 'cover',
                        maxHeight: '600px'
                    }}/> 
                </div>
                <div className="w-100 mb-5">
                    <div className="mx-auto px-2" id="heroContent" style={{maxWidth: '1000px'}}>
                        <div className="card">
                            <div className="card-title pt-3">
                                <h1 className="font-weight-lighter text-uppercase text-center px-2 px-md-5">
                                    Chambre de commerce belge et luxembougeoise de côte d&apos;ivoire
                                </h1>
                            </div>
                            <div className="card-body">
                                <p className="px-3" style={{
                                    whiteSpace: 'pre-wrap', 
                                    overflowWrap: 'break-word'
                                }}>
                                    La BELUCI a pour mission, entre autres, d’accompagner les sociétés 
                                    belgo-luxembourgeoises souhaitant s’implanter en Côte d’Ivoire, d’apporter 
                                    un appui aux entreprises belges installées localement, de soutenir les 
                                    sociétés ivoiriennes souhaitant entrer en contact et travailler avec des 
                                    entreprises belgo-luxembourgeoises, de représenter ses adhérents auprès des 
                                    autorités ivoiriennes mais également de défendre leurs intérêts et de créer 
                                    des rendez-vous de networking pour faciliter les contacts et ce dans une 
                                    ambiance agréable. Adhérer à la BELUCI c’est ainsi vous donner la possibilité 
                                    d’améliorer la compétitivité de votre entreprise, développer de 
                                    nouvelles opportunités d&apos;affaires et étendre votre réseau.
                                </p>
                                <div className="px-3">
                                    <button className="btn bg-primary text-white rounded-pill px-4 mt-3">
                                        Lire la suite
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="container my-2" id="homeEvents">
                <div className="position-relative">
                    <hr className="border-primary position-absolute w-100 m-0 title-line"/>
                    <h3 className="text-center p-2">
                        <span className="bg-white d-inline-block p-2">Nos évènements</span>
                    </h3>    
                </div>
            </section>
            <section className="mt-5">

            </section>
        </main>
    </BrowserRouter>
  )
}

export default App
