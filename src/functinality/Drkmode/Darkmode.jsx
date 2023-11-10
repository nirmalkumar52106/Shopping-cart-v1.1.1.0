// import React, { useState, useEffect } from 'react';

// function Darkmode() {
//     const [theme, setTheme] = useState('light');
//     const [btnon, seton] = useState("light")

//     const toggleTheme = () => {
//         if (theme === 'light') {
//             setTheme('dark');
//         } else {
//             setTheme('light');
//         }
//         if (btnon === "light") {
//             seton(<i class="fa-solid fa-toggle-on"></i>)
//         } else {
//             seton(<i class="fa-duotone fa-toggle-large-off"></i>)
//         }
//     };
//     console.log(btnon)
//     useEffect(() => {
//         document.body.className = theme;
//     }, [theme]);
//     return (
//         <div className={`App ${theme}`}>
//             <button className='togglebtn' onClick={toggleTheme}>{btnon}</button>
//         </div>
//     );
// }
// export { Darkmode }




// import { createContext, useState } from "react";
// import ReactSwitch from "react-switch";
// import { Home } from "../../screens/Home";

// export const ThemeContext = createContext(null);

// function Darkmode() {
//     const [theme, setTheme] = useState("dark");

//     const toggleTheme = () => {
//         setTheme((curr) => (curr === "light" ? "dark" : "light"));
//     };
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <div className="App" id={theme}>
                
//                 <div className="switch">
//                     <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
//                     <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
//                 </div>
//             </div>
//         </ThemeContext.Provider>
//     );
// }

// export { Darkmode }

import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function Darkmode(){
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  );
};

export{Darkmode}