import Styled from './styles'
import { useState } from 'react'
import { useMutation } from 'react-query';
import { workout } from '../../services'

function Createworkout() {
    const [payload, setPayload] = useState();
    
    const { mutate } = useMutation(() => workout.create({ payload }))
    const { mutate: setMutate } = useMutation(() => workout.addset({ payload }))
    
    return (
        <Styled.Body>
            <h1>Create a new workout!</h1>
            <Styled.Form>
                <input type='text' id='workout' name='name' placeholder='Insert Workout Name' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }}></input>
                <button onClick={() => { mutate(payload) }}>Continue</button>
                <input type="text" name='name' placeholder='Insert set name' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }}></input>
                <button onClick={() => { setMutate(payload) }}>Continue</button>
                <input type='text' placeholder='Exercise name' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }}></input>
                <input type='text' placeholder='Description (optional)'></input>
                <input type='text' placeholder='Duration (seconds)'></input>
                <ul>
                    <li></li>
                </ul>
                <label htmlFor='reps'>Insert repetitions</label>
                <input id='reps'></input>
                <label htmlFor='rest'>Insert rest time (seconds)</label>
                <input id='rest' placeholder='ex: 30'></input>
            </Styled.Form>
            <button>Add set</button>
            <input type='submit'></input>
        </Styled.Body>
    )
}

export default Createworkout