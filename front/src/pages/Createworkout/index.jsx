import Styled from './styles'
import Set from '../../components/SetsCreation';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { workout } from '../../services';
import { Link } from 'wouter';

function Createworkout() {
    const [sets, setSets] = useState([]);
    const handleNewSet = (id) => {
        console.log(id)
      const newSet = <Set key={sets.length} workoutId={id} />;
      setSets([...sets, newSet]);
    }

    const [payload, setPayload] = useState();
    const { mutate } = useMutation(() => workout.create({ payload }), {onSuccess: (data) => {
        console.log(data)
        handleNewSet(data.data.id)
    }})
    //console.log(data)
    //const { mutate: setMutate,data: setData } = useMutation((payload) => workout.addset({ payload }))

    //const { mutate: setMutateExercise,data: setExerciseData } = useMutation((payload) => workout.addexercise({ payload }))
   // console.log(setExerciseData)

    
    return (
        <Styled.Body>
            <h1>Create a new workout!</h1>
            <input type='text' id='workout' name='name' placeholder='Insert Workout Name' onChange={(e) => {
                setPayload({
                    ...payload,
                    [e.target.name]: e.target.value,
                })
            }}></input>
            <button onClick={() => { mutate(payload) }}>Continue</button>

            {sets.map((element) => {
                return element
            })}

            <button onClick={handleNewSet}>New Set</button>
            <Link to='/workouts'>
                <button>Save</button>
            </Link>
        </Styled.Body>
    )
}

export default Createworkout

            /*    <Styled.Form>
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
                <button onClick={() => { setMutate({...payload, workoutId: data.data.id}) }}>Continue</button>
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
             */