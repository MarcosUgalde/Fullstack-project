import Styled from './styles';
import { Link } from 'wouter';

function Mainmenu() {
    return (
        <Styled.Body>
            <h1>Main menu</h1>
            <Styled.Options>
                <Link to='/new-workout'>
                    <Styled.Button>
                        Create new workout
                    </Styled.Button>
                </Link>
                <Link to='workouts'>
                    <Styled.Button>
                        Select workout
                    </Styled.Button>
                </Link>
            </Styled.Options>
        </Styled.Body>
        
    )
}

export default Mainmenu