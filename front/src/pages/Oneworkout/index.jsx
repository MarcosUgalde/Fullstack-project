import Styled from './styles'
import { workout } from '../../services'
import { useQuery } from "react-query";
import { useUrl, useDelete } from '../../hooks'
import { useEffect, useRef, useState } from 'react';

function Oneworkout() {
    const url = useUrl()
    const { data, isLoading } = useQuery(url, () => workout.getOneWorkout(url))

    const { deleteWorkout } = useDelete()

    const exercises = data?.data

    const [currentIndex, setCurrentIndex] = useState(0);
    const [remainingDuration, setRemainingDuration] = useState(0);

    const trainingRef = useRef(null)
 
    const startWorkout = () => {
       setCurrentIndex(0);
       setRemainingDuration(exercises[0].duration)

       if(trainingRef.current) {
        trainingRef.current.scrollIntoView({ behavior: 'smooth'})
       }
   }

   const handleDelete = () => {
    deleteWorkout(data?.data[0].workout_name)
    console.log(data?.data[0].workout_name)
   }

   const handleStopWorkout = () => {
    window.location.reload();
   }
   
   useEffect(() => {
       if(remainingDuration === 0) {
           if(currentIndex + 1 < exercises?.length) {
               setCurrentIndex((prevIndex) => prevIndex +1);
               setRemainingDuration(exercises[currentIndex + 1]?.duration)
           }
       } else {
           const interval = setInterval (() => {
               setRemainingDuration((prevDuration) => prevDuration -1);
           }, 1000)
           return () => clearInterval(interval)
       }
    }, [currentIndex, remainingDuration, exercises])
    
    
    
    if(isLoading) return <div><p>Loading</p></div>
    
    
    if(!isLoading)  return (
        <Styled.Body>
            <Styled.View>
                <h1>{data?.data[0].workout_name}</h1>
                <h3>{data?.data[0].set_name}</h3>
                <ul>
                    {exercises.map((exercise) => {
                        return (
                            <li key={exercise.id}>{exercise.exercise_name} ({exercise.duration} seconds)</li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={handleDelete}>Delete Workout</button>
                    <button onClick={startWorkout}>Start</button>
                </div>
            </Styled.View>
            <Styled.Training ref={trainingRef}>
                <h3>{data?.data[0].set_name}</h3>
                <Styled.Block>
                    <p>{exercises[currentIndex].exercise_name}</p>
                    <p>{remainingDuration}</p>
                    <p>{exercises[currentIndex].description}</p>
                    <p>Next exercise: {exercises[currentIndex + 1] ? exercises[currentIndex + 1].exercise_name : 'Congratulations! You finished!'}</p>
                </Styled.Block>
                <button onClick={handleStopWorkout}>Stop Workout</button>
            </Styled.Training>
        </Styled.Body>
    )
}

export default Oneworkout