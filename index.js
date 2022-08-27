

document.querySelector("#singup").addEventListener("click",myfun);
let singupArr= JSON.parse(localStorage.getItem("singup-data")) || []
function myfun(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    if(name<4 && email<10 && password<8){
        document.querySelector("p").innerText="Fill all Details";
        document.querySelector("p").style.color="red"
    }else if(name.length<4){
        document.querySelector("p").innerText="Enter Your Full Name";
        document.querySelector("p").style.color="red"
    }else if(email.length<10){
        document.querySelector("p").innerText="Enter Your Correct Email";
        document.querySelector("p").style.color="red"
    }else if(password.length<8){
        document.querySelector("p").innerText="Enter 8 Character Password";
        document.querySelector("p").style.color="red"
    }
    else{
        let obj={
            name,
            email,
            password,
        }
        
        singupArr.push(obj);
        localStorage.setItem("singup-data",JSON.stringify(singupArr));
        
        window.location.href="login.html"
        //console.log(singupArr)
    }
    
   

}
