import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Task } from "@/models/tasks.model"

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [
    {
      id: 1,
      name: "Sample Task 1",
      completed: false,
    },
    {
      id: 2,
      name: "Sample Task 2",
      completed: true,
    },
    {
      id: 3,
      name: "Sample Task 3",
      completed: false,
    },
  ],
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        name: action.payload,
        completed: false,
      }
      state.tasks.push(newTask)
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)
      if (task) {
        task.name = action.payload.name
      }
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed)
    },
  },
})

export const { addTask, deleteTask, editTask, toggleComplete, clearCompleted } = tasksSlice.actions
export default tasksSlice.reducer
