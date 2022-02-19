import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setViewEditForm] = useState(false);

  const toggleView = () => {
    setViewEditForm(!viewEditForm);
  };

  return (
    <div>
      <button>Edit This Review</button>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </div>
      )}
      <button onClick={() => handleDelete(review.id)}>Delete</button>
    </div>
  );
}

export default Review;
