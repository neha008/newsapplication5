var React = require('react');
export default class login extends React.Component{
constructor(){
  super();
  this.state={username:"", password:""};
  this.check=this.check.bind(this);

}

user(username){
this.setState({"username":username.target.value});
}
pass(password){
this.setState({"password":password.target.value});
}
check(){
var login={
"username":this.state.username,
"password":this.state.password
}

$.ajax({

        url: " http://localhost:8095/users/login",
        type: "POST",


        success : function(msg){

       alert("loged in successfully");

           /*msg reprewsents JSON data of news headlines sent back by external API*/

           }.bind(this),

        error: function(err){
        alert("error")

            console.log("Error occured "+err);

        }.bind(this)
});
}

render() {
 return(
 <div>
 <strong><h4>Email :</h4></strong> <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
    <strong><h4>Password : </h4></strong><input type="password" className="form-control" name="password" placeholder="Password" required=""/>
     <button type="button" className="btn btn-info" style={{margin:"10px"}}  onClick={this.check}>Login</button>
     </div>
 );
}
}
