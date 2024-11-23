import { useState } from 'react';
import { Components } from '.';
import logo from '../assets/logo.jpg';
import { Api } from '../services/Api';
import { 
    FaLinkedinIn as LinkedInIcon, 
    FaFacebookF as FacebookIcon} from 'react-icons/fa';

export function Footer() {
    const abortController = new AbortController();

    const [fullname, ] = useState('');
    const [email, setEmail] = useState('');

    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMesseges, setErrorMesseges] = useState([]);

    const handleContactSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setErrorMesseges([]);

        try {
            const payload = {email, message: "Abonnement newsletter", fullname};

            await Api.post('/contact', JSON.stringify(payload), abortController.signal);

            alert('Félicitaion! Votre message a été envoyé.')

            setEmail('');
        } catch (error) {
            if ('message' in error) setErrorMesseges([error.message]);
            if (!('messages' in error)) return;

            const messages = error.messages;
            setErrorMesseges(messages);
        } finally {
            setIsDisabled(false);
        }
    }

    return (
        <footer>
            <div className="bg-white d-flex flex-wrap">
                <div className='col-12 col-md-4 text-md-right'>
                    <img src={logo} alt="logo" className="img-fluid" width={300} height={150} />
                </div>
                <div className='col-12 col-md-8 bg-primary py-5 px-5 d-flex flex-column'>
                    <h5 className='text-white'>
                        Nous sommes ravis de vous informer des nouvelles opportunités de collaboration entre 
                        les entrepreneurs, entreprises et agences publiques de la Côte d&apos;Ivoire et de la Belgique. 
                        Ces initiatives visent à renforcer les liens commerciaux et à offrir des ressources précieuses 
                        pour le développement de vos projets.
                    </h5>
                    <div className="col-12 col-md-6 px-0 mt-4">
                        <Components.ErrorMessages>
                            {errorMesseges}
                        </Components.ErrorMessages>
                        <form onSubmit={handleContactSubmit}>
                            <div className="input-group">
                                <input className="form-control py-4" type='email' name="email" id="email" 
                                value={email} placeholder="" disabled={isDisabled}
                                onChange={e => setEmail(e.target.value)} required/>
                                <button className="input-group-text text-white border-0 px-3" type='submit' 
                                style={{backgroundColor: "#2D6ECC"}}>
                                    {isDisabled ? 'Chargement...' : "S'abonner"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="bg-primary text-white py-2">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-end align-items-center">
                        {/* <small>
                            © {import.meta.env.VITE_APP_NAME} &nbsp;
                            {new Date().getFullYear()} Tous droits réservés
                        </small> */}
                        <div className="d-flex align-items-center">
                            <a target='_blank' href="https://www.linkedin.com/company/77923555/admin/dashboard/">
                                <LinkedInIcon size={20} className="text-white ml-3"/>
                            </a>
                            <a target='_blank' href="https://www.facebook.com/CCBeluci?locale=fr_FR">
                                <FacebookIcon size={20} className="text-white ml-3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}