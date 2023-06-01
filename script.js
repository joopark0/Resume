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

let seemorediv = document.querySelector('#secondwork');
let seemorebutton = document.querySelector('#more');
let seecounter = 0;
function seemore() {
  seemorediv.classList.remove('hidden');
  seemorediv.classList.add('temp');
  setTimeout(function () {
    seemorediv.classList.remove('temp');
    seemorediv.classList.add('active');
    seemorediv = document.querySelector('#thirdwork');
    seecounter = seecounter + 1;
    if (seecounter === 2) {
      seemorebutton.classList.add('hidden');
    }
  }, 500);
}
