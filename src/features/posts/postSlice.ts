import {
  PayloadAction,
  createSlice,
  nanoid,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10;
      if (random > 5) {
        resolve({
          id: nanoid(),
          title: "asyncThunk",
          content: "asyncThunkContent",
        });
      } else {
        reject("error");
      }
    }, 2000);
  });
  return data;
});

const initialState = {
  posts: [
    { id: "1", title: "First Post!", content: "Hello!" },
    { id: "2", title: "Second Post", content: "More text" },
  ],
  status: "idle",
  error: "",
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (
        state,
        action: PayloadAction<{ id: string; title: string; content: string }>,
      ) => {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(action, "---action");
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
export const addPostAsync = (title, content) => {
  return (dispatch) => {
    new Promise(() => {
      setTimeout(() => {
        dispatch(addPost(title, content));
      }, 2000);
    });
  };
};
export const selectItemByPostId = (state, postId) => {
  return state.post.find((item) => {
    return item.id === postId;
  });
};
