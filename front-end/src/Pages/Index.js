import Pins from "../Components/Pins.js";
import NewLetter from "../Components/NewLetter.js";
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option} from "../Styles/index-style"



function Index() {

  return (
    <Container>
      <Title>Pins</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select name="color">
          <Option defaultValue="color">color</Option>
          <Option value="white">White</Option>
          <Option value="black">Black</Option>
          <Option value="red">Red</Option>
          <Option value="blue">Blue</Option>
          <Option value="yellow">Yellow</Option>
          <Option value="green">Green</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select name="price">
          <Option defaultValue="newest">Newest</Option>
          <Option value="price-acs">Price (acs)</Option>
          <Option value="price-decs">Price (decs)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Pins />
      <NewLetter/>
    </Container>
  )
}

export default Index