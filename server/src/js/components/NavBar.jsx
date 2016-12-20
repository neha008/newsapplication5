var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default bg-faded">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/FavNews">FavouriteNews</Link></li>

           <li><Link to="/about">About Us</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
           <li><Link to="/login">Login</Link></li>

>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
           <li><Link to="/login">Login</Link></li>

>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
           <li><Link to="/login">Login</Link></li>

>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
           <li><Link to="/login">Login</Link></li>

>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
