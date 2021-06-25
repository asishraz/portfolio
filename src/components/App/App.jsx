import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Home from '../Home/Home';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/skills" component={Skills}/>
                
        
            </BrowserRouter>
        
            
        </div>
    );
}

export default App;