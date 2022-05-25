import Home from './pages/Home'
import NoFound from './pages/NoFound'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Reservation from './pages/Reservation'
import Detail from './pages/Detail'
import ShoppingCar from './pages/ShoppingCar'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/iniciar-sesion" element={<Login />} />
        <Route exact path="/registrar" element={<Register />} />
        <Route exact path="/reservar" element={<Reservation />} />
        <Route exact path="/carrito" element={<ShoppingCar />} />
        <Route exact path="/detalle/:id" element={<Detail />} />
        <Route path="*" element={<NoFound />} />
      </Switch>
    </Router>
  );
}

export default App;
