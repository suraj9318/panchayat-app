import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostFromLocalStorage } from '../../utils/localstorage';
const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    OfficailUserData : getPostFromLocalStorage() || {}
  };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen;
      },
      storeOfficialUser: (state,{ payload }) => {
        state.OfficailUserData = payload;
      },


    }})


export const { toggleSidebar,storeOfficialUser} = userSlice.actions;
export default userSlice.reducer;