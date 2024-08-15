
const User = ({ params }: {params: { user: string }}) => {

    return (
        <h2>{`Page of ${params.user}`}</h2>
    )
}

export default User;