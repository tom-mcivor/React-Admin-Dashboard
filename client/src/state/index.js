import { createSlice } from "@reducjs/toolkit"


const initialState = {
  mode: "dark"
}


export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' 'light'
    }
  }
})