import { useState } from "react";
import { Components } from ".";
import mapImg from '../assets/images/map.png';
import { Api } from "../services/Api";
import { AiFillPhone as PhoneIcon} from "react-icons/ai";
import { BsEnvelopeFill as EnvelopeIcon, BsMapFill as MapIcon } from 'react-icons/bs';

export function ContactAboutSection({data}) {
    const abortController = new AbortController();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMesseges, setErrorMesseges] = useState([]);

    const handleContactSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setErrorMesseges([]);

        try {
            const payload = {email, message, fullname};

            await Api.post('/contact', JSON.stringify(payload), abortController.signal);

            alert('Félicitaion! Votre message a été envoyé.')

            setEmail('');
            setMessage('');
            setFullname('');
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
        <section className="py-2" id={data.id}>
            <div className="container py-3">
                <div className="py-2">
                    <h1 className="mb-3 text-uppercase" style={{fontWeight: '200'}}>
                        {data.title}
                    </h1>
                    <p className="mt-2">{data.description}</p>
                </div>
                <ul className="d-flex align-item-stretch m-0 p-0 list-unstyled flex-wrap">
                    <li className="col p-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <PhoneIcon size={30} className="text-primary mb-3" />
                                <h4>Téléphone</h4>
                                <div>Fixe : +225 27 33 43 34 00</div>
                                <div>Mobile :  +225 07 07 40 96 72 </div>
                            </div>
                        </div>
                    </li>
                    <li className="col p-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <EnvelopeIcon size={30} className="text-primary mb-3" />
                                <h4>Email</h4>
                                <div>
                                    <a href='mailto:info.beluci@gmail.com'>
                                        info.beluci@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <a href='mailto:secretariat@beluci.ci'>
                                        secretariat@beluci.ci
                                    </a>
                                </div>
                                <div>
                                    <a href='mailto:info@beluci.ci'>
                                        info@beluci.ci
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col p-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <MapIcon size={30} className="text-primary mb-3" />
                                <h4>Addresse</h4>
                                <div>Riviera Anono, Riviera 2, Abidjan</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='row mt-5 align-items-stretch mb-5'>
                    <div className="col-12 col-md-6 mt-3">
                        <img src={mapImg} className="img-fluid h-100" style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <Components.ErrorMessages>
                            {errorMesseges}
                        </Components.ErrorMessages>
                        <form onSubmit={handleContactSubmit} className="shadow p-4">
                            <h2>Parler à un conseiller</h2>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor='fullname'>Nom</label>
                                        <input className="form-control" type='text' name="fullname" id="fullname" 
                                        value={fullname} placeholder="Nom" disabled={isDisabled}
                                        onChange={e => setFullname(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor='email'>Email</label>
                                        <input className="form-control" type='email' name="email" id="email" 
                                        value={email} placeholder="Email" disabled={isDisabled}
                                        onChange={e => setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor='email'>Téléphone</label>
                                        <input className="form-control" type='tel' placeholder="Téléphone"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor='message'>Votre message</label>
                                        <textarea className="form-control" name="message" id="message" 
                                        value={message} placeholder="Message" disabled={isDisabled}
                                        onChange={e => setMessage(e.target.value)} rows={7}></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button type='submit' className='btn btn-primary btn-lg btn-block w-100'>
                                            {isDisabled ? "Chargement..." : "Envoyer"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}