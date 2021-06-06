import { createSlice } from "@reduxjs/toolkit";

const initialEmotionState = { showsEmotion: false };

const emotionSlice = createSlice({
  name: "emotion",
  initialState: initialEmotionState,
  reducers: {
    hasEmotion(state) {},
  },
});

export const emotionActions = emotionSlice.actions;

export default emotionSlice.reducer;
