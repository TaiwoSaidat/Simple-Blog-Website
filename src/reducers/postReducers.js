// reducers/postReducers.js
const initialState = {
  posts: [],
  loading: true,
  error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_POST_START":
        return { ...state, loading: true, error: null };
      case "FETCH_POST_SUCCESS":
        return { ...state, loading: false, posts: action.payload };
      case "FETCH_POST_FAIL":
        return { ...state, loading: false, error: action.payload };
      case "CREATE_POST_START":
        return { ...state, loading: true };
      case "CREATE_POST_SUCCESS":
        return {
          ...state,
          loading: false,
          posts: [...state.posts, action.payload],
        };
      case "CREATE_POST_FAIL":
        return { ...state, loading: false, error: action.payload };
      case "UPDATE_POST_SUCCESS":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };
      case "DELETE_POST_SUCCESS":
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      case "LIKE_POST_SUCCESS":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id
              ? { ...post, likes: action.payload.likes } // Only update likes
              : post
          ),
        };

      case "DISLIKE_POST_SUCCESS":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id
              ? { ...post, dislikes: action.payload.dislikes } // Only update dislikes
              : post
          ),
        };

      // case 'LIKE_POST_SUCCESS':
      //     return {
      //       ...state,
      //       posts: state.posts.map((post) =>
      //         post.id === action.payload.id
      //           ? { ...post, ...action.payload }
      //           : post
      //       ),
      //     };
      // case 'DISLIKE_POST_SUCCESS':
      //     return {
      //       ...state,
      //       posts: state.posts.map((post) =>
      //         post.id === action.payload.id
      //           ? { ...post, ...action.payload }
      //           : post
      //       ),
      //     };
      default:
        return state;
    }
};



export default postsReducer;
// const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_POST_START":
//       return { ...state, loading: true, error: null };
//     case "FETCH_POST_SUCCESS":
//       return { ...state, loading: false, posts: action.payload };
//     case "FETCH_POST_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     case "CREATE_POST_START":
//       return { ...state, loading: true };
//     case "CREATE_POST_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         posts: [...state.posts, action.payload],
//       };
//     case "CREATE_POST_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


// const initialState = {
//     posts: [],
//     loading: true,
//     error: null
// }

// const postsReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_POST_START":
//       return { ...state, loading: true, error: null };
//     case "FETCH_POST_SUCCESS":
//       return { ...state, loading: false, posts: action.payload };
//     case "FETCH_POST_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
