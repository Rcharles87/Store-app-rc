import SendIcon from "@mui/icons-material/Send";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "../Styles/newletter-style";




const NewLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get all the updates on our new products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewLetter;
