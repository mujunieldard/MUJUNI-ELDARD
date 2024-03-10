document.getElementById('navbar-toggle').addEventListener('click', function () {
  var sideNav = document.getElementById('mySidenav');
  this.classList.toggle('active');
  if (sideNav.style.width === '250px') {
    sideNav.style.width = '0';
  } else {
    sideNav.style.width = '250px';
  }
});

