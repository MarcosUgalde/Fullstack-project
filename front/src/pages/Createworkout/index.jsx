import Styled from './styles'

function Createworkout() {
    return (
        <Styled.Body>
            <h1>Create a new workout!</h1>
            <Styled.Form>
                <input type='text' id='workout' placeholder='Insert Workout Name'></input>
                <input type="text" placeholder='Insert set name'></input>
                <input type='text' placeholder='Exercise name'></input>
                <input type='text' placeholder='Description (optional)'></input>
                <input type='text' placeholder='Duration (seconds)'></input>
                <ul>
                    <li></li>
                </ul>
                <label htmlFor='reps'>Insert repetitions</label>
                <input id='reps'></input>
                <label htmlFor='rest'>Insert rest time (seconds)</label>
                <input id='rest' placeholder='ex: 30'></input>
            </Styled.Form>
            <button>Add set</button>
            <input type='submit'></input>
        </Styled.Body>
    )
}

export default Createworkout