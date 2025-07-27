import Navbar from './Components/Navbar';
import './App.css';
import NewsBoard from './Components/Newsboard';
import React from 'react'

function App() {
  const[category,setCategory]=React.useState("general")
  return (
    <>
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
        {/* <NewsItem /> */}
    </>
  );
}

export default App;