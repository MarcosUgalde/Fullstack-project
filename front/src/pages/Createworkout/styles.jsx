import { styled } from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: black;
    padding: 2em;
    min-height: 100vh;
    font-size: 1.2em;
    color: silver;
`
const Form = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: silver;
`

export default {
    Body,
    Form,
}