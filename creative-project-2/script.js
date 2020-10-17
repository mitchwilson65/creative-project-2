document.getElementById("generator").addEventListener("click",function(event) {
  event.preventDefault();
  const url = "https://api.kanye.rest";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      var response = "<p>" + json.quote + "<br><br></p>";
      var temp = "";
      var temp2 = "";
      temp = document.getElementById("first-quote").innerHTML;
      document.getElementById("first-quote").innerHTML = response;
      temp2 = document.getElementById("second-quote").innerHTML;
      document.getElementById("second-quote").innerHTML = temp;
      temp = document.getElementById("third-quote").innerHTML;
      document.getElementById("third-quote").innerHTML = temp2;
      temp2 = document.getElementById("fourth-quote").innerHTML;
      document.getElementById("fourth-quote").innerHTML = temp;
      temp = document.getElementById("fifth-quote").innerHTML;
      document.getElementById("fifth-quote").innerHTML = temp2;
      temp2 = document.getElementById("sixth-quote").innerHTML;
      document.getElementById("sixth-quote").innerHTML = temp;
      temp = document.getElementById("seventh-quote").innerHTML;
      document.getElementById("seventh-quote").innerHTML = temp2;
      temp2 = document.getElementById("eighth-quote").innerHTML;
      document.getElementById("eighth-quote").innerHTML = temp;
      temp = document.getElementById("ninth-quote").innerHTML;
      document.getElementById("ninth-quote").innerHTML = temp2;
      temp2 = document.getElementById("tenth-quote").innerHTML;
      document.getElementById("tenth-quote").innerHTML = temp;
    });
});
