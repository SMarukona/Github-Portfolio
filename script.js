function onHamburger() {
    var headnav = document.getElementById("my-main-nav");
    var cloaseicon = document.getElementById("xmark");
    if (headnav.className === "main-nav-item" && cloaseicon.className === "fa fa-bars fa-2xl") {
        headnav.className += " responsive";
        cloaseicon.className += " fa-solid fa-xmark fa-2xl";
    } else {
        headnav.className = "main-nav-item";
        cloaseicon.className = "fa fa-bars fa-2xl";
    }
  }