import Styled from './styles'
import { workout } from '../../services'
import { useQuery } from "react-query";
import { useUrl } from '../../hooks'

function Oneworkout() {
    const url = useUrl()
    const { data, isLoading } = useQuery(url, () => workout.getOneWorkout(url))
    console.log(data)
    if(isLoading) return <div><p>Loading</p></div>
    const exercises = data.data.map((item) => item)
    console.log(exercises)

    return (
        <Styled.Body>
            <>
                <h1>{data.data[0].workout_name}</h1>
                <h3>{data.data[0].set_name}</h3>
                <ul>
                    {exercises.map((exercise) => {
                        return (
                            <li>{exercise.exercise_name}</li>
                        )
                    })}
                </ul>
                <button>Start</button>
            </>
            <>
                <h3>{data.data[0].set_name}</h3>
                <Styled.Block>
                    <p>Exercise name</p>
                    <p>Time remaining of exercise</p>
                    <p>Description</p>
                </Styled.Block>
                <button>Pause</button>
                <button>Stop Workout</button>
            </>
        </Styled.Body>
    )
}

export default Oneworkout