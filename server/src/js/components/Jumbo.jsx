import React from 'react';

export default class Jumbo extends React.Component{

constructor(){
    super();
        this.saveNews=this.saveNews.bind(this);
}
saveNews()
{
console.log("done");
$.ajax({

         url: "http://localhost:8095/news/adddatatodb",
         type: "POST",
         data:this.props.obj,
         success : function(msg){
        console.log("saved");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        alert(" data saved");
=======
        alert("Data successfully saved");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        alert("Data successfully saved");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        alert("Data successfully saved");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        alert("Data successfully saved");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091

            /*msg reprewsents JSON data of news headlines sent back by external API*/

            }.bind(this),

         error: function(err){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         alert("error");
=======
         alert("Error in saving data");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
         alert("Error in saving data");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
         alert("Error in saving data");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
         alert("Error in saving data");
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091

             console.log("Error occured "+err);

         }.bind(this)
});
}


render(){

return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<div>
              <div className="jumbotron" style={{margin:"15px"}}>
=======
<div style={{background:"#666666"}}>

              <div className="jumbotron" style={{margin:"15px" , background:"#999999"}}>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
<div style={{background:"#666666"}}>

              <div className="jumbotron" style={{margin:"15px" , background:"#999999"}}>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
<div style={{background:"#666666"}}>

              <div className="jumbotron" style={{margin:"15px" , background:"#999999"}}>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
<div style={{background:"#666666"}}>

              <div className="jumbotron" style={{margin:"15px" , background:"#999999"}}>
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
                  <div className="row">
                  <div className="col-12">
                  <div className="col-sm-1">



                  </div>
                      <div className="col-sm-5">
                      <img src={this.props.obj.urlToImage} alt="" width="450px" height="250px"/>
                      </div>
                    <div className="col-sm-5">
                    <h4> {this.props.obj.author} </h4>
                    <a href="{this.props.obj.url}">{this.props.obj.url}</a>
                    <h6> {this.props.obj.title}</h6>
                    <h6> {this.props.obj.description}</h6>
                    <h6> {this.props.obj.publishedAt}</h6>
                    <button type="button" className="btn btn-info" style={{margin:"10px"}} onClick={this.saveNews}>Save</button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <button type="button" className="btn btn-info" style={{margin:"10px"}}>Comment</button>
=======
                    
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                    
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                    
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                    
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
                    </div>
                    <div className="col-sm-1">



                    </div>
                  </div>
                  </div>
                </div>
          </div>


)
}
}
