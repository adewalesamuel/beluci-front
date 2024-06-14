//'use client'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Components } from '../components';
import { Hooks } from '../hooks';
import logoDark from '../assets/logo-dark.png';
import { Utils } from '../utils';

export function MemberCreateView() {
    let abortController = new AbortController();

    const navigate = useNavigate();

    const useMember = Hooks.useMember();

    const [members, setMembers] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useMember.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            const {user, token} = await useMember.createMember(abortController.signal);

            Utils.Auth.setUser(user);
            Utils.Auth.setSessionToken(token);

            alert('Félicitation!. Vore compte à bien été crée.');
            navigate('/members')
        } catch (error) {
            if ('message' in error) setErrorMessages([error.message]);
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
        } finally {
            useMember.setIsDisabled(false);
        }
    }

    return (
        <div className='bg-primary text-white py-5'>
            <div className='container mt-3'>
                <div className='text-center mb-4'>
                    <img src={logoDark} className='img-fluid my-4' width={230}/>
                    <h2>Formulaire d&apos;adhésion BELUCI</h2>
                    <p>
                        Demande d&apos;adhésion à la Chambre de Commerce 
                        belgo-luxembourgeoise de Côte d&apos;Ivoire
                    </p>
                </div>
                <div className="mx-auto" style={{maxWidth: '800px'}}>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.MemberForm useMember={useMember}
                    members={members} setMembers={setMembers}
                    isDisabled={useMember.isDisabled} handleFormSubmit={handleFormSubmit}/>
                </div>
            </div>
        </div>
    )
}
