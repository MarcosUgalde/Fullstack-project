import Styled from './styles'
import { workout } from '../../services'
import { useQuery } from "react-query";
import { useUrl } from '../../hooks'
import { useEffect, useState } from 'react';

function Oneworkout() {
    const url = useUrl()
    const { data, isLoading } = useQuery(url, () => workout.getOneWorkout(url))
    console.log(data)
    if(isLoading) return <div><p>Loading</p></div>
    const exercises = data.data.map((item) => item)
    console.log(exercises)
    const index = 0;
    
    //const [currentIndex, setCurrentIndex] = useState(0);
    //const [remainingDuration, setRemainingDuration] = useState(0);
    
    // const [exercises, setExercises] = useState([])
    //const [started, setStarted] = useState(false)
    
    /*useEffect(() => {
        if(!isLoading && !started) {
            if(data && data.data && Array.isArray(data.data) && data.data.length > 0) {
                setExercises(data.data);
                setCurrentIndex(0);
                setRemainingDuration(data.data[0].duration)
            }
        }
    }, [data, isLoading, started])
    */
/** 
    const startWorkout = () => {
       setCurrentIndex(0);
       setRemainingDuration(exercises[0].duration)
   }
   */
   /* 
   useEffect(() => {
       if(remainingDuration === 0) {
           if(currentIndex + 1 < exercises.length) {
               setCurrentIndex((prevIndex) => prevIndex +1);
               setRemainingDuration(exercises[currentIndex + 1].duration)
           }
       } else {
           const interval = setInterval (() => {
               setRemainingDuration((prevDuration) => prevDuration -1);
           }, 1000)
           return () => clearInterval(interval)
       }
   }, [currentIndex, remainingDuration, exercises])
    
    */


    return (
        <Styled.Body>
            <>
                <h1>{data.data[0].workout_name}</h1>
                <h3>{data.data[0].set_name}</h3>
                <ul>
                    {exercises.map((exercise) => {
                        return (
                            <li>{exercise.exercise_name} - {exercise.duration} seconds</li>
                        )
                    })}
                </ul>
                <button>Start</button>
            </>
            <>
                <h3>{data.data[0].set_name}</h3>
                <Styled.Block>
                    <p>{exercises[index].exercise_name}</p>
                    <p>{exercises[index].duration}</p>
                    <p>{exercises[index].description}</p>
                </Styled.Block>
                <button>Pause</button>
                <button>Stop Workout</button>
            </>
        </Styled.Body>
    )
}

export default Oneworkout