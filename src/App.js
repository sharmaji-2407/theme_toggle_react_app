import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from 'react-bootstrap';
import './App.css';

const App = () => {

  const [tog_dark, settog_dark] = useState(false);
  const [theme, settheme] = useState("light")
  const handleclick = () => {
    settog_dark(!tog_dark)
    if(!tog_dark)
    settheme("dark");
    
    else
    settheme("light");
  };
  const theme_card = theme+"_card";

  return (
    <div className={theme} id="main">
      <h1>React app for theme toggling</h1>
      
      <div className="toggler">
        <label className="switch">
          <input type="checkbox" checked={tog_dark} onChange={handleclick} />
          <span className="slider  round" />
        </label>
      </div>

      <div  className={theme_card+" card"} style={{width: 400}}>
        <img className="card-img-top" src="img_avatar1.png" alt="Card image" style={{width: '100%'}} />
        <div className="card-body">
          <h4 className="card-title">{theme}</h4>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam </p>
          
        </div>
      </div>

      


      


    </div>
  );
}

export default App;
