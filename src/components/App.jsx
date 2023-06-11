import React, { useState } from 'react';
import css from './Statistics/Statistics.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGetFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0
      ? `${Math.round((good / countTotalFeedback()) * 100)}`
      : `0%`;
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGetFeedback={onGetFeedback}
          names={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section>
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onGetFeedback = value => {
//   this.setState(prevState => ({ [value]: (prevState[value] += 1) }));
// };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     if (totalFeedback === 0) {
//       return 0;
//     } else {
//       return Math.round((good / totalFeedback) * 100);
//     }
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const names = Object.keys(this.state);
//     return (
// <div className={css.container}>
//   <Section title="Please leave feedback">
//     <FeedbackOptions
//       onGetFeedback={this.onGetFeedback}
//       names={names}
//     />
//   </Section>

//   <Section>
//     {total ? (
//       <Statistics
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//         total={this.countTotalFeedback()}
//         positive={this.countPositiveFeedbackPercentage()}
//       />
//     ) : (
//       <Notification message="There is no feedback" />
//     )}
//   </Section>
// </div>
//     );
//   }
// }
