import React from 'react';

import Navbar from './components/navbar/navbar'
import Loginpage from './components/loginpage/loginpage';
import Footer from './components/footer/footer';
// import Hero from './Components/Hero/Hero'
// import About from './Components/About/About'
// import Services from './Components/Services/Services'
// import Mywork from './Components/MyWork/Mywork'
// import Contact from './Components/Contact/Contact'
// import Footer from './components/navbar/navbar'



const App =() => {
  

  return (
    <>
      <div>
        <Navbar/>
        <Loginpage/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
