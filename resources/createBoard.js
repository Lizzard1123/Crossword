const board = document.getElementById("board");
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
//creates a text tile
function creatTile(x, y, black) {
    const tile = document.createElement("div");
    tile.style.left = (x * 30) + "px";
    tile.style.top = (y * 30) + "px";
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
    const nodes = board.children;
    const Xindex = parseInt(currentFocus.style.left) / 30;
    const Yindex = parseInt(currentFocus.style.top) / 30;
    const startIndex = getIndex(Xindex, Yindex);
    const highlightColor = "#ff0037";
    if (row) {
        let i = 1;
        while (boardLayout[Yindex][Xindex + i]) {
            nodes[startIndex + (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex + (i * 25)].style.backgroundColor = "lightGray";
            i++;
            if ((Xindex + i) > 24) break;
        }
        i = 1;
        while (boardLayout[Yindex][Xindex - i]) {
            nodes[startIndex - (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex - (i * 25)].style.backgroundColor = "lightGray";
            i++;
            if ((Xindex - i) < 0) break;
        }
    } else {
        let i = 0;
        while (boardLayout[Yindex + i][Xindex]) {
            nodes[startIndex + i].style.outlineColor = highlightColor;
            nodes[startIndex + i].style.backgroundColor = "lightGray";
            i++;
            if ((Yindex + i) > 24) break;
        }
        i = 0;
        while (boardLayout[Yindex - i][Xindex]) {
            nodes[startIndex - i].style.outlineColor = highlightColor;
            nodes[startIndex - i].style.backgroundColor = "lightGray";
            i++;
            if ((Yindex - i) < 0) break;
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
    highlight(true);
}

/*


        DEV TOOLS

*/
let inDev = false;

//swaps between tile and edge
function swap(e) {
    e = e.target;
    const Xindex = parseInt(e.style.left) / 30;
    const Yindex = parseInt(e.style.top) / 30;
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
        nodes[i].addEventListener("click", swap, false);
    }
}

//removes swapping listeners from board
function removeSwap() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeEventListener("click", swap, false);
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

document.onkeyup = function(e) {
    if (e.key.length != 1) return;
    const letter = e.key.charAt(0);
    if (letter.toLowerCase() != letter.toUpperCase()) return;
    if (currentFocus == null) return;

}

function squareAvalible(x, y) {
    return boardLayout(x, y);
}

function moveFocusUp() {
    if (!squareAvalible()) return;
}

document.onkeydown = function(e) {
    clearAll();
    switch (e.key) {
        case "ArrowUp":
            if (row) {
                highlight(false);
            } else {
                moveFocusUp();
            }
            break;
        case "ArrowDown":
            if (row) {
                highlight(false);
            } else {
                moveFocusDown();
            }
            break;
        case "ArrowLeft":
            if (row) {
                highlight(true);
            } else {
                moveFocusLeft();
            }
            break;
        case "ArrowRight":
            if (row) {
                highlight(true);
            } else {
                moveFocusRight();
            }
            break;
    }
}

createBoard();
fillBoard();
addGame();