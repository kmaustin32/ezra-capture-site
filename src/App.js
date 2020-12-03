import React from 'react';
//Global Styles
import GlobalStyle from './components/GlobalStyle.js';
//Components
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MoiveDetail from './pages/MovieDetail';
//Router
import {Switch, Route, useLocation} from 'react-router-dom'
//Animate
import {AnimatePresence} from 'framer-motion';

function App() {

    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <AboutUs />
                </Route>
                <Route path='/work' exact>
                   <OurWork />
                </Route>
                <Route path="/work/:id">
                    <MoiveDetail />
                </Route>
                <Route path='/contact'>
                    <ContactUs />
                </Route>
            </Switch>
            </AnimatePresence> 
        </div>
    );
}

export default App;

// Renders in order, so all prop exact to only render when exact.
// Wrap Routes in Switch in order to only render one match instead of all matches.
// !! Don't forget to wrap the App in the indef file with BrowserRouter !!