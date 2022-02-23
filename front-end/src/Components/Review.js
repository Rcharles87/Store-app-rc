import ReviewForm from "./ReviewForm";
import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
margin: 5px;

`

const ReviewContainer = styled.div`
padding: 1em;
box-shadow: 0px 0px 2px silver;
background-color: ghostwhite;
border-radius: 5px;
`

const ButtonWrapper = styled.div`
max-width: 20%;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 30px;
margin: 5px;
`

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setViewEditForm] = useState(false);

  const toggleView = () => {
    setViewEditForm(!viewEditForm);
  };

 let text = viewEditForm ? "Cancel" : "Edit This review"

  return (
    <Container>
      {viewEditForm ? (
        <ReviewForm
        reviewDetails={review}
        handleSubmit={handleSubmit}
        toggleView={toggleView}
        />
        ) : (
          <ReviewContainer>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </ReviewContainer>
      )}
      <ButtonWrapper>
      <button onClick={toggleView}>{text}</button>
      <button onClick={() => handleDelete(review.id)}>Delete</button>
      </ButtonWrapper>
    </Container>
  );
}

export default Review;
