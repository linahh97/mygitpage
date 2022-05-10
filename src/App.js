import * as React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import './index.css';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/mygitpage" element={<Home/>}/>
      <Route path="/mygitpage/about" element={<About/>}/>
      <Route path="/mygitpage/privacy" element={<Privacy/>}/>
    </Routes>
  </div>
  );
}
function Home(){
  return (
    <>
      <nav>
        <ul className='my-list'>
          <li>Home</li>
          <li><Link to="/mygitpage/about">About</Link></li>
          <li><Link to="/mygitpage/privacy">Privacy</Link></li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to the homepage</h2>
        <p>You will get more information later...</p>
      </main>
    </>
  )
}

function About(){
  return (
    <>
      <nav>
        <ul className='my-list'>
          <li><Link to="/mygitpage/">Home</Link></li>
          <li>About</li>
          <li><Link to="/mygitpage/privacy">Privacy</Link></li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to read more information about me</h2>
        <p>I am a woman living far north in a country called Sweden, blahblah...</p>
      </main>
      <section></section>
      <footer></footer>
    </>
  )
}

function Privacy(){
  return (
    <>
      <nav>
        <ul className='my-list'>
          <li><Link to="/mygitpage/">Home</Link></li>
          <li><Link to="/mygitpage/about">About</Link></li>
          <li>Privacy</li>
        </ul>
      </nav>
      <main>
        <h2>Privacy</h2>
        <p>We are very private...</p>
      </main>
    </>
  )
}
export default App;
