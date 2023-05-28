// бургер
const borger = document.querySelector(".adaptiv_header_borger"); 
// крестик
const krest = document.querySelector(".adaptiv_header_krest");
// хедер
const header = document.querySelector(".adaptiv_header"); 
// Появляющийся блок
const Blockheader = document.querySelector(".adaptiv_header-block"); 
borger.onclick = function () {
    borger.style.display = "none";
    header.style.height = "331px";
    krest.style.display = "initial";
    Blockheader.style.display = "flex";
}
krest.onclick = function () {
    krest.style.display = "none";
    borger.style.display = "initial";
    header.style.height = "60px";
    Blockheader.style.display = "none";
}

// Выежающий блок
const strelka = document.querySelector(".containers-adaptiv__two-block-strelka"); 
const twoBlock = document.querySelector(".containers-adaptiv__two-block"); 
const twoBlockText = document.querySelector(".containers-adaptiv__two-block-body-span1"); 
const twoBlockBody = document.querySelector(".containers-adaptiv__two-block-body"); 
strelka.onclick = function () {
    strelka.style.display = "none";
    twoBlock.style.height = "690px";
    twoBlockBody.style.overflow = "inherit";
    twoBlockText.classList.remove('containers-adaptiv__two-block-body-span1');
    twoBlockText.classList.add('containers-adaptiv__two-block-body-span2');
}
// Выежающий блок 2
const strelka2 = document.querySelector(".containers-adaptiv__six-block-strelka"); 

const sixSlider = document.querySelector(".containers-adaptiv__six-block-slider");
const sixBlock = document.querySelector(".containers-adaptiv__six-block"); 
const sixText =  document.querySelector(".containers-adaptiv__six-block-slider-item-p");
const p2 =   document.querySelector(".p2");
const p3 =   document.querySelector(".p3");
strelka2.onclick = function () {
    strelka2.style.display = "none";
    sixBlock.style.height = "800px";
    sixSlider.style.height = "680px";
    sixText.classList.remove('containers-adaptiv__six-block-slider-item-p');
    p2.classList.remove('containers-adaptiv__six-block-slider-item-p');
    p3.classList.remove('containers-adaptiv__six-block-slider-item-p');
    sixText.classList.add('containers-adaptiv__six-block-slider-item-p2');
    p2.classList.add('containers-adaptiv__six-block-slider-item-p2');
    p3.classList.add('containers-adaptiv__six-block-slider-item-p2');

}