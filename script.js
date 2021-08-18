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

  xhr.open("GET", url, true);
  xhr.send();
}

function createItem(data) {
  let div = document.createElement("div");
  for(let i = 0; i < data.length; i++){
    let name = document.createElement("h1");
    let desc = document.createElement("p");

    // writes language name in the h1
    name.innerHTML = data[i].name;

    //writes description in the p
    desc.innerHTML = data[i].description;

    div.appendChild(name);
    div.appendChild(desc);

    document.getElementById("container").appendChild(div);
  }
}

window.onload = function() {
  let div = document.createElement("div");
  div.setAttribute("id", "container");
  document.getElementsByTagName("body")[0].appendChild(div);
  ajax();
};
