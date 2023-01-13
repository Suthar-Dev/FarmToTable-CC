document.addEventListener("DOMContentLoaded", function() {
    var menuSections = document.querySelectorAll(".menu-section");
    var menuImageContainer = document.getElementById("menu-image-container");
    var menuImage = document.getElementById("menu-image");
  
    for (var i = 0; i < menuSections.length; i++) {
      menuSections[i].addEventListener("click", function() {
        var tag = this.getAttribute("data-tag");
        var image = "images/" + tag + ".jpg";
        menuImage.setAttribute("src", image);
        menuImageContainer.style.display = "block";
      });
    }
  });