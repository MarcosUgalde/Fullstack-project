import { styled } from 'styled-components';

const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center; 
    min-height: 100vh;
    background-color: black;
    color: white;
`
const Questionaire = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`
const Item = styled.section`
    margin: 2em;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const Footer = styled.section`
    display: flex;
`

export default {
    Page,
    Questionaire,
    Item,
    Footer,
}