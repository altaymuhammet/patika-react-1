import axios from "axios";

const getData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: userPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const userInfo = {
    user,
    posts: userPosts,
  };

  return userInfo;
};
export default getData;
