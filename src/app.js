import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component{
	render(){
		return (<div className=" jumbotron jumbotron-fluid text-xs-center">
        <div className="container">
            <h1>React project</h1>
            <p>Bootstrap 4.0 with SASS</p>
            <p><Button /></p>
        </div>
    </div>);
	}
}