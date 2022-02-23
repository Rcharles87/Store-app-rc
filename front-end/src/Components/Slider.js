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
  SLink
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
        <Slide bg="F6AE2D90">
          <ImgContainer>
            <Image
              src="https://media.istockphoto.com/vectors/mega-sale-banner-template-with-polygonal-3d-shapes-and-text-for-vector-id1182928663?k=20&m=1182928663&s=612x612&w=0&h=gpsceqle8gnkAJ8J_xi18D9eaC0_JQhW-xcDjjruRgc="
              alt="nothing"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>END OF MOD SALE</Title>
            <Desc>
              CELEBRATE AND BUY SOMETHING NICE FOR YOURSELF 50% OFF USE CODE:
              EightIsGreat
            </Desc>
            <SLink to="/pins">
            <Button>SHOP NOW!</Button>
            </SLink>
          </InfoContainer>
        </Slide>
        <Slide bg="2F485849">
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
            <SLink to="/pins">
            <Button>SHOP NOW!</Button>
            </SLink>
          </InfoContainer>
        </Slide>
        <Slide bg="F2641990">
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
            <SLink to="/pins">
            <Button>SHOP NOW!</Button>
            </SLink>
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
