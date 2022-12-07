var input = document.getElementById("text");
input.addEventListener("keypress", function (event) {
  var inputVal = document.getElementById("text").value;
  var color = document.querySelector(
    'input[name="fav_language"]:checked'
  ).value;
  if (event.key === "Enter") {
    document.getElementById("text").value = "";

    document.getElementById("ticket").style.display = "none";

    document.getElementById("rowticket").innerHTML =
      document.getElementById("rowticket").innerHTML +
      `<div class="col-lg-4" onclick="remove(this)"><div class="card bg-light"><div style = "background: ${color}; height: 5px"></div><div class="card-body">${inputVal}</div></div></div>`;
    document.getElementById(id).style.display = "none";
  }
});

var trash = false;

function myFunction() {
  document.getElementById("ticket").style.display = "block";
}

function myTrash() {
  if (trash == false) {
    trash = true;
  } else {
    trash = false;
  }
}

function remove(el) {
  var element = el;
  if (trash == true) {
    element.remove();
  }
}
