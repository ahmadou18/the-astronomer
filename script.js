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
