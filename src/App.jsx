import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './layouts'
import { MainWrapper } from './components'
import { Main } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route element={<MainWrapper />}>
            <Route index element={<Main />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
