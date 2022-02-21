import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "../Styles/slider-style.js";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="2F4858">
          <ImgContainer>
            <Image
              src="https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
              alt="nothing"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>END OF MOD SALE</Title>
            <Desc>
              CELEBRATE AND BUY SOMETHING NICE FOR YOURSELF 50% OFF USE CODE:
              EightIsGreat
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="F6AE2D">
          <ImgContainer>
            <Image
              src="https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
              alt="nothing"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              CELEBRATE AND BUY SOMETHING NICE FOR YOURSELF 50% OFF USE CODE:
              EightIsGreat
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="F26419">
          <ImgContainer>
            <Image
              src="https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
              alt="nothing"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>SPRING SALE</Title>
            <Desc>
              CELEBRATE AND BUY SOMETHING NICE FOR YOURSELF 50% OFF USE CODE:
              EightIsGreat
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
