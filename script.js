const Mustache = require("mustache"); 
var fs = require('fs')
var createHTML = require('create-html')
//var fs = require('fs');
var pdf = require('html-pdf');

 
main();
async function main(){
    var myData;
    var data={};
    myData=require("./twit_thread.json"); 
    data= await myData;
    console.log(data);
    var tweetData={
      tweets:data
    }
    console.log(tweetData);
      var Template2='<div> {{#tweets}}<h2>Hello {{tweet}}</h2> <br></br> {{name}}{{/tweets}} </div>'
      var info=Mustache.render(Template2,tweetData);
      console.log(info) 
      var html = createHTML({
        title: 'Twindle',
        body:info
      })
      // fs.writeFile('output.html', html, function (err) {
      //   if (err) console.log(err)
      // })
      var options = { format: 'Letter' };
      //convert 
      pdf.create(html, options).toFile('./output.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
      });
      
         
}


