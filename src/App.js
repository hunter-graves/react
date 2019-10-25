import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child.js';
import axios from 'axios';
const App = () => {
  const [stateHello, setStateHello] = React.useState('');
  const [isToggled, setIsToggled] = React.useState(false);
  const [networkData, setNetworkData] = React.useState(null);
  const hello = 'Hello World';

  React.useEffect(() => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data);
      setNetworkData(res.data);
  }) 
  .catch(console.log);
  }
  ,[]);
let appClassName = "App";
if (isToggled) {
  appClassName = "App dark";
}

  return (
    <div className={appClassName}>
      <header className="App-header">
        {networkData && (
          <div>{networkData.title} {networkData.data}</div>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {stateHello}
          Hello World
          {hello}
        </p>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? 'Toggle On' : 'Toggle Off'}
      </button>
        {isToggled && (
          <div>
            Toggle is on
          </div>
        )}

        <input
         value = {stateHello} 
        onChange = {(e) => setStateHello(e.target.value)}
        />

        <Child/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
