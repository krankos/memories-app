import Posts from "../components/Posts/Posts";

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      // return posts;
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return posts.map((post) =>
        post._id == action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
