function menuShow(){
    let menumobile = document.querySelector('.mobile-menu');
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_24dp.svg";
    } else{
        menumobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_24dp.svg";
    }
}