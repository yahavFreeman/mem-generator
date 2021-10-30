const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        displayMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    var memeLines=getMeme()
    const line = getLine();
    // console.log(Math.sqrt((pos.x - memeLines[line].isSticker.resize.x) ** 2 + (pos.y - memeLines[line].isSticker.resize.y) ** 2))
    console.log(memeLines[line].isSticker)
    if(memeLines[line].isSticker && Math.sqrt((pos.x - memeLines[line].isSticker.resize.x) ** 2 + (pos.y - memeLines[line].isSticker.resize.y) ** 2)<=6){
    gStartPos = pos
        setStickerResize(true)
        return
    }
    document.body.style.cursor = 'inherit'
    if (isLineClicked(pos)) {
    setLineDrag(true)
    gStartPos = pos
    }
}

function isLineClicked(clickedPos) {
    var memepos=getMeme()
    var isLine=memepos.filter((pos,indx)=>{
        var up=pos.height-pos.size
        var down=pos.height+pos.size/2
        if(pos.isSticker){
            up=pos.height+pos.size*0.15
            down=pos.height+(pos.size*0.9)  
        }
        if ((clickedPos.y >= up) && (down>=clickedPos.y)){
        setGline(indx)
        return true
        }
    })
    return isLine.length
}

function onMove(ev) {
    const line = getLine();
    var isMemeDrag=getMemeDrag()
    var isMemeResize=getMemeResize()
    if (isMemeDrag && !isMemeResize) {
    document.body.style.cursor = 'grabbing'
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        moveLine(dx, dy)
        displayMeme()
    }else if (!isMemeDrag && isMemeResize){
        console.log('in')
        document.body.style.cursor = 'nwse-resize'
        const pos = getEvPos(ev)
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        resizeSticker(dy)
        displayMeme()
    }

}

function moveLine(dx, dy) {
    changeXpos(dx)
    changeHeight(dy)

}

function onUp() {
    setLineDrag(false)
    setStickerResize(false)
    document.body.style.cursor = 'grab'
    showBorder()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.main-canvas')
    gElCanvas.width = elContainer.offsetWidth/2
    gElCanvas.height = elContainer.offsetHeight/2
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}