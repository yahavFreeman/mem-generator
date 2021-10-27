'use strict'
var gline=0
var gKeywords = {'happy': 12,'funny puk': 1} 
var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny']},
{id: 2, url: 'img/2.jpg', keywords: ['happy']}]; 
var gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    lines: [ { txt: 'I never eat Falafel', 
    size: 50, 
    align: 'center', 
    color: 'white',
    height:100 
} ] 
}

function draw(img){
    var memeImg = img
    gCtx.drawImage(memeImg,0,0,gElCanvas.width,gElCanvas.height)
}
function reset(){
     gMeme = { 
        selectedImgId: 1, 
        selectedLineIdx: 0, 
        lines: [ { txt: 'I never eat Falafel', 
        size: 50, 
        align: 'center', 
        color: 'white',
        height:100
    }] 
    }
    gline=0
}
function getImgInfo(id){
var img=gImgs.filter(img=>{
    return (img.id===id)
})
return img
}

function setLine(line){
    gline=line
}

function setMeme(id){
gMeme.selectedImgId=id

}

function getMeme(){
    return gMeme.lines
}

function addText(memeLines){
    gCtx.font=`${memeLines.size}px Impact`;
    gCtx.textAlign = `${memeLines.align}`;
    gCtx.fillStyle = `${memeLines.color}`;
    gCtx.fillText(`${memeLines.txt}`,gElCanvas.width/2,`${memeLines.height}`)
    gCtx.strokeStyle='black';
    gCtx.strokeText(`${memeLines.txt}`,gElCanvas.width/2,`${memeLines.height}`)

}

function changeText(value){
    gMeme.lines[gline].txt=value
    console.log(gMeme.lines)
    return gMeme.lines
}

function changeFont(num){
    gMeme.lines[gline].size+=num
}

function changeHeight(num){
    gMeme.lines[gline].height+=num
}
