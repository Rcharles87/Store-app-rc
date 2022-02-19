import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

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

  return (
    <section>
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Reviews;
