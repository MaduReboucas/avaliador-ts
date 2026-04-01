import "./ReviewForm.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ReviewForm = {
  data: {
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const ReviewForm = ({ data, updateFieldHandler }: ReviewForm) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" name="review" value="unsatisfied" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="neutral" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="satisfied" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="very_satisfied" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
    </div>
  );
};

export default ReviewForm;
