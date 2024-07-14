
import {forwardRef} from "react"


const  Input = forwardRef(({label,type,id,onChange,error,children},{inputRef,errorRef})=> {
    return (
        <div className="input-area">
            <div className="input-container" id={id} ref={inputRef}>
                <div className="input-box">

                    <input type={type} required="required" onChange={onChange} className="input-text" name={label} />
                    <label className="input-label">{label}</label>
                    {
                        children
                    }

                    
                </div>
            </div>
            <p className="input-error" ref={errorRef}> {error} </p>
        </div>
    )
});

export default Input;