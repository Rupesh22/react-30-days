import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Subscribe from './components/Subscribe';

function App() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Subscribe />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
