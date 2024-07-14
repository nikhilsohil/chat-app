

export default function Radio({ label, id, onChange}) {

    return (
        <>
            <div className="input-area">

                <div className="input-container" id={id}>
                    <div className="input-box">

                        <label for={label}>{label}</label>
                        <input type="radio" id={label} value={label} onChange={onChange} name="gender" />
                    </div>
                </div>
            
            </div>
        </>
    )

}