document.querySelector("#sideBar").addEventListener("click",function(event){
     event.preventDefault();
     let sidebar = document.createElement("div");
     sidebar.setAttribute("id","sideBarDiv");
     let backbtn=document.createElement("div");
     backbtn.setAttribute("id","backbtn");
     let hrline=document.createElement("hr");

     let bigdiv=document.createElement("div");
     bigdiv.setAttribute("id","bigdiv");

     let footer=document.createElement("div");
     footer.setAttribute("id" , "barFooter")
     let logoimg=document.createElement("img");

     let facebook=document.createElement("i");
     facebook.setAttribute("class" , "fa-brands fa-facebook-f");
     let tiwtter=document.createElement("i");
     tiwtter.setAttribute("class" , "fa-brands fa-twitter");
     let insta=document.createElement("i");
     insta.setAttribute("class" , "fa-brands fa-instagram");

     logoimg.setAttribute("src","https://d2u6vujtbrga6l.cloudfront.net/images/logo.png");
     let ibar=document.createElement("i");
     ibar.setAttribute("class","fa-solid fa-circle-left");
     let home=document.createElement("h3");
     home.innerText="Home";
     home.addEventListener("click",function(){
      window.location.href="home_page.html"
     })

     let nation=document.createElement("h3");
     nation.innerText="Nation";
     nation.addEventListener("click",function(){
      window.location.href="nation.html"
     });
     let Crime=document.createElement("p");
     Crime.innerText=">> Crime";
     let current=document.createElement("p");
     current.innerText=">> Current Affairs";
     let politics=document.createElement("p");
     politics.innerText=">> Politics";
     let other=document.createElement("p");
     other.innerText=">> Other News";

     let lifestyle=document.createElement("h3");
     lifestyle.innerText="Lifestyle";
     lifestyle.addEventListener("click",function(){
      window.location.href="lifestyle.html"
     });
     let virel=document.createElement("p");
     virel.innerText=">> Viral";
     let helth=document.createElement("p");
     helth.innerText=">> Helth";
     let relation=document.createElement("p");
     relation.innerText=">> Relationship";
     let food=document.createElement("p");
     food.innerText=">> Food";

     let technology=document.createElement("h3");
     technology.innerText="Technology";
     technology.addEventListener("click",function(){
      window.location.href="technolgy.html"
     });

     let gadgets=document.createElement("p");
     gadgets.innerText=">>Gadgets";
     let mobile=document.createElement("p");
     mobile.innerText=">> Mobiles";
     let scince=document.createElement("p");
     scince.innerText=">> Science";
     let othert=document.createElement("p");
     othert.innerText=">> Other News";

     let sports=document.createElement("h3");
     sports.innerText="Sports";
     sports.addEventListener("click",function(){
      window.location.href="sports.html"
     });

     let badminton=document.createElement("p");
     badminton.innerText=">>Badminton";
     let cricket=document.createElement("p");
     cricket.innerText=">> Cricket";
     let football=document.createElement("p");
     football.innerText=">> Football";
     let tennis=document.createElement("p");
     tennis.innerText=">> Tennis";

     let gallery=document.createElement("h3");
     gallery.innerText="Gallery";
     gallery.addEventListener("click",function(){
      window.location.href="gallary.html"
     })

     let login=document.createElement("h3");
     login.innerText="LogIn";
     login.addEventListener("click",function(){
        window.location.href="login.html"
     })
     let singup=document.createElement("h3");
     singup.innerText="SingUp";
     singup.addEventListener("click",function(){
        window.location.href="index.html"
     })
     
     bigdiv.append(home,nation,Crime,current,politics,other,lifestyle,virel,helth,relation,food,technology,technology,gadgets,mobile,scince,othert,sports,badminton,cricket,football,tennis,gallery,login,singup)
     backbtn.append(logoimg,ibar);
     footer.append(facebook,tiwtter,insta);
     sidebar.append(backbtn,hrline,bigdiv,footer);
     document.querySelector("#sidebarContener").append(sidebar)

     document.querySelector("#backbtn").addEventListener("click",function(event){
         event.preventDefault();
         document.querySelector("#sidebarContener").innerHTML=""
         //console.log("ffds")
     })
})

document.querySelector("#home1").addEventListener("click",function(){
   window.location.href="home_page.html"
})
document.querySelector("#nation1").addEventListener("click",function(){
   window.location.href="nation.html"
})
document.querySelector("#sports1").addEventListener("click",function(){
   window.location.href="sports.html"
})
document.querySelector("#technology1").addEventListener("click",function(){
   window.location.href="technolgy.html"
})
document.querySelector("#lifestyle1").addEventListener("click",function(){
   window.location.href="lifestyle.html"
})
document.querySelector("#gallery1").addEventListener("click",function(){
   window.location.href="gallary.html"
})