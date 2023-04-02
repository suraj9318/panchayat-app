import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localstorage';
const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    OfficailUserData : getUserFromLocalStorage() || {}
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

      logoutUser: (state,) => {
        removeUserFromLocalStorage();
        state.OfficailUserData = {};

      },



    }})


export const { toggleSidebar,storeOfficialUser,logoutUser} = userSlice.actions;
export default userSlice.reducer;