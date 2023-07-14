import Styled from '../../pages/Createworkout/styles';
import { useState } from 'react'
import { useMutation } from 'react-query';
import { workout } from '../../services'

function Set({ workoutId }) {
    const [payload, setPayload] = useState();
    
    //const { mutate,data } = useMutation(() => workout.create({ payload }))

    const { mutate: setMutate,data: setData } = useMutation((payload) => workout.addset({ payload }))

    const { mutate: setMutateExercise,data: setExerciseData } = useMutation((payload) => workout.addexercise({ payload }))
    console.log(setExerciseData)

     /*<input type='text' id='workout' name='name' placeholder='Insert Workout Name' onChange={(e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        })
    }}></input>
    <button onClick={() => { mutate(payload) }}>Continue</button> */
    return (

        <Styled.Form>
                <input type="text" name='setName' placeholder='Insert set name' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }}></input>
                <label htmlFor='reps'>Insert repetitions</label>
                <input id='reps' name='rounds' onChange={(e) => {
                    setPayload({
                        ...payload, 
                        [e.target.name]: e.target.value
                    })
                }}></input>
                <label htmlFor='rest'>Insert rest time (seconds)</label>
                <input id='rest' name='rest_time' placeholder='ex: 30' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value
                    })
                }}></input>
                <button onClick={() => { setMutate({...payload, workoutId}) }}>Continue</button>
                <input type='text' name='exerciseName' placeholder='Exercise name' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }}></input>
                <input type='text' name='description' placeholder='Description (optional)' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }} ></input>
                <input type='text' name='duration' placeholder='Duration (seconds)' onChange={(e) => {
                    setPayload({
                        ...payload,
                        [e.target.name]: e.target.value,
                    })
                }} ></input>
                <button onClick={() => setMutateExercise({ ...payload, setId: setData.data.id })}>Add Exercise</button>
                <ul>
                    <li></li>
                </ul>
            </Styled.Form>
    )
}

export default Set