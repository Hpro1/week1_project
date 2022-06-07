import "./styles.css";

document.getElementById("add-comment").onclick = function () {
  var text = document.getElementById("input").value; //tekstikenttä
  var li = "<li>" + text + "</li>";
  document.getElementById("list").insertAdjacentHTML("beforeend", li);
  document.getElementById("input").value = "";
};

document.getElementById("remove-comments").onclick = function () {
  document.getElementById("list").innerHTML = "";
  window.confirm("Are you sure you want to delete all the comments?");
};
