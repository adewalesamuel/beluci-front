import logo from '../assets/logo.jpg';
import { 
    FaLinkedinIn as LinkedInIcon, 
    FaFacebookF as FacebookIcon,
    FaInstagram as InstagramIcon } from 'react-icons/fa';

export function Footer() {
    return (
        <footer>
            <div className="container bg-white py-3">
                <img src={logo} alt="logo" className="img-fluid" width={300} height={150} />
            </div>
            <div className="bg-primary text-white py-2">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <small>
                            © {import.meta.env.VITE_APP_NAME} &nbsp;
                            {new Date().getFullYear()} Tous droits réservés
                        </small>
                        <small className="d-flex align-items-center">
                            <a href=""><LinkedInIcon className="text-white ml-3"/></a>
                            <a href=""><InstagramIcon className="text-white ml-3"/></a>
                            <a href=""><FacebookIcon className="text-white ml-3"/></a>
                        </small>
                    </div>
                </div>
            </div>

        </footer>
    )
}