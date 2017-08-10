

function searchResults(){
  let url = "http://jsonplaceholder.typicode.com/users";
  let output = document.querySelector(".container");
  let userSearch = document.getElementById("userSearch").value;
  console.log(userSearch);
  if(userSearch){
    url+="?q="+userSearch;

  }
  fetch(url).then(function(response){
    response.json().then(function(data){

    for (var i = 0; i < data.length; i++) {
      let name = document.createElement("P");
      let text = document.createTextNode(data[i].name);
      name.appendChild(text);
      output.appendChild(name);
    }
    })
  })
}

//
// function reqListener(data){
//   var output= document.getElementById("container");
//   var userSearch = document.getElementById("userSearch").value;
// function searchResults(){
//   console.log(userSearch);
//   for (var i=0; i<data.length; i++){
//        if (data[i].email == userSearch) {
//            output.value += userSearch + " , " + data[i].email + " " + data[i].name;
//
//        } else {
//            alert("not found");
//        }
//     }
//   }
// }
// // var searchResults = document.getElementById("userSearch").value;
