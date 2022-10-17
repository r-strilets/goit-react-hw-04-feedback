import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(key => {
        return (
          <button
            className={css.button}
            key={key}
            name={key}
            onClick={() => onLeaveFeedback(key)}
          >
            {
              ((key = key === 'good' ? (key = 'Good 😀') : key),
              (key = key === 'neutral' ? (key = 'Neutral 😐') : key),
              (key = key === 'bad' ? (key = 'Bad 🙁') : key))
            }
          </button>
        );
      })}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
