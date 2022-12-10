import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users rendering')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Valera', 'Dima'])

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <div>
                <NewMessagesCounter count={count}/>
                <button onClick={onClickHandler}>+</button>
            </div>
            <div>
                <Users users={users}/>
                <button onClick={addUser}>Add User</button>
            </div>
        </>
    )
}