// Navigation Script
let nav_menu = document.querySelector('.nav-menu');
let button_nav = document.querySelector('#button-nav');

button_nav.addEventListener('click', ()=> {
  if (nav_menu.style.display === 'none'){
    nav_menu.style.display = 'block';
  }
  else{
    nav_menu.style.display = 'none' ;
  }

});

let buttonprofile = document.querySelector('#btnprofile');
let dropdown_profile = document.querySelector('.Profiledropdown');

buttonprofile.addEventListener('click', ()=> {
  if (dropdown_profile.style.display === 'none'){
    dropdown_profile.style.display = 'flex';
  }
  else{
    dropdown_profile.style.display = 'none' ;
  }

});

buttonprofile.addEventListener('click', () => {
  if(buttonprofile.style.border === "none"){
    buttonprofile.style.border = '1px solid blue';
  }
  else{
    buttonprofile.style.border = 'none';
  }
});


// Navigation Script End

let counter = 1;
setInterval(function(){
  document.getElementById('radio' +counter).checked = true;
  counter++
  if (counter > 4){
    counter = 1;
  }
},4000);