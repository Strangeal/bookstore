import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<AddBook />} />
      <Route path="/bookstore/*" element={<Categories />} />
    </Routes>
  </>
);

export default App;
