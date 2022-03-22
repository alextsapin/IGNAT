import React from 'react';
import Greeting from './Greeting';

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    const [nameBox, setInNameBox] = React.useState<Array<string>>([])

    const setNameCallback = (name: string) => { 
        setName(name.trim()) 
    }

    const addUser = () => {
        if(name === '') {
            setError('Ввведите, корректное имя');
        } else {
            alert(`Hello, ${name} !`);
            setInNameBox([name, ...nameBox]);
            setName('');
            setError('');
        }
    }

    const totalUsers = nameBox.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer;