'use strict'

var gKeywords = {'happy': 12,'funny puk': 1} 
var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}]; 
var gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    lines: [ { txt: 'I never eat Falafel', 
    size: 50, 
    align: 'left', 
    color: 'white' } ] 
}

function draw(img){
    var memeImg = img
    gCtx.drawImage(memeImg,0,0,500,500)
}

function getImgInfo(id){
var img=gImgs.filter(img=>{
    return (img.id===id)
})
return img
}

function setMeme(id){
gMeme.selectedImgId=id
}

function getMeme(){
    return gMeme.lines
}

function addText(memeLines){
    gCtx.font=`${memeLines.size}px Impact`;
    // gCtx.textAlign = "center";
    gCtx.fillStyle = "white";
    gCtx.fillText(`${memeLines.txt}`,100,100)
}

function changeText(value){
    gMeme.lines[0].txt=value
    console.log(gMeme.lines)
    return gMeme.lines
}

