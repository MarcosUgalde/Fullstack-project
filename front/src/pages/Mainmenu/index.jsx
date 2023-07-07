import Styled from './styles'

function Mainmenu() {
    return (
        <Styled.Body>
            <h1>Main menu</h1>
            <Styled.Button>
                <button>Create new workout</button>
            </Styled.Button>
            <Styled.Button>
                <button>Select workout</button>
            </Styled.Button>
        </Styled.Body>
        
    )
}

export default Mainmenu