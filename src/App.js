import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Calculator from './components/calculator';

const App = () => {
  return (
    <div className="app " style={{backgroundImage: "url('/main-bg.jpg')"}}>
      <Calculator />
    </div>
  );
};

export default App;
