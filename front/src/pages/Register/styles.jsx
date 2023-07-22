import { styled } from 'styled-components';

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: silver;
    background-color: black;
    padding: 1em;
    min-height: 100vh;
`
const Form = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`
const Field = styled.section`
    margin: 2em;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`

const Footer = styled.section`
    
`

export default {
    Body,
    Form,
    Field,
    Footer,
}