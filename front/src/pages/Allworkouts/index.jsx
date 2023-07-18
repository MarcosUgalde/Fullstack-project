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
        <>
            <h1>List of workouts created by the user</h1>
            <div>{workouts.data.map((workout) => (
                    <Link href={`/workout/${workout.id}`}>{workout.workout_name}</Link>
                )
                )}
            </div>
        </>
    )
}

export default Allworkouts