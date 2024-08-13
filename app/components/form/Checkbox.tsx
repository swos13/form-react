const Checkbox = ({text}: {text: string}) => {

    return (
        <div className="flex gap-4 items-start col-start-1 -col-end-1">
            <input className="border-2 border-solid border-slate-500 rounded-lg p-2 mt-2" type="checkbox" />
            <p className="text-justify">{text}</p>
        </div>
    )
}

export default Checkbox;