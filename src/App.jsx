// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Provider} from "react-redux";
import store from "./redux/store"

// Pages
import BusinessCards from './pages/BusinessCards';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/bc' exact element={<BusinessCards/>}/>
                    <Route path='*' element={<BusinessCards/>}/>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App