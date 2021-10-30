'use strict'

var gElCanvas;
var gCtx;
var gCurrImg
function init() {
  gElCanvas = document.getElementById('my-canvas');
  gCtx = gElCanvas.getContext('2d');
  resetWords(document.querySelectorAll('option'))
  addListeners()
  gElCanvas.addEventListener('keypress', function() {
    var elInput=document.querySelector(".meme-input")
    elInput.value+=event.key
    onChangeText(elInput)
 }, false);
}

function onDraw(img){
    // _addCanvasListener()
    toggleMeme()
    reset()
    gCurrImg=img
    displayMeme()
    showBorder()
    clearInput()
}

function hide(that){
    var elHide=document.querySelector(".user-msg")
    elHide.style.display="none"
    that.style.display="none"
}

function onChangeText(input){
    var inputValue=input.value
    changeText(inputValue)
    displayMeme()
    showBorder()
}

function onDelLine(){
    delLine()
    displayMeme()
    clearInput()
    showBorder()
}

function displayMeme(){
    draw(gCurrImg)
    setMeme(gCurrImg.id)
var meme=getMeme()
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
    showBorder()

}

function onHeight(num){
    var meme=getMeme()
if(!meme.length) return
changeHeight(num)
displayMeme()
showBorder()
}

function onAddLine(){
    addLine()
    displayMeme()
    clearInput()
    showBorder()
}

function onSwitchLine(){
    var meme=getMeme()
if(!meme.length) return
    switchLine()
    displayMeme()
    clearInput()
    showBorder()
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
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

function onAddEmoji(emoji){
    var inputValue=emoji.innerText
    addLine()
    changeText(inputValue)
    displayMeme()
    showBorder()
}

function onAddSticker(id){
    displayMeme()
    addSticker(id)
    showBorder()
    // gCurrImg=gElCanvas
}
const KEY='memesDB'
const CLASS_KEY='classDB'

function onSave(){
    var imgAsDataURL=loadFromStorage(KEY)
    if(!imgAsDataURL) var imgAsDataURL=[]
    var img=gElCanvas.toDataURL("image/png")
    imgAsDataURL.push(img);
    saveToStorage(KEY,imgAsDataURL)
}

var i=0
function onLoadMemes(){
    var imgs=loadFromStorage(KEY)
    if(!document.body.classList.contains("saved-memes-only")) toggleSaved()
    if (document.body.classList.contains('meme-now')) toggleMeme()
    if (imgs){
    var elSavedImgs=document.querySelector(".saved-memes-container")
    for(i;i<imgs.length;i++)
    {
        elSavedImgs.innerHTML+=`<img src="${imgs[i]}" onclick="onDraw(this)">`
    }
}
}

function ontoggleAll(){
    if(document.body.classList.contains("saved-memes-only")) toggleSaved()
    if (document.body.classList.contains('meme-now')) toggleMeme()
    if (document.body.classList.contains('menu-open')) toggleMenu()
    var elImgs=document.querySelectorAll('.gallery-image')
    elImgs.forEach(img => {
        img.style.display='block'
    });
}

function toggleSaved(){
    document.body.classList.toggle("saved-memes-only")
}

function onAlign(direction){
    align(direction)
    displayMeme()
    showBorder()

}

function onColorChange(newColor){
    changeColor(newColor)
    displayMeme()
    showBorder()
}

