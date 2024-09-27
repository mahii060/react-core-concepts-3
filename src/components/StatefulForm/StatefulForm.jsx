import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('Mr.Bond')
    const [password, setPassword] = useState(null)
    const [number, setNumber] = useState(null)
    const [error, setError] = useState('')

    const handleForm = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Passwords must be 6 characters or longer')
        }
        else {
            setError('');
            console.log(name, password, number);
        }
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleNumberChange = e => {
        setNumber(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <input value={name} onChange={handleNameChange} type="text" name="name" id="name" placeholder="Name" />
                <br />

                <input onChange={handlePasswordChange} type="password" name="pass" id="password" placeholder="Password" />
                {error && <p style={{ color: 'red', margin: '0', fontSize: '30px' }}>{error}!</p>}
                <br />

                <input onChange={handleNumberChange} type="text" name="number" id="number" placeholder="Number" />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;