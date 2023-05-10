import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Overview from '../pages/Overview'
import SerieDetail from '../pages/SerieDetail'
const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/serie' element={<SerieDetail />} />
    </Routes>
  )
}
export default RoutesIndex
