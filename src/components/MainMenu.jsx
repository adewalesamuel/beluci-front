import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import { 
    AiFillHome as HomeIcon,
    AiOutlineUsergroupAdd as UserGroupIcon } from "react-icons/ai";

export function MainMenu({data}) {
    return (
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
                    {data.map(((menuItem, index) => {
                        if (menuItem.slug === 'accueil') {
                            return (
                                <Link key={index} to={'/'} className="py-1 px-2 border 
                                border-primary rounded-pill mr-3"> 
                                    <HomeIcon className="text-primary"/>
                                </Link>
                            )
                        } else {
                            if (menuItem.type === 'button') {
                                return (
                                    <Link key={index} className="btn rounded-pill 
                                    text-primary border btn-outilne-primary border-primary 
                                    text-uppercase px-4 ml-4">
                                        Adhérez à beluci
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link to={`/${menuItem.slug}`} key={index} className="text-uppercase 
                                    text-decoration-none text-primary py-5 px-2 
                                    position-relative nav-item">
                                        <div className="position-absolute w-100 bg-primary" 
                                        style={{
                                            bottom: 0,
                                            left:0,
                                            height: 0,
                                            zIndex: -1,
                                            transition: 'height 300ms 100ms ease'
                                        }}></div>
                                        {menuItem.name}
                                    </Link>
                                )
                            }
                        }
                    }))}
                    
                </nav>
                <Link to={'/membres'} className="btn btn-link text-primary text-decoration-none">
                    <UserGroupIcon className="text-primary" size={25}/> Membres
                </Link>
            </div>
        </div>
    )
}