import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #1B998B;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bolder;
`



function Announcement() {
  return (
    <Container>
        Today Only! Free Shipping!!!!
    </Container>
  )
}

export default Announcement