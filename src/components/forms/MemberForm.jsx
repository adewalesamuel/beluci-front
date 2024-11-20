//'use client'
import { useState } from 'react';
import { Components } from '..';
import { Utils } from '../../utils';
import { PhoneNumberField } from './PhoneNumberField';

export function MemberForm(props) {
    const {__} = Utils.String;

    const [isOtherSource, setIsOtherSource] = useState(false);

    const handleMemberSourceChange = e => {
        e.preventDefault();

        if (e.target.value === 'Autres') {
            setIsOtherSource(true);
        } else {
            setIsOtherSource(false);
            props.useMember.setMember_source(e.target.value);
        }

    }

    return (
        <form onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                {props.step === props.stepList.ENTREPRISE &&
                    <>
                        <div className="col-12">
                            <h3 className='text-uppercase'>Information de l&apos;entreprise</h3>
                            <div className='form-group'>
                                <p className='text-danger'>* Indique une question obligatoire</p>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='logo_url'>{__('logo_url')}</label>
                                <Components.ImageInput img_url={props.useMember.logo_url ?? ''}
                                handleImageChange={props.useMember.setLogo_url}/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='company_name'>{__('company_name')} 
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='company_name' name='company_name' 
                                placeholder={__('company_name')} value={props.useMember.company_name ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setCompany_name(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='country_name'>{__('country_name')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='country_name' name='country_name' 
                                placeholder={__('country_name')} value={props.useMember.country_name ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setCountry_name(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='head_office'>{__('head_office')}</label>
                                <input className='form-control' type='text' id='head_office' name='head_office' 
                                placeholder={__('head_office')} value={props.useMember.head_office ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setHead_office(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='website_url'>{__('website_url')}</label>
                                <input className='form-control' type='text' id='website_url' name='website_url' 
                                placeholder={__('website_url')} value={props.useMember.website_url ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setWebsite_url(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='creation_date'>{__('creation_date')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='date' id='creation_date' name='creation_date' 
                                placeholder={__('creation_date')} value={props.useMember.creation_date ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setCreation_date(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='employee_number'>{__('employee_number')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='number' id='employee_number' name='employee_number' 
                                placeholder={__('employee_number')} value={props.useMember.employee_number ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setEmployee_number(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='legal_status'>{__('legal_status')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='legal_status' name='legal_status' 
                                placeholder={__('legal_status')} value={props.useMember.legal_status ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setLegal_status(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='share_capital'>{__('share_capital')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder={__('share_capital')} 
                                    aria-label={__('share_capital')} aria-describedby="share_capital" 
                                    id='share_capital' name='share_capital' value={props.useMember.share_capital ?? ''}
                                    disabled={props.isDisabled}  onChange={ e => 
                                    props.useMember.setShare_capital(e.target.value) ?? null}/>
                                    <select className="input-group-text" id="share_capital">
                                        <option value='FCFA'>FCFA</option>
                                        <option value='EUR'>EUR</option>
                                        <option value='USD'>USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sector'>{__('sector')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='sector' name='sector' 
                                placeholder={__('sector')} value={props.useMember.sector ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setSector(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='parent_company'>{__('parent_company')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='parent_company' name='parent_company' 
                                placeholder={__('parent_company')} value={props.useMember.parent_company ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setParent_company(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='other_details'>{__('other_details')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <textarea className='form-control' type='text' id='other_details' 
                                name='other_details' placeholder={__('other_details')} 
                                value={props.useMember.other_details ?? ''}disabled={props.isDisabled} 
                                onChange={ e => 
                                    props.useMember.setOther_details(e.target.value) ?? null}></textarea>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='company_category'>{__('company_category')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <select className='select2 form-control' id='company_category' name='company_category' 
                                value={props.useMember.company_category ?? ''} disabled={props.isDisabled} 
                                onChange={ e => props.useMember.setCompany_category(e.target.value) ?? null}>
                                    <option hidden>Choisissez une option</option>
                                    <option value='Société non-résidente en CI'>Société non-résidente en CI</option>
                                    <option value='Société de moins de 1 Md CFA de CA'>Société de moins de 1 Md CFA de CA</option>
                                    <option value='Société de plus de 1 Md CFA de CA'>Société de plus de 1 Md CFA de CA</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='commercial_register_url'>{__('commercial_register_url')}</label>
                                <Components.FileInput img_url={props.useMember.commercial_register_url ?? ''}
                                handleFileChange={props.useMember.setCommercial_register_url}/>
                            </div>
                        </div>
                    </>
                }
                {props.step === props.stepList.REPRESENTANT_1 &&
                    <>
                        <div className="col-12">
                            <h3 className='text-uppercase'>Information du représentant</h3>
                            <div className='form-group'>
                                <p className='text-danger'>* Indique une question obligatoire</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='representative_fullname'>{__('representative_fullname')}
                                    <span className='text-danger'>*</span> 
                                </label>
                                <input className='form-control' type='text' id='representative_fullname' name='representative_fullname' 
                                placeholder={__('representative_fullname')} value={props.useMember.representative_fullname ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setRepresentative_fullname(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='position'>{__('position')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='position' name='position' 
                                placeholder={__('position')} value={props.useMember.position ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setPosition(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='nationality'>{__('nationality')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='nationality' name='nationality' 
                                placeholder={__('nationality')} value={props.useMember.nationality ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setNationality(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='email'>{__('email')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='email' name='email' 
                                placeholder={__('email')} value={props.useMember.email ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setEmail(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='phone_number'>{__('phone_number')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <PhoneNumberField name='phone_number' 
                                placeholder={__('phone_number')} disabled={props.isDisabled}
                                value={props.useMember.phone_number ?? ''}
                                handleChange={props.useMember.setPhone_number}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='cover_letter_url'>{__('cover_letter_url')}</label>
                                <Components.FileInput img_url={props.useMember.cover_letter_url ?? ''}
                                handleFileChange={props.useMember.setCover_letter_url}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='photo_url'>{__('photo_url')}</label>
                                <Components.ImageInput img_url={props.useMember.photo_url ?? ''}
                                handleImageChange={props.useMember.setPhoto_url}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group mb-2'>
                                <label htmlFor='idcard_url'>{__('idcard_url')}</label>
                                <Components.ImageInput img_url={props.useMember.idcard_url ?? ''}
                                handleImageChange={props.useMember.setIdcard_url}/>
                            </div>
                        </div>
                    </>
                }
                {props.step === props.stepList.REPRESENTANT_2 && 
                    <>
                         <div className="col-12">
                            <h3 className='text-uppercase'>Information du représentant</h3>
                            <div className='form-group'>
                                <p className='text-danger'>* Indique une question obligatoire</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sales_representative_fullname'>{__('sales_representative_fullname')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='sales_representative_fullname' name='sales_representative_fullname' 
                                placeholder={__('sales_representative_fullname')} value={props.useMember.sales_representative_fullname ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setSales_representative_fullname(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sales_representative_position'>{__('sales_representative_position')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='sales_representative_position' 
                                name='sales_representative_position' placeholder={__('sales_representative_position')} 
                                value={props.useMember.sales_representative_position ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setSales_representative_position(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sales_representative_email'>{__('sales_representative_email')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='sales_representative_email' 
                                name='sales_representative_email' placeholder={__('sales_representative_email')} 
                                value={props.useMember.sales_representative_email ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setSales_representative_email(e.target.value) ?? null}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sales_representative_phone_number'>{__('sales_representative_phone_number')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <PhoneNumberField name='sales_representative_phone_number' 
                                placeholder={__('sales_representative_phone_number')} disabled={props.isDisabled}
                                value={props.useMember.sales_representative_phone_number ?? ''}
                                handleChange={props.useMember.setSales_representative_phone_number}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='sales_representative_nationality'>{__('sales_representative_nationality')}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control' type='text' id='sales_representative_nationality' 
                                name='sales_representative_nationality' placeholder={__('sales_representative_nationality')} 
                                value={props.useMember.sales_representative_nationality ?? ''}
                                disabled={props.isDisabled} onChange={ e => 
                                    props.useMember.setSales_representative_nationality(e.target.value) ?? null}/>
                            </div>
                        </div>
                    </>
                }
                {props.step === props.stepList.COMPTE && 
                    <>
                        <div className="col-12">
                            <h3 className='text-uppercase'>Conditions d&apos;utilisation</h3>
                            <div className='form-group'>
                                <p className='text-danger'>* Indique une question obligatoire</p>
                            </div>
                        </div>
                        <div className='col-12 mb-3'>
                            <div className='form-group'>
                                <label htmlFor='member_source'>{__('member_source')}</label>
                                <select className='select2 form-control' id='member_source' name='member_source' 
                                value={props.useMember.member_source ?? ''} disabled={props.isDisabled} 
                                onChange={handleMemberSourceChange}>
                                    <option hidden>Choisissez une option</option>
                                    <option value={'Par un membre de la BELUCI'}>Par un membre de la BELUCI</option>
                                    <option value={'Via les réseaux sociaux'}>Via les réseaux sociaux</option>
                                    <option value={'Lors d\'un événement organisé par la'}>Lors d&apos;un événement organisé par la</option>
                                    <option value={'Par des recommandations d\'affaires'}>Par des recommandations d&apos;affaires</option>
                                    <option value={'Autres'}>Autres</option>
                                </select>

                                {isOtherSource && 
                                    <input className="form-control mt-2" name="member_source_other"
                                    onChange={e => props.useMember.setMember_source(e.target.value)} placeholder={__('member_source')}/>
                                }
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
                                checked={props.useMember.hasAcceptedConditions} onChange={() => 
                                props.useMember.setHasAcceptedConditions(!props.useMember.hasAcceptedConditions)}/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    J&apos;accepte que mes informations soient partagées avec les autres membres de
                                    la Chambre de Commerce Belge et Luxembourgeoise de Côte d&apos;Ivoire.
                                </label>
                            </div>
                        </div>
                    </>
                }
                <div className='col-12 d-flex align-items-center justify-content-end mt-4'>
                    {props.step !== props.stepList.ENTREPRISE && 
                        <button disabled={props.isDisabled ?? false} type='button' 
                        className='btn px-4 btn-secondary mr-2' onClick={() => props.handlePrevClick()}>
                            Retour
                        </button>
                    }
                    {props.step !== props.stepList.COMPTE ?
                        <button disabled={props.isDisabled ?? false} type='button' 
                        className='btn px-4 btn-success ml-2' onClick={() => props.handleNextClick()}>
                            Suivant
                        </button> :
                        <button disabled={props.isDisabled ?? false} type='submit' 
                        className='btn px-4 btn-primary'>
                            {props.isDisabled ? 'Chargement...' :  "Validez l'inscription"}
                        </button>
                    }
                </div>
            </div>
        </form>
    )
}