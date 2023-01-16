function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin1@rhyzen16"&& password=="RspyCMDS")
{
    alert("login succesfully");
    window.open("https://bobbyhadz.com/blog/javascript-window-location-href-is-not-a-function");
}
else
{
    alert("login failed");
}


}
