import Styled from './styles';
import { Link } from 'wouter';

function Mainmenu() {
    return (
        <Styled.Body>
            <h1>Main menu</h1>
            <Link to='/new-workout'>
                <Styled.Button>
                    <button>Create new workout</button>
                </Styled.Button>
            </Link>
            <Link to='workouts'>
                <Styled.Button>
                    <button>Select workout</button>
                </Styled.Button>
            </Link>
        </Styled.Body>
        
    )
}

export default Mainmenu