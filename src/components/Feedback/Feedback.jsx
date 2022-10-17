import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = key => {
    switch (key) {
      case 'Good 😀':
        setGood(prevState => prevState + 1);
        break;
      case 'Bad 🙁':
        setBad(prevState => prevState + 1);
        break;
      case 'Neutral 😐':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {good || neutral || bad ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        ''
      )}
    </>
  );
};
