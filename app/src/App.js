import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Searchbar from './components/Searchbar';
// import Page1 from './components/groceries/Page1';
import Page2 from './components/groceries/page2';
import Fruitsandvegetables from './components/fruits/Fruitsandvegetables';
import Groceries from './components/groceries/Groceries';
// import Inprogress from './components/groceries/Inprogress';
import Meat from './components/meat/Meat';
import Login from './components/Login';
import Budscard from './components/Budscard';
import Signup from './components/Signup';
// import StoreList from './components/StoreList';
// import StoreDetails from './components/StoreDetails';
// import StoreList from './components/StoreList';


function App() {
  return (
    <div>
      {/* <Fruitsandvegetables /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/stores/:storeId' element={<Budscard />} />
        <Route path='/searchbar' element={<Searchbar />} />
        <Route path='/groceries-stores' element={<Groceries />} />
        <Route path='/Fruits and Vegetables' element={<Fruitsandvegetables />} />
        <Route path='/page=1' element={<Groceries />} />
        <Route path='/page=2' element={<Page2 />} />

        {/* <Route path="/stores/:storeId" element={<StoreDetails />} /> */}
        {/* <Route path='/workinprogress' element={<Inprogress />} /> */}
         <Route path='/meat and fish stores' element={<Meat />} />
      </Routes>
        {/* <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/stores/:storeId" element={<StoreDetails />} />
        </Routes> */}
    </div>
  );
}

export default App;