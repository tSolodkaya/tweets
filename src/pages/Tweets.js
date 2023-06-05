import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import tweetsApi from '../services/tweets-api';
import routes from 'routes';
import { options } from '../variables';
import DropDownForm from '../components/DropDownForm/DropDownForm';
import Button from 'components/Button/Button';
import GoBackLink from 'components/GoBackLink/GoBackLink';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(options.all);

  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? routes.HOME);

  useEffect(() => {
    tweetsApi
      .fetchTweets(currentPage)
      .then(data => {
        if (data.length === 0) {
          return Promise.reject(new Error(`Sorry, we have no tweets.`));
        }
        return setTweets(prevState => [...prevState, ...data]);
      })
      .catch(error => setError(error.message));
  }, [currentPage]);

  const handleSelect = e => {
    return setSelected(e.target.value);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const visibleTweets =
    selected === ''
      ? tweets
      : tweets.filter(tweet => {
          return tweet.isFollow.toString() === selected;
        });

  return (
    <>
      <GoBackLink location={backLinkLocationRef.current} />
      <DropDownForm select={selected} onChange={handleSelect} />
      {visibleTweets.length > 0 && <TweetsList tweets={visibleTweets} />}
      {error && <div>{error.message}</div>}
      <Button handleClick={incrementPage} />
    </>
  );
};

export default Tweets;