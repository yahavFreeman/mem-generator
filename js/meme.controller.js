'use strict'

var gElCanvas;
var gCtx;
var gCurrImg
function init() {
  gElCanvas = document.getElementById('my-canvas');
  gCtx = gElCanvas.getContext('2d');
}

function onDraw(img){
    gCurrImg=img
draw(img)
var img=getImgInfo(img.id)
setMeme(img.id)
var meme=getMeme()
addText(meme[0])
var elInput=document.querySelector(".meme-input")
elInput.style.display='inline-block'
}

function onChangeText(input){
    var inputValue=input.value
    changeText(inputValue)
onDraw(gCurrImg)
}



