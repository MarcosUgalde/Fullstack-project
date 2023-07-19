import Styled from './styles'
import { useQuery } from "react-query";
import { Link } from "wouter"
import { workout } from '../../services'

function Allworkouts() {
    const { data: workouts = [], isLoading } = useQuery(["all"], () => workout.getWorkouts())
    console.log(workouts.data)

    if(isLoading) return <div><p>Loading</p></div>
    if(!workouts) {
        return <div><p>no hay workouts</p></div>
    }
    
    return (
        <Styled.Body>
            <h1>List of workouts created by the user</h1>
            <Styled.Workouts>{workouts.data.map((workout) => (
                    <Link href={`/workout/${workout.id}`} key={workout.id}>{workout.workout_name}</Link>
                )
                )}
            </Styled.Workouts>
        </Styled.Body>
    )
}

export default Allworkouts