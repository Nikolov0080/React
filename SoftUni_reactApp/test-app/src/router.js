import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../src/components/navBar';
import ClassApp from '../src/components/ClassApp'

export default function Pages() {
    return (
        <Router>
           <Navigation></Navigation>
           <ClassApp></ClassApp>
        </Router>
    )

}