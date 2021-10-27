'use strict'
var gline=0
var gScrollLine=0
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

function getLine(){
    return gline
}

function addText(memeLines){
    memeLines.forEach(meme => {
        gCtx.font=`${meme.size}px Impact`;
        gCtx.textAlign = `${meme.align}`;
        gCtx.fillStyle = `${meme.color}`;
        gCtx.strokeStyle='black';
        gCtx.fillText(`${meme.txt}`,gElCanvas.width/2,`${meme.height}`)
        gCtx.strokeText(`${meme.txt}`,gElCanvas.width/2,`${meme.height}`) 
    });

}

function clearInput(){
    var elInput=document.querySelector(".meme-input")
    elInput.value=""
    elInput.placeholder=`${gMeme.lines[gline].txt}`
}
function prevInput(){
    var elInput=document.querySelector(".meme-input")
    elInput.placeholder=`${gMeme.lines[gline].txt}`
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

function addLine(){
    gline+=1
    var line={ txt: 'I never eat Falafel', 
    size: 50, 
    align: 'center', 
    color: 'white',
    height: gElCanvas.height/2
}
if(gline===1){
    line.height=gElCanvas.height-100
}
    gMeme.lines.push(line)
}


function switchLine(){
    gline=gScrollLine
    gScrollLine+=1
    if(gScrollLine>=gline){
        gScrollLine=0
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
        console.log(randSize)
        elContainer.innerHTML+=`<span onclick="upSearchFont(event,this)" style="font-size:${randSize}px;">${word.value}\t</span>`
    });
    elContainer.innerHTML+="<button class='read-btn' onclick='showText()'>read more</button>"
}