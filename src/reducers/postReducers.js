// reducers/postReducers.js
const initialState = {
  posts: [],
  loading: true,
  error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_POST_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        case 'FETCH_POST_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'CREATE_POST_START':
            return { ...state, loading: true };
        case 'CREATE_POST_SUCCESS':
            return { ...state, loading: false, posts: [...state.posts, action.payload] };
        case 'CREATE_POST_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'UPDATE_POST_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };
        case 'DELETE_POST_SUCCESS':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
            };
        default:
            return state;
    }
};

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

export default postsReducer;

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
