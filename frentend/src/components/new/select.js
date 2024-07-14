

export default function Select({values,onChange,defaultValue,id,}) {

    return (
        <>
            <div className="input-area">
                <div className="input-container" id={id}>
                    <div className="input-box">

                        <select value={defaultValue} onChange={onChange}>
                            {values.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>

                    </div>
                    <p className="input-error" id={id + "err"}></p>

                </div>
            </div>
        </>
    )
}