import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './TweetIstem.module.css';
import tweetsApi from '../../services/tweets-api';

const TweetsItem = ({ user, tweets, followers, avatar, id, isFollow }) => {
  const [isFollowTweet, setIsFollowTweet] = useState(isFollow);
  const [followersCount, setFollowersCount] = useState(followers);

  useEffect(() => {
    tweetsApi.folowTweets(id, followersCount, isFollowTweet);
  }, [id, isFollowTweet, followersCount]);

  const handleOnClick = () => {
    setIsFollowTweet(!isFollowTweet);

    if (isFollowTweet) {
      setFollowersCount(followersCount - 1);
      return;
    }
    setFollowersCount(followersCount + 1);
  };

  return (
    <li className={css.tweetCard}>
      <article>
        <img className={css.tweetImage} src={avatar} alt={user} width="62" />
        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>{followersCount} followers</p>
        <button
          className={clsx(css.buttonFollow, [
            isFollowTweet && css.buttonFollowing,
          ])}
          type="button"
          onClick={handleOnClick}
        >
          {isFollowTweet ? 'following' : 'follow'}
        </button>
      </article>
    </li>
  );
};

TweetsItem.propTypes = {
  user: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
};

export default TweetsItem;
