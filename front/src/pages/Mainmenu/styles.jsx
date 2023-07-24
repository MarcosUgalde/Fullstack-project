import { styled } from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: black;
    padding: 1em;
    min-height: 100vh;
`

const Options = styled.section`
    display: flex;
    flex-direction:
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-top: 50px;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
`

const Button = styled.section`
    height: 5em;
    width: 150px;
    background-color: yellow;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 10px;
    margin: 1em;
    transition: font-size 0.5s ease-in-out;

    &:hover {
        background-color: #AFC800;
    }
`

export default {
    Body,
    Options,
    Button,
}