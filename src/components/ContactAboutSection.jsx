import { useState } from "react";
import { Components } from ".";
import mapImg from '../assets/images/map.png';
import { Api } from "../services/Api";

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

            await Api.post('/contact', 
                JSON.stringify(payload), abortController.signal)
            .then(response => response.json());

            alert('Félicitaion! Votre message a été envoyé.')
        } catch (error) {
            if ('message' in error) setErrorMesseges([message]);
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
                <div className='row mt-5 align-items-center'>
                    <div className="col-12 col-md-6 mt-3">
                        <img src={mapImg} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <Components.ErrorMessages>
                            {errorMesseges}
                        </Components.ErrorMessages>
                        <form onSubmit={handleContactSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor='fullname'>Nom et Prénom(s)</label>
                                        <input className="form-control" type='text' name="fullname" id="fullname" 
                                        value={fullname} placeholder="Nom et Prénom(s)" disabled={isDisabled}
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
                                        <label htmlFor='message'>Votre message</label>
                                        <textarea className="form-control" name="message" id="message" 
                                        value={message} placeholder="Message" disabled={isDisabled}
                                        onChange={e => setMessage(e.target.value)} rows={7}></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button type='submit' className='btn btn-primary btn-lg btn-blocc w-100'>
                                            {isDisabled ? "Chargement..." : "Envoyer le message"}
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