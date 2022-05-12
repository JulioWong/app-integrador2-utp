import Home from './pages/Home'
import NoFound from './pages/NoFound'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/iniciar-sesion" element={<Login />} />
          <Route exact path="/registrar" element={<Register />} />
          <Route path="*" element={<NoFound />} />
        </Switch>
    </Router>
  );
}

export default App;
