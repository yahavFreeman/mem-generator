'use strict'

var gElCanvas;
var gCtx;
var gCurrImg
function init() {
  gElCanvas = document.getElementById('my-canvas');
  gCtx = gElCanvas.getContext('2d');
  resetWords(document.querySelectorAll('option'))
}

function onDraw(img){
    toggleMeme()
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

function toggleMeme(){
    document.body.classList.toggle('meme-now');
}

function onNav(whereTo){
    if (document.body.classList.contains('menu-open'))
    toggleMenu()
}

function onSearch(word,e=true){
    if(e.key==='Enter'){
    var elImgs=document.querySelectorAll('.gallery-image')
        search(word.value,elImgs)
        var elSearchBar=document.querySelector(".search-bar")
        elSearchBar.value=""
    }
}

function upSearchFont(e,word){
    event.preventDefault()
   var num= word.style.fontSize.split("p")
    num=+num[0]
    num+=5
    word.style.fontSize=num+"px"
    console.log(num)
}

function showText(){
    var elWords=document.querySelector(".search-words")
    elWords.style.overflow="visible";
    elWords.style.height="100%";
}