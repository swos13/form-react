import { User as UserInterface } from "./User";
import User from "./User";

const List = ({users}: {users: UserInterface[]}) => {

    return(
        <section>
            <h2 className="border-b-2 border-solid text-3xl">List of registered users</h2>
            <div className="grid grid-flow-row grid-cols-5 gap-2">
                <h3>Name</h3>
                <h3 className="col-span-2">Email</h3>
                <h3>Phone</h3>
                <h3></h3>
                {users.map(user => <User key={user.id} {...user} />)}
            </div>
        </section>
    )
}


export default List;