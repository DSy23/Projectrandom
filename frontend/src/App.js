import './App.css';
import Nav from './Component/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer'; // import the Footer component
import SignUp from './Component/SignUp';// import the SignUP component



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>} />
          <Route path="/add" element={<h1>Product Add Component</h1>} />
          <Route path="/update" element={<h1>Product update Component</h1>} />
          <Route path="logout/" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Product Profile Component</h1>} />
          <Route path="/signup" element={<SignUp />}/>


        </Routes>
        <Footer /> {/* add the Footer component */}
      </BrowserRouter>
    </div>
  );
}

export default App;
