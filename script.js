//data retreiving
function ajax() {
  const xhr = new XMLHttpRequest(),
    url = "./data.json";
  var data;

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      createItem(data);
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

function createItem(data) {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.classList.add("content-div");
    let name = document.createElement("h1");
    let desc = document.createElement("p");
    let img = document.createElement("img");

    // writes language name in the h1
    name.innerHTML = data[i].name;
    name.onclick = function() {
      clickElement(data[i].id);
    };

    //writes description in the p
    desc.innerHTML = data[i].description;
    desc.style.display = "none";

    //creates image in the img
    img.style.display = "none";
    img.setAttribute("alt", data[i].image);
    img.setAttribute(
      "src",
      "https://cdn.glitch.com/3d571074-6ddd-4edc-b6e5-2a7bb1c0ae74%2F".concat(
        data[i].image
      )
    );
    img.classList.add("lang-logo");

    div.appendChild(name);
    div.appendChild(desc);
    div.appendChild(img);

    document.getElementById("container").appendChild(div);
  }
}

function clickElement(id) {
  if (document.getElementById("container").childNodes[id].childNodes[1].style.display == "none") {
    for (let i = 1; i < document.getElementById("container").childNodes[id].childNodes.length; i++) {
      document.getElementById("container").childNodes[id].childNodes[i].style.display = "block";
    }
  } else{
    for (let i = 1; i < document.getElementById("container").childNodes[id].childNodes.length; i++) {
      document.getElementById("container").childNodes[id].childNodes[i].style.display = "none";
    }
  }
}

window.onload = function() {
  let div = document.createElement("div");
  div.setAttribute("id", "container");
  document.getElementsByTagName("body")[0].appendChild(div);
  ajax();
};
