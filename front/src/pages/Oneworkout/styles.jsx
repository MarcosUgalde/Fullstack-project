import { styled } from 'styled-components' 

const Body = styled.section`
    display: flex;
    flex-direction: column; 
`

const View = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(96,96,96,1) 50%, rgba(138,138,138,1) 100%);
    color: yellow;
    padding: 1em;
`

const Training = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,196,131,1) 0%, rgba(21,120,84,1) 50%, rgba(0,164,116,1) 100%);
    padding: 1em;
`

const Block = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(255,255,255,0.47942927170868344) 0%, rgba(198,226,215,0.5130427170868348) 50%, rgba(203,255,240,0.5690651260504201) 100%);
    border-radius: 10px;
    padding: 1em;
`

export default {
    Body,
    View,
    Training,
    Block,
}