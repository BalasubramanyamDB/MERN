import { useEffect, useState } from 'react';
import './App.css';
import { ThemeContext, ThemeContextProvider } from './context/Themes';

function App() {
  let [theme, setTheme] = useState('pink')
  let darkmode = ()=>{
    setTheme('red')
    console.log(theme)
  }
  let lightmode = ()=>{
    setTheme('pink')
    console.log(theme)
  }
useEffect(()=>{
  console.log(document.querySelector('#inner'))
  document.querySelector('#inner').style.background = theme;
},[theme])

  return (
    <ThemeContextProvider value={{theme, darkmode, lightmode}}>
      <div className='outer'>
        <h1>Another approach for useContext</h1>
          <div className='middle'>
            <p>Data</p>
              <div id = 'inner' className='inner'>
                <p>inner data</p>
                <button onClick={darkmode}> to darkmode</button>
                <button onClick={lightmode}> to lightmode</button>
              </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
