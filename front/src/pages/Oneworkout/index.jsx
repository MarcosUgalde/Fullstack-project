import Styled from './styles'

function Oneworkout() {
    return (
        <Styled.Body>
            <>
                <h1>Workout name</h1>
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