import PropTypes from 'prop-types';
import TweetsItem from 'components/TweetIstem/TweetIstem';
import css from './TweetsList.module.css';

const TweetsList = ({ tweets }) => {
  return (
    <div className={css.container}>
      <ul className={css.tweetList}>
        {tweets.map(tweet => (
          <TweetsItem key={tweet.id} {...tweet} />
        ))}
      </ul>
    </div>
  );
};

TweetsList.propTypes = {
  tweet: PropTypes.array,
};

export default TweetsList;
