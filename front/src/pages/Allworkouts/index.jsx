import { useQuery } from "react-query";
import { workout } from '../../services'

function Allworkouts() {
    const { data: workouts = [], isLoading } = useQuery("all", () => workout.getWorkouts())
    console.log(workouts)

    if(isLoading) return <div><p>Loading</p></div>
    if(!workouts) {
        return <div><p>no hay workouts</p></div>
    }
    
    return (
        <>
            <h1>List of workouts created by the user</h1>
            <div>{workouts.map((workout) => {
                return (
                    <div key={workout.id}>
                        <p>workout.name</p>
                    </div>
                )
            })}</div>
        </>
    )
}

export default Allworkouts