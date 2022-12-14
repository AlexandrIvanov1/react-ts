import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fakeVar = 0;
            while(fakeVar < 1000000) {
                fakeVar++;
                const fakeValue = Math.random();
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users rendering')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})
// const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {

    console.log('HelpToReactMemo')

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Valera', 'Dima', 'Denis', 'Igor'])

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <div>
                <button onClick={onClickHandler}>+</button>
                <button onClick={addUser}>Add user</button>
            </div>
            {count}
            <div>
                <Users users={newArray}/>
            </div>
        </>
    )
}