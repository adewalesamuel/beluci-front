import { useEffect } from 'react';
import { Hooks } from '../hooks';

export function FileInput(props) {
    const useFile = Hooks.useFile();

    useEffect(() => {
        if (!useFile.fileUrl) return;
        
        props.handleFileChange(useFile.fileUrl);
    }, [useFile.fileUrl]);

    return (
        <span className='d-block w-100'>
            <div className="position-relative">
                <input className='form-control w-100' type='file' 
                role='button' onChange={e => useFile.handleFileChange(e.target.files[0])} 
                accept='.pdf, .dox, .docx, .xlm, .xlmx' disabled={useFile.isLoading}/>
            </div>
        </span>
    )
}