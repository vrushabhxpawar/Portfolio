let tabLinks = document.querySelectorAll('.tabLinks');
let tabContents = document.querySelectorAll('.tabContents');
let bar = document.getElementById('bar');
let sideMenu = document.getElementsByClassName('abtSection');
let closeMenu = document.getElementsByClassName('back');


function openTab(tabname) {

  for(tabLink of tabLinks){
    tabLink.classList.remove('activeLink');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('activeTab');
  }
  event.currentTarget.classList.add('activeLink');
  document.getElementById(tabname).classList.add('activeTab')
}

bar.addEventListener('click', ()=>{
    sideMenu[0].style.right = '0';
})

back.addEventListener('click', () => {
   sideMenu[0].style.right = "-250px";
})