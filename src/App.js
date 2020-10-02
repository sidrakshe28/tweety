import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import "./App.css" ;

function App() {
  return (
    <div className="app">
      
      {/* Sidebar */}
     <Sidebar/>

      {/* feed */}
      <Feed/>

      {/*widegts */}
    </div>
    
   
  );
}

export default App;
