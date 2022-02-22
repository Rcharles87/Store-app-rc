import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
} from "../Styles/footer-style.js";




const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rae Charles </Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum est
          itaque, nulla vel fuga dolorem obcaecati iure possimus? Modi dolor est
          ipsa aliquam maxime ipsam, esse quam minima porro.
        </Desc>
        <SocialContainer>
          <SocialIcon color="999999">
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon color="0077B5">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Pins</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MyLocationIcon style={{ marginRight: "10px" }} />
          Bronx, New York
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          (646) 954-0083
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          raecharles@pursuit.org
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
