import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
    onPressKey: any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onPressKey} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onPressKey} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
