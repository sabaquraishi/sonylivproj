import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home2 from './Pages/Home2'
import SignIn from './Pages/SignIn'
import Verification from './Pages/Verification'
import WelcomeGender from './Pages/WelcomeGender'
import WelcomeBday from './Pages/WelcomeBday'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home2'} > <Home2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/signin'}  > <SignIn/> </Route>
            <Route path={process.env.PUBLIC_URL + '/verification'}  > <Verification/> </Route>
            <Route path={process.env.PUBLIC_URL + '/welcomegender'}  > <WelcomeGender/> </Route>
            <Route path={process.env.PUBLIC_URL + '/welcomebday'}  > <WelcomeBday/> </Route>
          </Switch>

      <footer className="App-footer">
      </footer>
    </div>
  );
  }

export default App;
