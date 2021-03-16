import React, { useState } from 'react'
import { AppRouter } from './components/AppRouter'
import { UserContext } from './components/UserContext';


function MainApp() {

  const [user, setUser] = useState({})


  return (
    <div >
      <UserContext.Provider value={{ user, setUser }}>

        <AppRouter />

      </UserContext.Provider>

    </div>
  );
}


export default MainApp;
