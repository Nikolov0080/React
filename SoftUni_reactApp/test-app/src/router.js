import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../src/components/navBar';
import ClassApp from '../src/components/ClassApp'
import Counter from './components/Counter';
import Input from './components/input';
import Footer from './components/footer';


export default class Pages extends Component {
    constructor(props) {
        super(props)
        console.log();
    }

    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" >
                        <ClassApp />
                    </Route>
                    <Route exact path="/counters" >
                        <header className="App-header">
                            <Counter  key={12} counter={789} />
                            <Footer title={this.props.title}/>
                        </header>
                    </Route>

                        <Route exact path="/form" >
                            <header className="App-header">
                                <Input />
                                <Footer title={this.props.title}/>
                            </header>
                        </Route>

                       
                </Switch>
            </Router>
        )
    }
}