import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Subscribe from './components/Subscribe';
import UserProfile from './components/UserProfile';
import Skill from './components/Skill';

function App() {
  return (
    <div style={{minHeight:'100vh'}}>
        <UserProfile />
        <Skill />
        <Subscribe />
        <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
