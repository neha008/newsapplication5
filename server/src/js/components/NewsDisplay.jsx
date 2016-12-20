import React from 'react';

export default class NewsDisplay extends React.Component{

constructor(){
  super();
     this.DeleteNews=this.DeleteNews.bind(this);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
     this.Update=this.Update.bind(this);
     this.state={Commentsdata:" "};
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
     this.Update=this.Update.bind(this);
     this.state={Commentsdata:" "};
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
     this.Update=this.Update.bind(this);
     this.state={Commentsdata:" "};
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
     this.Update=this.Update.bind(this);
     this.state={Commentsdata:" "};
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
}
DeleteNews()
{

$.ajax({

        url: " http://localhost:8095/news/delete",
        type: "DELETE",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        data : this.props.news,
=======
        data:this.props.news,
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        data:this.props.news,
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        data:this.props.news,
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
        data:this.props.news,
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
        success : function(msg){

       alert("deleted successfully");

           /*msg reprewsents JSON data of news headlines sent back by external API*/

           }.bind(this),

        error: function(err){

            console.log("Error occured "+err);

        }.bind(this)
});
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
Update(){

 $.ajax({
  url: "http://localhost:8095/news/update",
  type: "PUT",
 data:'Title='+this.props.news.Title+'&Comments='+this.state.Commentsdata,
  success : function(msg){

  alert("comments updated")

}.bind(this),
  error: function(err){
  console.log(this.props.news.Title);
    console.log("error in Updating Comments");
  }.bind(this)
});
}
toUpdate(arg){
 this.setState({Commentsdata:arg.target.value});
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091



render(){

return (

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<div>
          <div className="jumbotron">
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
              <div className="col-sm-1">
              </div>
                  <div className="col-sm-5">
                    <img src={this.props.news.urlToImage} width="500px" height="300px"/>


                  </div>
                <div className="col-sm-5">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
                <h4>{this.props.news.Author}</h4>
                <h6>{this.props.news.Title}</h6>
                <h6>{this.props.news.Description}</h6>
                <h6>{this.props.news.PublishedAt}</h6>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <h5>Comments :  {this.props.news.Comments}</h5>


>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                <h5>Comments :  {this.props.news.Comments}</h5>


>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                <h5>Comments :  {this.props.news.Comments}</h5>


>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
                <h5>Comments :  {this.props.news.Comments}</h5>


>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <button type="button" className="btn btn-info" onClick={this.DeleteNews}>Delete</button>
=======
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
=======
>>>>>>> a3359026b23cad59e283b8902539b20dbb0dd091
              <h4>  Comment :</h4><textarea onChange={this.toUpdate.bind(this)}>{this.state.Commentsdata}</textarea>
              <br/>
                  <button type="button" className="btn btn-info" onClick={this.Update.bind(this)}>Update</button>
                  <button type="button" className="btn btn-info" onClick={this.DeleteNews} style={{margin:"10px"}}>Delete</button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
)
}
}
