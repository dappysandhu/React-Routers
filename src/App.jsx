import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { About, Contact, Events, History, Home, Locations, ProductDetails, Products, Services } from './components/pages'
import Whoops404NotFound from './components/Whoops404NotFound'
import NavBar from './components/navbar'
import EventDetails from './components/EventDetails'


function App() {

  // To navigate to certain URLs
  const navigate = useNavigate()
  const goBack =() => {
    setTimeout(() => {
      navigate("/");
    },3000)
  }
  return (
    <>
    <NavBar/>
      <Routes>
        {/* This "/" will be the home route which will be the local host address*/}
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="services" element={<Services goBack={goBack} /> } />
          <Route path="locations" element={<Locations />} />
        </Route>

        <Route path="events" element={<Events />} />
        <Route path="events/:year/:month" element={<EventDetails/>} />


        <Route path="products" element={<Products />} />

        <Route path="products/:id" element={<ProductDetails  />} />


        <Route path="contact" element={<Contact />} />

<Route path="*" element={<Whoops404NotFound /> } />

      </Routes>
    </>
  );
}

export default App;
