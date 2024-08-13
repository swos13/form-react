import Checkbox from "./Checkbox";
import Input from "./Input";

const termsText = "I agree to TOS and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const Form = () => {
    return (
        <form className="w-1/2 max-w-2xl min-w-96 m-auto p-8 border-2 border-solid border-slate-300 rounded-2xl grid grid-cols-2 grid-flow-row gap-8" method="POST">
            <h2 className="col-start-1 -col-end-1 text-2xl text-center">Provide your data for registration</h2>
            <Input name="First Name" type="text" />
            <Input name="Last Name" type="text" />
            <Input name="Email" type="email" />
            <Input name="Phone" type="tel" />
            <Checkbox text={termsText}/>
            <button className="w-64 border-2 border-solid border-slate-600 active:bg-slate-300 rounded-lg p-4 mt-auto col-start-1 -col-end-1 justify-self-center" type="submit">Submit</button>
        </form>
    )
}

export default Form;