function toggleMainNav() {
  var nav = document.getElementsByClassName('js-site-nav-list');
  var navItems = document.getElementsByClassName('js-site-nav-item');
  var navTrigger = document.getElementsByClassName('js-site-nav-trigger');

  if (navTrigger.length > 0) {
    navTrigger[0].addEventListener('click', function(event){
      event.preventDefault();
      toggleClasses(nav[0], 'open');
      this.classList.toggle('open')
    });
  }
}

function toggleSideNav() {
  var nav = document.getElementsByClassName('js-side-nav');
  var navItems = document.getElementsByClassName('js-side-nav-item');
  var activeLink = document.getElementsByClassName('js-side-nav-link-active');

  if (activeLink.length > 0) {
    activeLink[0].addEventListener('click', function(event){
      event.preventDefault();
      toggleClasses(nav[0], 'open');
    });
  }
}

function toggleClasses(el, className){
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);
    el.className = classes.join(' ');
  }
}

// Document ready
var ready = function(){
  // Handler when the DOM is fully loaded
  toggleMainNav();
  toggleSideNav();
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}
