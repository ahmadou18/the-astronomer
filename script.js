function onScroll() {
    let distance = window.pageYOffset;
    let target = 100;

    if(distance > target){
        document.querySelector(".txt-one").style.opacity = "1";
    } else{
        document.querySelector(".txt-one").style.opacity = "0";
    }
}

document.addEventListener('scroll', onScroll);

function onScrollp() {
    let distance = window.pageYOffset;
    let target = 300;

    if(distance > target){
        document.querySelector(".showtext1").style.opacity = "1";
        document.querySelector(".showtext2").style.opacity = "1";
    }
}
document.addEventListener('scroll', onScrollp);

// togglemenu

function openMenu() {
    document.querySelector('#side-menu').style.width = '250' + 'px';
    document.querySelector('.nav-open').style.display = 'none';
}

function closeMenu() {
    document.querySelector('#side-menu').style.width = '0' + 'px';
    document.querySelector('.nav-open').style.display = 'block';
}
