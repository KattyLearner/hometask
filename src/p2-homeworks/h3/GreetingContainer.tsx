import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if(e.currentTarget.value === ' ') {
            setError('name is required')
        } else {setName(e.currentTarget.value)}  // need to fix
    }

    const addUser = (name: string) => {
        alert(`Hello, ${name}!`)
        setName('')
        addUserCallback(name)
        // need to fix
    }

    const onPressKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser(name)
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={() => addUser (name)}
            error={error}
            totalUsers={totalUsers}
            onPressKey={onPressKey}
        />
    )
}

export default GreetingContainer
