const Input = ({name, type}: {name: string, type: string}) => {
    const idName = name.replaceAll(' ', '-').toLowerCase();

    return (
        <div className="flex flex-col">
            <label htmlFor={idName}>{name}</label>
            <input className="border-2 border-solid border-slate-500 rounded-lg p-2 focus:bg-slate-200" type={type} id={idName} />
        </div>
    )
}

export default Input;