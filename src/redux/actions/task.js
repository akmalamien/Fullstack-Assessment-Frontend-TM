import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: []
  },
  reducers: {
    storeTask: (state, action) => {        
        state.tasks = action.payload.data   
    },
    
    removeAllTask: state => {
      state.tasks = []
    }
  }
});

export const { storeTask, removeAllTask } = taskSlice.actions;
export default taskSlice.reducer;
