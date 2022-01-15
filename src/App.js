import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile'
import {useAuth0} from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <h1>Application</h1>
      {
        isAuthenticated ? <LogoutButton/> : <LoginButton/>
      }
      <Profile/>
    </div>
  );
}

export default App;
