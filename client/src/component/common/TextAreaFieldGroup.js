import React from 'react'
import classname from 'classnames'
const TextFieldGroup=({
    name,
    placeholder,
    value,
   
    onChange,
    error
}) =>{

    return (
        <div className="form-group mb-2">
            <textarea 
             name={name}
             placeholder={placeholder}
             value={value}
             className={classname("form-control form-control-lg",{
                  "is-invalid":error
             })}
             onChange={onChange}
            >
            </textarea>
            {error&&(<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

export default TextFieldGroup
