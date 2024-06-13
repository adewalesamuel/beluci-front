//'use client'
import { Components } from '..';
import { Utils } from '../../utils';

export function MemberForm(props) {
    const {__} = Utils.String;

    return (
        <form onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
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
                        <label htmlFor='address'>{__('address')}
                            <span className='text-danger'>*</span>
                        </label>
                        <input className='form-control' type='text' id='address' name='address' 
                        placeholder={__('address')} value={props.useMember.address ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setAddress(e.target.value) ?? null}/>
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
                        <label htmlFor='fullname'>{__('fullname')}</label>
                        <input className='form-control' type='text' id='fullname' name='fullname' 
                        placeholder={__('fullname')} value={props.useMember.fullname ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setFullname(e.target.value) ?? null}/>
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
                        <input className='form-control' type='number' id='share_capital' name='share_capital' 
                        placeholder={__('share_capital')} value={props.useMember.share_capital ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setShare_capital(e.target.value) ?? null}/>
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
                        <input className='form-control' type='text' id='phone_number' name='phone_number' 
                        placeholder={__('phone_number')} value={props.useMember.phone_number ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setPhone_number(e.target.value) ?? null}/>
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
                        <input className='form-control' type='text' id='sales_representative_phone_number' 
                        name='sales_representative_phone_number' placeholder={__('sales_representative_phone_number')} 
                        value={props.useMember.sales_representative_phone_number ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setSales_representative_phone_number(e.target.value) ?? null}/>
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
                    <div className='form-group'>
                        <label htmlFor='commercial_register_url'>{__('commercial_register_url')}</label>
                        <Components.FileInput img_url={props.useMember.commercial_register_url ?? ''}
                        handleFileChange={props.useMember.setCommercial_register_url}/>
                    </div>
                </div>
				<div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='idcard_url'>{__('idcard_url')}</label>
                        <Components.FileInput img_url={props.useMember.commercial_register_url ?? ''}
                        handleFileChange={props.useMember.setIdcard_url}/>
                    </div>
                </div>
				<div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='password'>{__('password')}
                            <span className='text-danger'>*</span>
                        </label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder={__('password')} value={props.useMember.password ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useMember.setPassword(e.target.value) ?? null}/>
                    </div>
                </div>
				{/* <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='member_id'>{__('member_id')}</label>
                        <select className='select2 form-control' id='member_id' name='member_id' 
                        value={props.useMember.member_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useMember.setMember_id(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.members.map((member, index) => {
                                    return (<option key={index} value={member.id ?? ''}>
                                                {member.name}
                                            </option>)
                                })
                            }
                        </select>
                    </div>
                </div> */}
				
                <div className='col-12 text-right mt-2'>
                    <button disabled={props.isDisabled ?? false} type='submit' 
                    className='btn btn-primary'>
                        {props.isDisabled ? 'Chargement...' :  "Validez l'inscription"}
                    </button>
                </div>
            </div>
        </form>
    )
}