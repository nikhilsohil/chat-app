

export default function Button({name,onClick,children
}){


    return(<div className="input-field">

        <div className="button-field">
            <button type="button" onClick={onClick} >{children}</button>
        </div>
    </div>)
}