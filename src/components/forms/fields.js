const renderError = ({error, touched}) => {
    if(error && touched){
        return (
            <small className="_error-message">
                {error}
            </small>
        )
    }
}

export const Input = ({input, label, placeholder, meta, type, className, value, min, max}) => {
    return(
        <div className={`_form-group ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`}>
            {label && <label htmlFor={input.name}>{label}</label>}
            <input id={input.name} className="_form-element" {...input} type={type} placeholder={placeholder ? placeholder : ""} defaultValue={value} min={min ? min : null} max={max ? max : null}  />
            {renderError(meta)}
        </div>
    )
} 

export const Select = ({input, label, placeholder, meta, children, className, defaultValue}) => {
    return (
        <div className={`_form-group ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`} >
            {label && <label htmlFor={input.name}>{label}</label>}
            <select 
                id={input.name}
                className="_form-element" 
                {...input} placeholder={placeholder ? placeholder : ""}
            >
                {children}
            </select>
            {renderError(meta)}
        </div>
    )
}

export const MultiSelect = ({input, label, placeholder, meta, children, className, defaultValue}) => {
    return (
        <div className={`_form-group ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`} >
            {label && <label htmlFor={input.name}>{label}</label>}
            <select 
                id={input.name}
                multiple
                className="_form-element" 
                {...input} placeholder={placeholder ? placeholder : ""}
                value={defaultValue}
            >
                {children}
            </select>
            {renderError(meta)}
        </div>
    )
}

export const TextArea = ({input, label, placeholder, meta, className}) => {
    return (
        <div className={`_form-group  ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`} >
            {label && <label htmlFor={input.name}>{label}</label>}
            <textarea id={input.name} className="_form-element" rows="5" {...input} autoComplete="true" placeholder={placeholder ? placeholder : ""} />
            {renderError(meta)}
        </div>
    )
}

export const Checkbox = ({input, label, meta, className, checked, link}) => {
    return(
        <div className={`_form-group-checkbox ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`}>
            <div className="_checkbox-row">
                <input className="_form-element" id={input.name} {...input} type="checkbox" defaultChecked={checked} />
                {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                        <label>{label ? label : <br />}</label>
                    </a>
                )}
                {!link && (
                    <label htmlFor={input.name}>{label ? label : <br />}</label>
                )}
            </div>
            {renderError(meta)}
        </div>
    )
}

export const Checkbox2 = ({input, label, meta, className, checked, link, onChange}) => {
    return(
        <div className={`_form-group-checkbox _checkbox-2 ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`}>
            <div className="_checkbox-row">
                <div className="_item">
                    <label>
                        <input id={input.name} {...input} type="checkbox" defaultChecked={checked} onClick={onChange} />
                        <span className="_checkbox"></span>
                    </label>
                    {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                        <p style={{textDecoration: 'underline'}}>{label ? label : <br />}</p>
                    </a>
                    )}
                    {!link && (
                        <p>{label ? label : <br />}</p>
                    )}
                </div>
            </div>
            {renderError(meta)}
        </div>
    )
}

export const Radio2 = ({input, label, meta, className, checked, link, onChange}) => {
    return(
        <div className={`_form-group-checkbox _checkbox-2 ${className ? className : ''} ${meta.error && meta.touched ? '_error' : ''}`}>
            <div className="_checkbox-row">
                <div className="_item">
                    <label>
                        <input id={input.name} {...input} type="radio" defaultChecked={checked} onClick={onChange} />
                        <span className="_checkbox"></span>
                    </label>
                    {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                        <p style={{textDecoration: 'underline'}}>{label ? label : <br />}</p>
                    </a>
                    )}
                    {!link && (
                        <p>{label ? label : <br />}</p>
                    )}
                </div>
            </div>
            {renderError(meta)}
        </div>
    )
}