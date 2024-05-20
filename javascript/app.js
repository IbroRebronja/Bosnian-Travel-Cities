//var siteWidth = 1280;
//var scale = screen.width /siteWidth;
//
//document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
//

//ignore this for now, was an attempt to get the 'viewing' on all devices xdd

//dropdown menu

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("mouseover", function () {
    dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseout", function () {
    dropdownContent.style.display = "none";
  });
});
