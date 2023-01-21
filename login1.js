function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin1@rhyzen16"&& password=="RspyCMDS")
{
    alert("login succesfully");
    locatoion.reload('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload');
}
else
{
    alert("login failed");
}


}
