var indexValue = 1;
showImg(indexValue);

function nextSlide(e) {
    showImg(indexValue = e);
}

function next(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll(".images");
    const list = document.querySelectorAll(".btn-item");

    if(e > img.length){
        indexValue = 1;
    }

    if(e <1 ){
        indexValue = img.length;
    }

    for(i = 0; i<img.length; i++){
        img[i].style.display ="none";
    }

    for(i = 0; i<img.length; i++){
        list[i].style.backgroundColor ="white";
    }

    img[indexValue -1].style.display = "block";
    list[indexValue -1].style.backgroundColor = "black";

}


var index = 1;
showShip(index);

function nextShip(n) {
    showShip(index = n);
}

function showShip(n) {
    const imag = document.querySelectorAll(".c_images");
    const listnext = document.querySelectorAll(".content__slide div");
    var i;

    if(n > imag.length){
        index = 1;
    }

    if(n < 1){
        index = imag.length;
    }

    for(i = 0; i<imag.length; i++){
        imag[i].style.display ="none";
        listnext[i].style.backgroundColor ="black";
    }
    imag[index -1].style.display = "block";
    listnext[index -1].style.backgroundColor = "white";
}

function nextText(params) {
    document.getElementById("name").innerHTML = "Thousand Sunny";
    document.getElementById("start").innerHTML = "Xuất hiện: Chapter 436; Episode 321";
    document.getElementById("end").innerHTML = "Lần cuối xuất hiện: Đến Giờ";
}

function pressText(params) {
    document.getElementById("name").innerHTML = "Going Merry";
    document.getElementById("start").innerHTML = "Xuất hiện: Chapter 41; tập 17";
    document.getElementById("end").innerHTML = "Lần cuối xuất hiện: Chapter 430/ tập 312";
}


function scroll() {
    window.scrollBy(100,100);
}