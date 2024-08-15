const Input = ({name, type, onChange}: {name: string, type: string, onChange: (input: string) => void}) => {
    const idName = name.replaceAll(' ', '-').toLowerCase();

    return (
        <div className="flex flex-col">
            <label htmlFor={idName}>{name}</label>
            <input className="border-2 border-solid border-slate-500 rounded-lg p-2 focus:bg-slate-200 user-invalid:bg-red-200" type={type} id={idName} name={idName} onChange={e => onChange(e.target.value)} required={true}/>
        </div>
    )
}

export default Input;