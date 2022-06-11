const board = document.getElementById("board");
const tileSize = 30;
let boardLayout = [
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
];
let boardLetters = [
    ["a", "b", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "c", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

const acrossCollum = document.getElementById("across");
const verticleCollum = document.getElementById("verticle");

const clues = [{
    "clue": "alphabet spell it out",
    "hint": "you should know this lol",
    "start": { "x": 0, "y": 0 },
    "row": false
}, {
    "clue": "try this",
    "hint": "yah",
    "start": { "x": 15, "y": 15 },
    "row": true
}];
//creates a text tile
function creatTile(x, y, black) {
    const tile = document.createElement("div");
    tile.style.left = (x * tileSize) + "px";
    tile.style.top = (y * tileSize) + "px";
    tile.setAttribute("class", (!black ? "edge" : "tiles"));
    board.appendChild(tile);
}

function createBoard() {
    for (let i = 0; i < boardLayout.length; i++) {
        for (let o = 0; o < boardLayout[i].length; o++) {
            creatTile(i, o, boardLayout[o][i]);
        }
    }
}

function fillBoard() {
    const nodes = board.children;
    let index = 0;
    for (let i = 0; i < boardLetters.length; i++) {
        for (let o = 0; o < boardLetters[i].length; o++) {
            nodes[index].innerHTML = boardLetters[o][i];
            index++;
        }
    }
}

function populateClues() {
    for (let i = 0; i < clues.length; i++) {
        const clue = document.createElement("div");
        clue.innerHTML = (i + 1) + ") " + clues[i].clue;
        clue.setAttribute("class", "clue");
        clue.addEventListener("click", goTo, false);
        (clues[i].row ? acrossCollum : verticleCollum).appendChild(clue);
    }
}



/*
game logic 
*/
let currentFocus = null;
let row = true;

function clearAll() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].getAttribute("class") == "tiles") {
            nodes[i].style.outlineColor = "gray";
            nodes[i].style.backgroundColor = "";
        }
    }
}

function getStartIndex(x, y) {
    return x * boardLayout.length;
}

function getIndex(x, y) {
    return x * boardLayout.length + y;
}

function highlight(row) {
    clearAll();
    const nodes = board.children;
    const Xindex = parseInt(currentFocus.style.left) / tileSize;
    const Yindex = parseInt(currentFocus.style.top) / tileSize;
    const startIndex = getIndex(Xindex, Yindex);
    const highlightColor = "#ff0037";

    currentFocus.style.backgroundColor = "gray";
    currentFocus.style.outlineColor = highlightColor;

    if (row) {
        let i = 1;
        while (!((Xindex + i) > boardLayout.length - 1) && boardLayout[Yindex][Xindex + i]) {
            nodes[startIndex + (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex + (i * 25)].style.backgroundColor = "lightGray";
            i++;
        }
        i = 1;
        while (!((Xindex - i) < 0) && boardLayout[Yindex][Xindex - i]) {
            nodes[startIndex - (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex - (i * 25)].style.backgroundColor = "lightGray";
            i++;
        }
    } else {
        let i = 1;
        while (!((Yindex + i) > boardLayout.length - 1) && boardLayout[Yindex + i][Xindex]) {
            nodes[startIndex + i].style.outlineColor = highlightColor;
            nodes[startIndex + i].style.backgroundColor = "lightGray";
            i++;
        }
        i = 1;
        while (!((Yindex - i) < 0) && boardLayout[Yindex - i][Xindex]) {
            nodes[startIndex - i].style.outlineColor = highlightColor;
            nodes[startIndex - i].style.backgroundColor = "lightGray";
            i++;
        }
    }
}

function input(e) {
    clearAll();
    if (currentFocus != null) {
        currentFocus.style.backgroundColor = "white";
    }
    if (currentFocus === e.target) {
        currentFocus = null;
        return;
    }
    if (e.target.getAttribute("class") == "edge") {
        return;
    }
    currentFocus = e.target;
    currentFocus.style.backgroundColor = "gray";
    highlight(row);
}

function goTo(e) {
    e = e.target;
    const num = parseInt(e.innerHTML[0]) - 1;
    const info = clues[num];
    currentFocus = board.children[getIndex(info.start.x, info.start.y)];
    highlight(info.row);
}

/*


        DEV TOOLS

*/
let inDev = false;

//swaps between tile and edge
function swap(e) {
    e = e.target;
    const Xindex = parseInt(e.style.left) / tileSize;
    const Yindex = parseInt(e.style.top) / tileSize;
    if (e.getAttribute("class") == "edge") {
        e.setAttribute("class", "tiles");
        boardLayout[Yindex][Xindex] = true;
        return;
    }
    e.setAttribute("class", "edge");
    boardLayout[Yindex][Xindex] = false;

}

//adds event listeners to board
function addSwap() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("mouseover", swap, false);
    }
}

//removes swapping listeners from board
function removeSwap() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeEventListener("mouseover", swap, false);
    }
}

//adds event listeners to board for the game element
function addGame() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("click", input, false);
    }
}

//removes swapping listeners from board for the game element
function removeGame() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeEventListener("click", input, false);
    }
}

//toggle dev mode
document.getElementById("makeBoard").onclick = function() {
    inDev = !inDev;
    if (inDev) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
        addSwap();
        removeGame();
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(70, 138, 194)";
        removeSwap();
        addGame();
    }
};

//get board layout
document.getElementById("getBoard").onclick = function() {
    console.log(boardLayout);
}

// end dev tools

document.onkeyup = function(e) {
    if (e.key.length != 1) return;
    const letter = e.key.charAt(0);
    if (letter.toLowerCase() == letter.toUpperCase()) return;
    if (currentFocus == null) return;

    const info = getInfo(currentFocus);
    boardLetters[info.x][info.y] = letter;
    board.children[getIndex(info.x, info.y)].innerHTML = letter;
}

function getInfo(focus) {
    const obj = {
        "x": parseInt(focus.style.left) / tileSize,
        "y": parseInt(focus.style.top) / tileSize
    };
    return obj;
}

function squareAvalible(x, y) {
    return boardLayout[y][x];
}

function moveFocusUp(focus) {
    if (focus.y - 1 < 0) return;
    if (!squareAvalible(focus.x, focus.y - 1)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x, focus.y - 1)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusDown(focus) {
    if (focus.y + 1 > boardLayout.length - 1) return;
    if (!squareAvalible(focus.x, focus.y + 1)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x, focus.y + 1)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusRight(focus) {
    if (focus.x + 1 > boardLayout.length - 1) return;
    if (!squareAvalible(focus.x + 1, focus.y)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x + 1, focus.y)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusLeft(focus) {
    if (focus.x - 1 < 0) return;
    if (!squareAvalible(focus.x - 1, focus.y)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x - 1, focus.y)];
    currentFocus.style.backgroundColor = "gray";
}

document.onkeydown = function(e) {
    if (currentFocus == null) return;
    e.preventDefault();
    const focus = getInfo(currentFocus);
    switch (e.key) {
        case "ArrowUp":
            if (row) {
                highlight(false);
                row = false;
            }
            moveFocusUp(focus);
            break;
        case "ArrowDown":
            if (row) {
                highlight(false);
                row = false;
            }
            moveFocusDown(focus);
            break;
        case "ArrowLeft":
            if (!row) {
                highlight(true);
                row = true;
            }
            moveFocusLeft(focus);
            break;
        case "ArrowRight":
            if (!row) {
                highlight(true);
                row = true;
            }
            moveFocusRight(focus);
            break;
    }
}

//visuals for collage

const changeButton = document.getElementById("changeButton");
let visible = true;

changeButton.onclick = function() {
    document.getElementById("bottom").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    document.getElementById("board").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    changeButton.innerHTML = (visible ? "Return to Game" : "See Progress");
    visible = !visible;
};

createBoard();
fillBoard();
addGame();
populateClues();