import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";

const API = process.env.REACT_APP_API_URL;

const Container = styled.section`
background-color: whitesmoke;
padding: 1em;
box-shadow: 2px 2px 4px silver;
`


function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
  
  useEffect(() => {
    axios.get(`${API}/pins/${id}/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, [id]);
  
  const handleAdd = (newReview) => {
    axios
    .post(`${API}/pins/${id}/reviews`, newReview)
    .then(
      (res) => {
        setReviews([res.data, ...reviews]);
      },
      (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
    };
    
    const handleEdit = (updatedReview) => {
      axios
      .put(`${API}/pins/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((res) => {
        const copyReviewArr = [...reviews];
        const indexUpdatedReview = copyReviewArr.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArr[indexUpdatedReview] = res.data;
        setReviews(copyReviewArr);
      })
      .catch((c) => console.warn("catch", c));
    };
    
    const handleDelete = (id) => {
      axios
      .delete(`${API}/pins/${id}/reviews/${id}`)
      .then(
        (res) => {
          const copyReviewArr = [...reviews];
          const indexDeletedReview = copyReviewArr.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArr.splice(indexDeletedReview, 1);
          setReviews(copyReviewArr);
        },
        (err) => console.error(err)
        )
        .catch((c) => console.warn("catch", c));
      };

      const [viewNewForm, setViewNewForm] = useState(false)
      
      const toggleView = () => {
        setViewNewForm(!viewNewForm);
  };

 let text = viewNewForm ? "Cancel" : "Add a New Review"

  return (
    <Container>
      <h2>Reviews</h2>
        <button onClick={toggleView}>{text}</button>
        {viewNewForm ? (
          <ReviewForm handleSubmit={handleAdd}>NEW</ReviewForm >

        ):(
          null
        )}

      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
}

export default Reviews;
