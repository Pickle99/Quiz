import { createSlice } from '@reduxjs/toolkit';

export const reducerSlice = createSlice({
  name: 'quizvalue',
  initialState: {
    question_category: '',
    question_difficulty: '',
    question_type: '',
    amount_of_question: 50,
    score: 0,
  },
  reducers: {
    handleCategoryChange: (state, action) => {
      return {
        ...state,
        question_category: action.payload,
      };
    },
    handleDifficultyChange: (state, action) => {
      return {
        ...state,
        question_difficulty: action.payload,
      };
    },
    handleTypeChange: (state, action) => {
      return {
        ...state,
        question_type: action.payload,
      };
    },
    handleAmountChange: (state, action) => {
      return {
        ...state,
        amount_of_question: action.payload,
      };
    },
    handleScoreChange: (state, action) => {
      return {
        ...state,
        score: action.payload,
      };
    },
  },
});

export const {
  handleAmountChange,
  handleCategoryChange,
  handleDifficultyChange,
  handleScoreChange,
  handleTypeChange,
} = reducerSlice.actions;

export default reducerSlice.reducer;
