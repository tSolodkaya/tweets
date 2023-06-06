import { Link } from 'react-router-dom';

import css from './Banner.module.css';

const Banner = ({ text }) => {
  return (
    <section>
      <div className={css.hero}>
        <h1 className={css.text}>{text}</h1>
        <Link className={css.tweetLink} to="/tweets">
          Go tweets
        </Link>
      </div>
    </section>
  );
};

export default Banner;
