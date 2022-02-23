import Pins from "../Components/Pins.js";
import NewLetter from "../Components/NewLetter.js";
import { useState } from "react";
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option} from "../Styles/index-style"



function Index() {
  const [viewFeatPin, setViewFeatPin] = useState(false)
      
  const toggleView = () => {
    setViewFeatPin(!viewFeatPin);
};
  

  return (
    <Container>
      <Title>Pins</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select onChange={toggleView} name="color">
          <Option defaultValue="all">All</Option>
          <Option value="favorite">Favorite</Option>
          {/* <Option value="black">Black</Option>
          <Option value="red">Red</Option>
          <Option value="blue">Blue</Option>
          <Option value="yellow">Yellow</Option>
          <Option value="green">Green</Option> */}
        </Select>
        </Filter>
        {/* <Filter><FilterText>Sort Products:</FilterText>
        <Select name="price">
          <Option defaultValue="newest">Newest</Option>
          <Option value="price-acs">Price (acs)</Option>
          <Option value="price-decs">Price (decs)</Option>
        </Select>
        </Filter> */}
      </FilterContainer>
      <Pins viewFeatPin={viewFeatPin}/>
      <NewLetter/>
    </Container>
  )
}

export default Index