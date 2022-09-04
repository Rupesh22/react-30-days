import './index.css';

import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Subscribe from './components/Subscribe';
import UserProfile from './components/UserProfile';
import Skill from './components/Skill';
import NavBar from './components/NavBar';
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const [theme] = useContext(ThemeContext);
  console.log('theme: ' + theme.darkMode);
  const themeStyle = theme.darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={`${themeStyle}`}>
      <NavBar />
      <UserProfile />
      <Skill />
      <Subscribe />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
