export interface User {
    firstName: string,
    lastName: string,
    email: string,
    phone: string;
}

const User = (props: User) => {
    return (
        <>
            <h3 className="inline">{`${props.firstName} ${props.lastName}`}</h3>
            <h3 className="inline col-span-2">{`${props.email}`}</h3>
            <h3 className="inline">{`${props.phone}`}</h3>
            <button>Delete</button>
        </>
    )
}

export default User;