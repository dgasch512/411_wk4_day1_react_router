import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';



function Router() {
    return(
        <div className='router'>   
            <Switch>
                <Route path ="/" exact component={Home} />
                <Route path ="/about" exact component={About} />
                <Route path ="/car/:id" exact component={Car} />
            </Switch>
        </div> 
    )
};




export default Router;