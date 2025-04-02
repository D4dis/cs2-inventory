import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Inventory from './sections/Inventory';
import Tracker from './sections/Tracker';
import SearchUserInventory from './sections/SearchUserInventory';

const App = () => {
  return (
    <main className='bg-zinc-900 min-h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/searchInventory' element={<SearchUserInventory />} />
          <Route path='/inventory/:steamID' element={<Inventory />} />
          <Route path='/tracker' element={<Tracker />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App