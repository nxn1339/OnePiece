function responsive() {
    var x = document.getElementById("menu_list");
    if (x.className === "header__navbar-list") {
      x.className += " responsive";
    } else {
      x.className = "header__navbar-list";
    }
  }