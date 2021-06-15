import React from 'react'
import classname from 'classnames'
const TextFieldGroup=({
    name,
    placeholder,
    value,
    type,
    onChange,
    error
}) =>{

    return (
        <div className="form-group mb-2">
            <input 
             name={name}
             placeholder={placeholder}
             value={value}
             type={type}
             className={classname("form-control form-control-lg",{
                  "is-invalid":error
             })}
             onChange={onChange}
            >
            </input>
            {error&&(<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

export default TextFieldGroup
