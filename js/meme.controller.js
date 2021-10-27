'use strict'

var gElCanvas;
var gCtx;
var gCurrImg
function init() {
  gElCanvas = document.getElementById('my-canvas');
  gCtx = gElCanvas.getContext('2d');
}

function onDraw(img){
    reset()
    gCurrImg=img
    displayMeme()
    var elInput=document.querySelector(".meme-input")
elInput.value=""
}

function onChangeText(input){
    var inputValue=input.value
    changeText(inputValue)
    displayMeme()
}

function displayMeme(){
    draw(gCurrImg)
    setMeme(gCurrImg.id)
// var img=getImgInfo(gCurrImg.id)
var meme=getMeme()
addText(meme[0])
var elUserInput=document.querySelector(".user-input")
elUserInput.style.display='inline-block'

}

function onFont(num){
    changeFont(num)
    displayMeme()
}

function onHeight(num){
changeHeight(num)
displayMeme()
}

