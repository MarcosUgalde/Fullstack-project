import { styled } from 'styled-components';

const Page = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
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

export default {
    Page,
    Questionaire,
    Item,
}