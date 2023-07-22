import { styled } from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: black;
    padding: 2em;
    min-height: 100vh;
`
const Form = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default {
    Body,
    Form,
}