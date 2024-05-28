import { Link } from "react-router-dom";
import { AiFillPhone as PhoneIcon} from "react-icons/ai";
import { BsEnvelopeFill as EnvelopeIcon } from 'react-icons/bs';
import { Components } from ".";
import { MockData } from "../MockData";

export function Header(){
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
                        className="text-white"> +225 27 22  43 34 00</a>
                    </small>
                    <small className="ml-4 d-inline-blockc">
                        <EnvelopeIcon className="text-white" /> 
                        <span className="d-none d-md-inline"> Mail :</span> 
                    </small> 
                    <small>
                        <a href="mailto:info@beluci.com" className="text-white">
                            info@beluci.com
                        </a>
                    </small>
                    </div>
                    <small className="d-none d-md-inline">
                        <Link to={'/contact'} className="text-white">Contact</Link>
                    </small>
                </div>
            </div>

            <Components.MainMenu data={MockData.menuItems} />
        </header>
    )
}