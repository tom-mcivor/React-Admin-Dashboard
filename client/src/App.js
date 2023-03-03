import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/icons-material/styles'
import { useMemo } from 'react'
import {useSelector } from 'react-redux'
import { themeSettings } from "theme"
import { BrowserRouter, router } from 'react-router-dom'
import Layout from 'scenes/layout'
import Dashboard from 'scenes/dashboard'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return <div className="app">
    <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Naviagte to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </ThemeProvider>
  </BrowserRouter>
  </div>
}

export default App
