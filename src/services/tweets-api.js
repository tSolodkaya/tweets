const BASE_URL = 'https://64674d33ba7110b663b4ab93.mockapi.io/tweets';
const PER_PAGE = 3;

const fetchTweets = page => {
  return fetch(`${BASE_URL}?page=${page}&limit=${PER_PAGE}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

const folowTweets = (id, followersCount, isFollowTweet) => {
  return fetch(`https://64674d33ba7110b663b4ab93.mockapi.io/tweets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      followers: followersCount,
      isFollow: isFollowTweet,
    }),
  });
};
const api = {
  fetchTweets,
  folowTweets,
};
export default api;
