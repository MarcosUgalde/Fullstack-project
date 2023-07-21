import { styled } from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    padding: 1em;
`

const Options = styled.section`
    display: flex;
    justify-content: center;
    align-items: space-around;
    padding: 1em;
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

    &:hover {
        font-size: 1.5em;
    }
`

export default {
    Body,
    Options,
    Button,
}