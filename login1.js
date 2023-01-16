function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin1@rhyzen16"&& password=="RspyCMDS")
{
    alert("login succesfully");
    location.assign("cmf2.html");
}
else
{
    alert("login failed");
}


}
