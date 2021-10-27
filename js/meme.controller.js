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
    clearInput()
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
// var num=getLine()
console.log(meme)
addText(meme)
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

function onAddLine(){
    addLine()
    displayMeme()
    clearInput()
}

function onSwitchLine(){
    switchLine()
    displayMeme()
    clearInput()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onNav(whereTo){
    if (document.body.classList.contains('menu-open'))
    toggleMenu()
}

