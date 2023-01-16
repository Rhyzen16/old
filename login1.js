function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin1@rhyzen16"&& password=="RspyCMDS")
{
    alert("login succesfully");
    window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload');
    window.assign("");
}
else
{
    alert("login failed");
}


}
