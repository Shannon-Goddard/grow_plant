//When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Function to change info on click//
$("a").click(function() {
  const d = data;
  //Change logo, strain, Grow, Sativa, THC, CBD, info, and more_info on user selection of search drop
  for (let value of d.values()) {
    var height, gif, info, Index;
    
    height = value.height;
    info = value.info;
    gif = value.gif;
    Index = this.id;
    
    $("#image").attr("src" , d[Index].gif).show();
    $("#height").text(d[Index].height);
    $("#info").text(d[Index].info);
    $("#more_info").show();
  }
});
//Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon//
function navFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}