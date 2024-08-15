import Link from "next/link";

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    phone: string;
    id: number
}

const User = (props: User) => {
    return (
        <>
            <Link href={`/users/${props.id}`}>{`${props.firstName} ${props.lastName}`}</Link>
            <h3 className="inline col-span-2">{`${props.email}`}</h3>
            <h3 className="inline">{`${props.phone}`}</h3>
            <button>Delete</button>
        </>
    )
}

export default User;