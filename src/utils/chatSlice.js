import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messagesDetail: [],
  },
  reducers: {
    addMessageDetail: (state, action) => {
      state.messagesDetail.splice(12, 1);
      state.messagesDetail.unshift(action.payload);
    },
    clearMessageDetail: (state) => {
      state.messagesDetail = [];
    },
  },
});

export default chatSlice.reducer;
export const { addMessageDetail, clearMessageDetail } = chatSlice.actions;
