import { useState } from "react";
import { Services } from "../services";
import { Utils } from "../utils";
import { useNavigate } from "react-router-dom";
import { Components } from "../components";

export function LoginView() {
    const abortController = new AbortController();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const handleLoginSubmit = async e => {
        e.preventDefault();
        setErrorMessages([]);
        setIsLoading(true);

        try  {
            const payload  = {email, password};
            const {user, token} = await Services.AuthService.login(
                JSON.stringify(payload), abortController.signal);

            Utils.Auth.setUser(user);
            Utils.Auth.setSessionToken(token);

            navigate('/membres');
        }catch(error) {
            if ('message' in error) setErrorMessages([error.message]);
            if (!('messages' in error)) return;

            const messages = await error.messages;
            setErrorMessages([messages]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center py-5 px-2">
            <div className="card col-12 col-md-7 col-lg-5">
                <div className="card-body">
                    <h2>Connexion</h2>
                    <p>Connectez vous à votre espace membre</p>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>

                    <form className="mt-3" onSubmit={handleLoginSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control" type="email" name="email" id="email" 
                                    placeholder="Email" value={email} disabled={isLoading}
                                    onChange={e => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input className="form-control" type="password" name="password" id="password" 
                                    placeholder="Mot de passe" value={password} disabled={isLoading}
                                    onChange={e => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <button type='submit' disabled={isLoading} 
                                className="btn btn-primary btn-block">
                                    {isLoading ? 'Chargement...' : 'Se connecter'}
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}