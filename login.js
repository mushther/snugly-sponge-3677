document.querySelector("#login").addEventListener("click",myfun1);
let loginData=JSON.parse(localStorage.getItem("singup-data"));
//console.log(loginData)

function myfun1(event){
    event.preventDefault()

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    if(email=="" && password==""){
        document.querySelector("p").innerText="Enter email Id & password";
        document.querySelector("p").style.color="red"
    }else if(password==""){
        document.querySelector("p").innerText="Enter password";
        document.querySelector("p").style.color="red"
    }else if(email=="" ){
        document.querySelector("p").innerText="Enter email Id";
        document.querySelector("p").style.color="red"
    }else{
        loginData.forEach(function(ele){
            if(email==ele.email && password==ele.password){
                    window.location.href="home_page.html"
            }else if(email !==ele.email){
                document.querySelector("p").innerText="Email Wrong";
                document.querySelector("p").style.color="red"
            }else if(password !== ele.password){
                    document.querySelector("p").innerText="Password Wrong";
                    document.querySelector("p").style.color="red"
            }else {
                document.querySelector("p").innerText="Email & Password Wrong";
                document.querySelector("p").style.color="red"
            }
        }) 

    }
}