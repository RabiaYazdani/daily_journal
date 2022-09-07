import express from "express";
import bodyParser from "body-parser";
// used to make all the elements lower case.
import lodash from "lodash";
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
import { fileURLToPath } from 'url';
import  { dirname } from 'path';
const __fileUrl = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileUrl);
const homeStartingContent = "The lake or the easy weekend is the desire to want to decorate it. He was always the creator, not the time of his life. Let's be honest, let's just say it's a lot of fun. Cartoon earth dwell in this. Then leave the lion or the hotel with a warm door. Until the vengeful heads of the bow, not the members nor the members. Mattis annoys me from the arrows but he was a diesel guy. The mountains will be born with great gods and a ridiculous mus will miss life's compensation. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The vengeful life of the author eu augue to drink at the bed of the bow. I hate the memories at any laughter, but I hate the Olympics. Of course there was a lot of annoyance from the arrows at the kids.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
let postList = [];
app.use(express.static("public"));
const _ = lodash();

app.get("/",function(req,res){
    
   res.render("home",{content: homeStartingContent,posts:postList});
   

})
app.get("/contact",function(req,res){
    res.render("contact",{content: contactContent});
 })
 app.get("/about",function(req,res){
    res.render("about",{content: aboutContent});
 })

 app.get("/compose",function(req,res){
    res.render("compose");
    
 })
// this is something which is used to add multiple pages to a category. 
app.get ("/blog/:blogId",function(req,res){
 
   // here I have used javascript built-in function to lowercase all the letters
    
      const enteredTitle =   req.params.blogId.toLocaleLowerCase();    
      var lowerEnteredValue = _.lowerCase(enteredTitle);
      console.log(lowerEnteredValue);
      postList.forEach(function(element){
      const  storedTitle =element.title.toLocaleLowerCase();
      var lowerstoredTitle = _.lowerCase(storedTitle);
      console.log(lowerstoredTitle);
         if(storedTitle === enteredTitle)
         { 
         res.render("blog",{
         title: element.title,
         body:element.body});
         }
      })
    
    })

 app.post("/compose",function(req,res ){
  const post= {
        title : req.body.postTitle,
        body: req.body.postBody
    }
    if(post!='')
    {
        postList.push(post);
        res.redirect("/");
    
}
 })
app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
