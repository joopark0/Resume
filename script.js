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
