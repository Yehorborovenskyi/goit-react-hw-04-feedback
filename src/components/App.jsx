import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export function App (){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
const feedBack = { good, neutral, bad };

const handleLeaveFeedback = option => {
  switch (option) {
    case 'good':
      setGood(good + 1);
      break;
    case 'neutral':
      setNeutral(neutral + 1);
      break;
    case 'bad':
      setBad(bad + 1);
      break;
    default:
      return;
  }}

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
 




    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedBack)}
            onLeaveFeedback={handleLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
          }