import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserState {
  data: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  data: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (username: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('User not found');
    }
    return data[0] as User;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;