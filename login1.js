function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin1@rhyzen16"&& password=="RspyCMDS")
{
     window.open("cmf2.html");
    alert("login succesfully");
}
else
{
    alert("login failed");
}


}
