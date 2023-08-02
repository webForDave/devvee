import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Switch>

            <Route exact path="/">
              <Main />
            </Route>

          </Switch>

          <Footer />

      </Router>
    </>
  )
}

export default App
