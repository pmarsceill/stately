function toggleNav() {
  nav = document.getElementsByClassName('js-side-nav');
  navItems = document.getElementsByClassName('js-side-nav-item');
  activeLink = document.getElementsByClassName('js-side-nav-link-active');

  activeLink[0].addEventListener('click', function(event){
    event.preventDefault();
    toggleClasses();
  });

  function toggleClasses(){
    el = nav[0];
    className = 'open';

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
}

// Document ready
var ready = function(){
  // Handler when the DOM is fully loaded
  toggleNav();
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}
