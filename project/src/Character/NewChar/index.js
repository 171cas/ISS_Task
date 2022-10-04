import { useState } from 'react';
import { useHistory } from 'react-router-dom'





export default function NewChar() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [alter, setAlter] = useState('')
    const [align, setAlign] = useState('')
    const [affi, setAffi] = useState('')
    const [publi, setPubli] = useState('')

    const updateName = (e) => setName(e.target.value)
    const updateAlter = (e) => setAlter(e.target.value)
    const updateAlign = (e) => setAlign(e.target.value)
    const updateAffi = (e) => setAffi(e.target.value)
    const updatePubli = (e) => setPubli(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name,
            alter,
            align,
            affi,
            publi
        }
        const str_payload = JSON.stringify(payload, null, 4);
        alert('Character Created! \nPayload:\n' + str_payload)
        history.push('/')
    }

    return (
        <div className='myCharForm'>
            <section>
                {/* <ul>
                    <li> Possible error hanlder</li>
                </ul> */}
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name: </p>
                        <input
                            type='text'
                            maxLength={100}
                            placeholder='Name'
                            value={name}
                            onChange={updateName}
                        />
                    </label>
                    <label>
                        <p>Alter Ego: </p>
                        <input
                            type='text'
                            maxLength={100}
                            placeholder='Alter Ego'
                            value={alter}
                            onChange={updateAlter}
                        />
                    </label>
                    <label>
                        <p>Alignment: </p>
                        <input
                            type='text'
                            maxLength={100}
                            placeholder='Alignment'
                            value={align}
                            onChange={updateAlign}
                        />
                    </label>
                    <label>
                        <p>Affiliations: </p>
                        <input
                            type='text'
                            maxLength={100}
                            placeholder='Affiliations'
                            value={affi}
                            onChange={updateAffi}
                        />
                    </label>
                    <label>
                        <p>Publisher: </p>
                        <input
                            type='text'
                            maxLength={100}
                            placeholder='Publisher'
                            value={publi}
                            onChange={updatePubli}
                        />
                    </label>

                    <label>
                        <br />
                        <br />
                        <p></p>
                        <button type='submit'>Create New Character</button>
                    </label>
                </form>
            </section>
        </div>
    )
}
