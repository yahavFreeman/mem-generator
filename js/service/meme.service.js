'use strict'
var gLine=0
var gScrollLine=0
var gKeywords = {'happy': 12,'funny puk': 1} 
var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny']},
{id: 2, url: 'img/2.jpg', keywords: ['happy']}]; 
var gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    isDrag:false,
    lines: [ { txt: 'I never eat Falafel', 
    size: 50, 
    align: 'center', 
    color: 'white',
    height:100,
    x:100,
    isSticker:false
} ] 
}
var gStickerCounter=0
var gStickers=[]


function draw(img){
    // if (img.id!=='my-canvas')
    gElCanvas.height=(img.height*gElCanvas.width)/img.width
    var memeImg = img
    gCtx.drawImage(memeImg,0,0,gElCanvas.width,gElCanvas.height)
    addStickersToNewImg()
}
function setGsticker(id){
    var sticker={
    }
    sticker.id=id
    sticker.isDrag=false
    sticker.size=100
    sticker.height=300
    sticker.x=300
    gStickers.push(sticker)
    addLine()
    if(gLine===1){
        sticker.height=gElCanvas.height-100
    }
    gMeme.lines[gLine].isSticker=sticker
    gMeme.lines[gLine].height=sticker.height
    gMeme.lines[gLine].x=sticker.x
    gMeme.lines[gLine].size=sticker.size
}

function addSticker(id){
    setGsticker(id)
    var elStickerImg=document.querySelector(`#${id}`)
    gCtx.drawImage(elStickerImg,gStickers[gStickerCounter].x,gStickers[gStickerCounter].height,gStickers[gStickerCounter].size,gStickers[gStickerCounter].size)
    gStickerCounter+=1
}

function addStickersToNewImg(){
    gStickers.forEach(sticker => {
    var elStickerImg=document.querySelector(`#${sticker.id}`)
    gCtx.drawImage(elStickerImg,sticker.x,sticker.height,sticker.size,sticker.size)
    });
}

function reset(){
     gMeme = { 
        selectedImgId: 1, 
        selectedLineIdx: 0, 
        isDrag:false,
        lines: [ { txt: 'I never eat Falafel', 
        size: 50, 
        align: 'center', 
        color: 'white',
        height:100,
        x:gElCanvas.width/2,
        isSticker:false
    }] 
    }
    gStickers=[]
    gLine=0
    gStickerCounter=0

}
function getImgInfo(id){
var img=gImgs.filter(img=>{
    return (img.id===id)
})
return img
}

function setLine(line){
    gLine=line
}

function setMeme(id){
gMeme.selectedImgId=id
}

function setXMemepos(){
    gMeme.lines[gLine].x=gElCanvas.width/2
}

function getMeme(){
    return gMeme.lines
}

function getMemeDrag(){
    return gMeme.isDrag
}

function getLine(){
    return gLine
}

function setGline(indx){
    gLine=indx
}

function addText(memeLines){
    memeLines.forEach(meme => {
        if(!meme.isSticker) {
            gCtx.font=`${meme.size}px Impact`;
            gCtx.textAlign = `${meme.align}`;
            gCtx.fillStyle = `${meme.color}`;
            gCtx.strokeStyle='black';
            gCtx.fillText(`${meme.txt}`,`${meme.x}`,`${meme.height}`)
            gCtx.strokeText(`${meme.txt}`,`${meme.x}`,`${meme.height}`) 
        }

    });

}

function clearInput(){
    var elInput=document.querySelector(".meme-input")
    elInput.value=""
    if(gMeme.lines.length)
    elInput.placeholder=`${gMeme.lines[gLine].txt}`
}
function prevInput(){
    var elInput=document.querySelector(".meme-input")
    elInput.placeholder=`${gMeme.lines[gLine].txt}`
}

function changeText(value){
    gMeme.lines[gLine].txt=value
    return gMeme.lines
}

function align(direction){
    gMeme.lines[gLine].align=direction
}
function changeColor(newColor){
    gMeme.lines[gLine].color=newColor
}

function delLine(){
    gMeme.lines.splice(gLine,1)
    gLine-=1
}

function changeFont(num){
    if(gMeme.lines[gLine].isSticker) gMeme.lines[gLine].isSticker.size+=num
    gMeme.lines[gLine].size+=num
}

function changeHeight(num){
    if(gMeme.lines[gLine].isSticker) gMeme.lines[gLine].isSticker.height+=num
    gMeme.lines[gLine].height+=num
}

function changeXpos(num){
    if(gMeme.lines[gLine].isSticker) gMeme.lines[gLine].isSticker.x+=num
    gMeme.lines[gLine].x+=num
}

function addLine(){
    if(!gMeme.lines.length) {
        reset()
        return
    }
    gLine=gMeme.lines.length
    var line={ txt: 'I never eat Falafel', 
    size: 50, 
    align: 'center', 
    color: 'white',
    height: gElCanvas.height/2,
    x:gElCanvas.width/2
}
if(gLine===1){
    line.height=gElCanvas.height-100
}
gMeme.lines.push(line)
}


function switchLine(){
    gLine=gScrollLine
    gScrollLine+=1
    if(gScrollLine>gMeme.lines.length){
        gScrollLine=0
        gLine=0
    }
}

function search(word,imgs){
    imgs.forEach(img=>{
        img.style.display='block'
        if(!img.classList.contains(word)){
            img.style.display='none'
        }
    })
}

function resetWords(words){
    var elContainer=document.querySelector(".search-words")
    words.forEach(word => {
        var randSize=Math.floor(Math.random()*60+10)
        elContainer.innerHTML+=`<span onclick="upSearchFont(this)" style="font-size:${randSize}px;">${word.value}</span>\t`
    });
    elContainer.innerHTML+="<button class='read-btn' onclick='showText()'>show more</button>"
}

function setLineDrag(isDrag) {
    gMeme.isDrag = isDrag
}
