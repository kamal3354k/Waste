console.log("working")
let UserID = document.getElementById("UserID");
let UserPass = document.getElementById("UserPassword");
let LoginBtn = document.getElementById("loginBTN");

LoginBtn.addEventListener("click",()=>{
    
if(UserID.value=="Kamal" && UserPass.value=="12345"){
    LoginBtn.setAttribute("href","../index.html")
    console.log("true")
}
else{
    LoginBtn.setAttribute("href","#")
    console.log("false")
    document.querySelectorAll("input")[0].style.borderColor="red"
    document.querySelectorAll("input")[1].style.borderColor="red"
}
})
