import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './Components/Navbar'
import About from './Components/About';

function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Switch>

            <Route exact path="/">
              <Header />
            </Route>

          </Switch>

      </Router>
    </>
  )
}

export default App
