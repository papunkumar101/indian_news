
$(document).ready(function(){
  { 
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let result=JSON.parse(this.responseText);
      let res = result.articles;
     let newsHtml="";
       res.forEach(function(result) {
        console.log(result.title)
       
       let news=`
                        <div class="card mb-3" style="box-shadow:5px 10px 18px #888888;">
                              <img src="${result.urlToImage}" class="img-fluid card-img-top" alt="img" style="height:150px;">
                         <div class="card-body">
                              <h5 class="card-title" style='display:inline-block;'>${result.title}</h5>
                              <p class="card-text">${result.description}</p>
                              <div class="d-grid gap-2 col-6 mx-auto" >
                                <a href="${result.url}" class="btn btn-primary" style="box-shadow:5px 10px 18px #888888;">Read More...</a>
                              </div>
                              <p class="card-text">
                                <small class="text-muted" style="color:gray;margin-left:10px;">Published Date:${result.publishedAt}</small>
                                <small class="text-muted" style="color:red;float:right;">~${result.author}</small>
                                </p>
                         </div>
                      </div>
        `;
        newsHtml += news;
       });
      $("#data").html(newsHtml); 
       $(".nav").show();
  }else{
     $("#data").html(`<h3 style="color:gray;font-weight:bold;">sorry ,something Wrong!</h3><br><h3>Please Try After Sometime</h3>`);
     $(".nav").hide();
  }        
  if (this.readyState !== 4) {
     $("#data").html(`<div class="d-flex justify-content-center">
  <div class="spinner-border text-success" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`);
  }
 };         
 

   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=9f8102ad476e4acf9a2fbca37b35e813`; 
  xhttp.open("GET",url , true);
  xhttp.send();
});

 

 
