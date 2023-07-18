import Styled from './styles'
import { workout } from '../../services'
import { useQuery } from "react-query";
import { useUrl } from '../../hooks'

function Oneworkout() {
    const url = useUrl()
    const { data, isLoading } = useQuery(url, () => workout.getOneWorkout(url))
    console.log(data)
    if(isLoading) return <div><p>Loading</p></div>

    return (
        <Styled.Body>
            <>
                <h1>{data.data[0].workout_name}</h1>
                <h3>Set 1</h3>
                <ul>
                    <li>Exercise 1</li>
                    <li>Exercise 2</li>
                    <li>Exercise 3</li>
                </ul>
                <h3>Set 2</h3>
                <ul>
                    <li>Exercise 1</li>
                    <li>Exercise 2</li>
                    <li>Exercise 3</li>
                </ul>
            </>
            <>
                <h3>Set name</h3>
                <Styled.Block>
                    <p>Exercise name</p>
                    <p>Time remaining of exercise</p>
                    <p>Description</p>
                </Styled.Block>
                <button>Pause</button>
                <button>Stop workout</button>
            </>
        </Styled.Body>
    )
}

export default Oneworkout