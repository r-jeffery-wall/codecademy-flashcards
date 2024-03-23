import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/QuizzesSlice';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics = {
                ...state.topics,
                [id]: {
                    id: id,
                    name: name,
                    icon: icon,
                    quizIds: []
                }
            }
        }
    },
    extraReducers: {
        [addQuiz]: (state, action) => {
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;