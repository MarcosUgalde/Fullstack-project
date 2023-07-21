import { styled } from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background: linear-gradient(168deg, rgba(87,0,0,1) 0%, rgba(251,0,5,1) 62%, rgba(126,0,45,1) 100%);
    font-color: white;
`
const Workouts = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
`

const Anchor = styled.a`
    color: white;
    text-decoration: none;
`

export default {
    Body,
    Workouts,
    Anchor,
}