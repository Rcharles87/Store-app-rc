import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"


export const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)
    ), 
    url("https://m.media-amazon.com/images/I/81iMFGeqoDS._AC_.jpg") center;
    background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;
/* align-items: center;
justify-content: center; */
`

export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`

export const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

export const Slink = styled(Link)`
text-decoration: none;
`