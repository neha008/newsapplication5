import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';

import NavBar from './components/NavBar.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import login from './components/login.jsx';
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
import login from './components/login.jsx';
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
import login from './components/login.jsx';
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
import login from './components/login.jsx';
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
import FavNewsComponent from './components/FavNewsComponent.jsx';

class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>

    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={MainComponent}>
             <Route path="/home" component={HomeComponent}/>
             <IndexRoute component={HomeComponent}/>

             <Route path="/FavNews" component={FavNewsComponent}/>

             <Route path="/About" component={About}/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
             <Route path="/login" component={login}/>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
             <Route path="/login" component={login}/>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
             <Route path="/login" component={login}/>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
             <Route path="/login" component={login}/>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091

</Route>
</Router>,document.getElementById('content'));
