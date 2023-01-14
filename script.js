var warningTimeoutID = undefined;
var logoutTimeoutID = undefined;
const events = ["click", "mousemove", "mousedown", "keydown"];
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/loggedUser.html") {
    warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
    events.forEach((event) => {
      window.addEventListener(event, eventHandler);
    });
  } else {
    const submit = document.querySelector("input[type=submit]");
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      //    request is sent to the server with user crendentials
      // server has authenticated the user
      window.location.href = "loggedUser.html";
      clearTimeout(warningTimeoutID);
      clearTimeout(logoutTimeoutID);
      events.forEach((event) => {
        window.removeEventListener(event, eventHandler);
      });
    });
  }
});

function callTimeoutFunc() {
  const div = document.createElement("div");
  div.className = "warning";
  div.textContent =
    "you have been inactive for sometime and now you are being loggedout";
  body.prepend(div);
  logoutTimeoutID = setTimeout(() => {
    window.location.href = "index.html";
  }, 4000);
}

function eventHandler() {
  if (logoutTimeoutID) {
    clearTimeout(logoutTimeoutID);
    if (body.children[0].classList.contains("warning"))
      body.removeChild(body.firstElementChild);
  }
  clearTimeout(warningTimeoutID);
  warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
}
