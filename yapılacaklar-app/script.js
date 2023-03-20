'use strict';

const input = document.querySelector(".input");
const BtnEkle = document.querySelector(".ekle");
const Gorevler = document.querySelector(".ul");

BtnEkle.addEventListener("click", ()=>{
    let İnputValue = input.value;

    let div =  document.createElement("div");
    div.classList.add("active");
    let pText = document.createElement("p");
    pText.classList.add("pText");
    let btnsil =  document.createElement("button");
    let btnciz =  document.createElement("button");

    Gorevler.appendChild(div);
    div.appendChild(pText);
    div.appendChild(btnsil);
    div.appendChild(btnciz);

    pText.innerHTML = İnputValue;
    btnsil.innerHTML = "Sil";
    btnciz.innerHTML = "Yapıldı";

    btnsil.addEventListener("click", ()=>{
        div.remove();
    })

    btnciz.addEventListener("click", ()=>{
        pText.style.textDecoration = "line-through";
    })
});




