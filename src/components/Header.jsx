import { Link, useLocation} from "react-router-dom";
import { AiFillPhone as PhoneIcon} from "react-icons/ai";
import { Components } from ".";
import { useEffect } from "react";

export function Header(){
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [pathname])
    return (
        <header>
            <div id="topHeader" className="bg-primary 
            text-white py-3">
                <div className="container d-flex justify-content-between">
                    <div className="d-flex">
                        <small>
                            <PhoneIcon className="text-white"/> 
                            <span className="d-none d-md-inline">Appelez-nous :</span> 
                        </small>
                        <small>
                            <a href="tel: +225 27 22  43 34 00" 
                            className="text-white me-2"> +225 27 22  43 34 00</a> |
                            <a href="tel: +225 07 07 40 96 72" 
                            className="text-white"> +225 07 07 40 96 72</a>
                        </small>
                    </div>
                    <small className="d-none d-md-inline">
                        <Link to={'/contact'} className="text-white">Contact</Link>
                    </small>
                </div>
            </div>

            <Components.MainMenu />
        </header>
    )
}