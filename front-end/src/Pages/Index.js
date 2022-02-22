import Pins from "../Components/Pins.js";
import styled from "styled-components";

const Container= styled.div``

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`

const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option`

`

function Index() {

  return (
    <Container>
      <Title>Pins</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
          <Option disabled selected>color</Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
          <Option selected>Newest</Option>
          <Option>Price (acs)</Option>
          <Option>Price (decs)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Pins />
    </Container>
  )
}

export default Index