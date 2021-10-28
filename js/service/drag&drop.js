const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
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
    if (!isLineClicked(pos)) {
        console.log('in')
        return
    }
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function isLineClicked(clickedPos) {
    var memepos=getMeme()
    var isLine=memepos.filter((pos,indx)=>{
        console.log(clickedPos.y,pos.height+pos.size/2,clickedPos.y,pos.height-pos.size/2)
        if (clickedPos.y>= pos.height-pos.size/2 && clickedPos.y<=pos.height+pos.size/2){
        setGline(indx)
        return true
        }
    })
    console.log(isLine)
    return isLine
}

function onMove(ev) {
    const line = getLine();
    var isMemeDrag=getMemeDrag()
    if (isMemeDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        moveLine(dx, dy)
        displayMeme()
    }
}

function moveLine(dx, dy) {
    changeXpos(dx)
    changeHeight(dy)

}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

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