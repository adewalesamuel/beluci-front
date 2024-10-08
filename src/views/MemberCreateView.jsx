//'use client'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Components } from '../components';
import { Hooks } from '../hooks';

export function MemberCreateView() {
    let abortController = new AbortController();
    const stepList = Object.freeze({
        ENTREPRISE: 'entreprise',
        REPRESENTANT_1: 'representant-1',
        REPRESENTANT_2: 'representant-2',
        COMPTE: 'compte'
    })

    const navigate = useNavigate();

    const useMember = Hooks.useMember();

    const [members, setMembers] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);
    const [step, setStep] = useState(stepList.ENTREPRISE);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useMember.setIsDisabled(true);
        setErrorMessages([]);

        try {
            if (!useMember.hasAcceptedConditions) 
                throw new Error('Vous devez accepter les conditions générales d\'utilisation !');
            
            await useMember.createMember(abortController.signal);

            alert('Félicitation!. Votre compte a bien été créé. Nous allons vous contacter sous peu.');
            navigate('/')
        } catch (error) {
            window.scrollTo({top: 0, behavior: 'smooth'});
            console.log(error.message);
            if ('message' in error) setErrorMessages([error.message]);
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
        } finally {
            useMember.setIsDisabled(false);
        }
    }

    const handleClick = (direction = 1) => {
        const keys = Object.keys(stepList);
        const values = Object.values(stepList);
        const stepIndex = values.findIndex(value => step === value);

        window.scrollTo({top: 0});

        if (direction > -1) {
            if (step === stepList[keys[keys.length - 1]]) return;
            return setStep(stepList[keys[stepIndex + 1]])
        }

        if (step === stepList[keys[0]]) return;

        setStep(stepList[keys[stepIndex - 1]]);
    }

    const handleNextClick = () => {
        handleClick(1);
    }

    const handlePrevClick = () => {
        handleClick(-1);
    }

    return (
        <div className='py-5'>
            <div className='container mt-3'>
                <div className="step-indicators position-relative justify-content-between w-100">
                    <div className="step-line"></div>
                    {Object.keys(stepList).map((key, index) => {
                        return (
                            <div className={`step-indicator ${stepList[key] === step && 'active'}`} key={index}>
                                <span>{index + 1}</span>
                            </div>

                        )
                    })}
                </div>
                <div className='row align-items-stretch'>
                    <div className="col-12 col-md-4 d-md-block d-none bg-primary">
                    </div>
                    <div className="col-12 col-md-8 px-md-4">
                        <Components.ErrorMessages>
                            {errorMessages}
                        </Components.ErrorMessages>
                        <Components.MemberForm useMember={useMember}
                        members={members} setMembers={setMembers} handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick} stepList={stepList} step={step}
                        isDisabled={useMember.isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
