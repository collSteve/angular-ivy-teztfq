let dropdownIsVisible = false;

let headerDropDownElement = document.getElementById("header-dropdown-section");
let headerDropDownBtn = document.getElementById("header-dropdown-btn");
let body = document.getElementById("body");

function changeDropDownVisibility() {
  if (dropdownIsVisible) {
    headerDropDownElement.style.display = "none";
    dropdownIsVisible = false;
  } else {
    headerDropDownElement.style.display = "grid";
    dropdownIsVisible = true;
  }
}

$("#header-dropdown-btn").click(changeDropDownVisibility);

$(document).click(function() {
  $("#header-dropdown-section").hide();
  dropdownIsVisible = false;
});

/* Clicks within the dropdown won't make
   it past the dropdown itself */
$("#header-dropdown-section").click(function(e) {
  e.stopPropagation();
});

$("#dropDownNav").click(function(e) {
  e.stopPropagation();
});
