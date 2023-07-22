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

            <Link to='/workouts'>
                <button>Save</button>
            </Link>
        </Styled.Body>
    )
}

export default Createworkout

           
           // <button onClick={handleNewSet}>New Set</button>