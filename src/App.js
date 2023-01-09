import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
// import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
        <Routes>
          <Route path = "/" exact element= {<ProductListing/>}/>
          <Route path="/product/:productId" element= {<ProductDetails/>}/>
          <Route>FakeShop - 404 Not found!!!</Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
