import React from 'react';
import GlobalStyle from './components/GlobalStyle.js';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MoiveDetail from './pages/MovieDetail';
//Router
import {Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
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
        </div>
    );
}

export default App;

// Renders in order, so all prop exact to only render when exact.
// Wrap Routes in Switch in order to only render one match instead of all matches.
// !! Don't forget to wrap the App in the indef file with BrowserRouter !!