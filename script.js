const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  for (tabs of tablinks) {
    tabs.classList.remove('active-link');
  }
  for (tabs of tabcontents) {
    tabs.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.querySelector('.sidemenu');
function openmenu() {
  sidemenu.classList.add('show_menu');
  sidemenu.classList.remove('hide_menu');
}
function closemenu() {
  sidemenu.classList.add('hide_menu');
  sidemenu.classList.remove('show_menu');
}
