export function PhoneNumberField(props) {

    return (
            <div className="input-group mb-3">
                <select className="input-group-text" id={props.name}>
                    <option value='+225'>+225</option>
                    <option value='+33'>+33</option>
                    <option value='+32'>+32</option>
                    <option value='+352'>+352</option>
                    <option value='+1'>+1</option>
                </select>
                <input className='form-control' type='text' id={props.name} name={props.name} 
                placeholder={props.placeholder} value={props.value ?? ''}
                disabled={props.isDisabled} onChange={e => props.handleChange(e.target.value)}/>    
            </div>
    )
}
