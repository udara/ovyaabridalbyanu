// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Provider} from "react-redux";
import store from "./redux/store"

// Pages
import BusinessCards from './pages/BusinessCards';
import BusinessCard2 from './pages/BusinessCard2';
import BusinessCard3 from './pages/BusinessCard3';
import BusinessCard4 from './pages/BusinessCard4';
import BusinessCard5 from './pages/BusinessCard5';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/bc' exact element={<BusinessCards/>}/>
                    <Route path='/bc2' element={<BusinessCard2/>}/>
                    <Route path='/bc3' element={<BusinessCard3/>}/>
                    <Route path='/bc4' element={<BusinessCard4/>}/>
                    <Route path='/bc5' element={<BusinessCard5/>}/>
                    <Route path='*' element={<BusinessCards/>}/>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App