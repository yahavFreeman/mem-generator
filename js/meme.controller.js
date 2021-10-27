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

function onDelLine(){
    delLine()
    displayMeme()
    clearInput()
}

function displayMeme(){
    draw(gCurrImg)
    setMeme(gCurrImg.id)
// var img=getImgInfo(gCurrImg.id)
var meme=getMeme()
// var num=getLine()
if (!meme.length){
    return
}
addText(meme)
var elUserInput=document.querySelector(".user-input")
elUserInput.style.display='flex'


}

function onFont(num){
var meme=getMeme()
if(!meme.length) return
    changeFont(num)
    displayMeme()
}

function onHeight(num){
    var meme=getMeme()
if(!meme.length) return
changeHeight(num)
displayMeme()
}

function onAddLine(){
    addLine()
    displayMeme()
    clearInput()
}

function onSwitchLine(){
    var meme=getMeme()
if(!meme.length) return
    switchLine()
    displayMeme()
    clearInput()
    resetGLine()
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

function onSearch(word,e){
    if(e.key==='Enter'){
    var elImgs=document.querySelectorAll('.gallery-image')

    search(word.value,elImgs)
        var elSearchBar=document.querySelector(".search-bar")
        elSearchBar.value=""
    }
}
function wordSearch(word){
    var elImgs=document.querySelectorAll('.gallery-image')
        search(word.value,elImgs)
}
function upSearchFont(word){
   var num= word.style.fontSize.split("p")
    num=+num[0]
    num+=5
    word.style.fontSize=num+"px"
    var wordSearch={value:word.innerText}
    var e={
        key:'Enter'
    }
    onSearch(wordSearch,e)
}

function showText(){
    var elWords=document.querySelector(".search-words")
    elWords.classList.toggle("read-more")
    var elBtn=document.querySelector(".read-btn")
    if(elWords.classList.contains("read-more")){
        elBtn.innerHTML="show less"
    }else{
        elBtn.innerHTML="show more"

    }
}