const pieces = document.querySelectorAll(".img-box");
const boxs = document.querySelectorAll(".box");

function setIdforBoxs() {
    let k = 0;
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            boxs[k].setAttribute("id", `${i * 10 + j}`);
            k++;
        }

        if (k === boxs.length) {
            break;
        }
    }
}

setIdforBoxs();

function addSelectableCells(selectableCells, position, condition) {
    if (condition) {
        if (document.getElementById(`${position}`).childElementCount === 0) {
            selectableCells.push(document.getElementById(`${position}`));
            return true;
        }
        return false;
    }
    return false;
}

function setBackgroundTrueBox(selectableCells) {
    selectableCells.forEach((box) => {
        box.style.backgroundColor = "#367E18";
    });
}

function initDrapDrop(obj) {
    let selectableCells = [];
    obj.xOld = 0;
    obj.yOld = 0;
    obj.isDown = false;

    obj.ondragstart = function () {
        return false;
    };

    obj.onmousedown = function (e) {
        this.isDown = true;
        this.xOld = e.clientX;
        this.yOld = e.clientY;
        if (isNaN(parseInt(this.style.left))) {
            this.style.left = this.offsetLeft + "px";
            this.style.top = this.offsetTop + "px";
        }

        this.style.zIndex = "1000";
        let parent = this.parentElement;
        let curPos = parseInt(parent.id);
        let sidePos = curPos % 10;
        let upPos = Math.trunc(curPos / 10) * 10;
        //xét dự tính nước đi cho con tốt trắng
        if (this.alt === "white_pawn") {
            addSelectableCells(selectableCells, curPos + 10, upPos < 80);
        }

        //xét dự tính nước đi cho con đen
        if (this.alt === "black_pawn") {
            addSelectableCells(selectableCells, curPos - 10, upPos > 10);
        }

        //xét dự tính nước đi cho con vua
        if (this.alt === "king") {
            addSelectableCells(selectableCells, curPos + 10, upPos < 80);
            addSelectableCells(selectableCells, curPos - 10, upPos > 10);
            addSelectableCells(selectableCells, curPos + 1, sidePos < 8);
            addSelectableCells(selectableCells, curPos - 1, sidePos > 1);
            addSelectableCells(selectableCells, curPos + 10 - 1, sidePos > 1 && upPos < 80);
            addSelectableCells(selectableCells, curPos + 10 + 1, sidePos < 8 && upPos < 80);
            addSelectableCells(selectableCells, curPos - 10 - 1, sidePos > 1 && upPos > 10);
            addSelectableCells(selectableCells, curPos - 10 + 1, sidePos < 8 && upPos > 10);
        }

        //xét dự tính nước đi cho con xe
        if (this.alt === "rock") {
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i * 10, curPos + i * 10 < 90)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10, curPos - i * 10 > 10)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i, curPos + i < upPos + 9)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i, curPos - i > upPos)) {
                    break;
                }
            }
        }

        //xét dự tính nước đi cho con tượng
        if (this.alt === "bishop") {
            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(selectableCells, curPos + i * 10 + i, i < (90 - upPos) / 10 && i < 9 - sidePos)
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10 + i, i < upPos / 10 && i < 9 - sidePos)) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i * 10 - i, i < (90 - upPos) / 10 && i < sidePos)) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10 - i, i < upPos / 10 && i < sidePos)) {
                    break;
                }
            }
        }

        //xét dự tính nước đi cho con mã
        if (this.alt === "knight") {
            addSelectableCells(selectableCells, curPos + 10 + 2, sidePos < 7 && upPos < 80);
            addSelectableCells(selectableCells, curPos + 10 - 2, sidePos > 2 && upPos < 80);
            addSelectableCells(selectableCells, curPos - 10 + 2, sidePos < 7 && upPos > 10);
            addSelectableCells(selectableCells, curPos - 10 - 2, sidePos > 2 && upPos > 10);
            addSelectableCells(selectableCells, curPos + 20 + 1, sidePos < 8 && upPos < 60);
            addSelectableCells(selectableCells, curPos + 20 - 1, sidePos > 1 && upPos < 60);
            addSelectableCells(selectableCells, curPos - 20 + 1, sidePos < 8 && upPos > 20);
            addSelectableCells(selectableCells, curPos - 20 - 1, sidePos > 1 && upPos > 20);
        }

        //xét dự tính nước đi cho con hậu
        if (this.alt === "queen") {
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i * 10, curPos + i * 10 < 90)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10, curPos - i * 10 > 10)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i, curPos + i < upPos + 9)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i, curPos - i > upPos)) {
                    break;
                }
            }
            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(selectableCells, curPos + i * 10 + i, i < (90 - upPos) / 10 && i < 9 - sidePos)
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10 + i, i < upPos / 10 && i < 9 - sidePos)) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos + i * 10 - i, i < (90 - upPos) / 10 && i < sidePos)) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (!addSelectableCells(selectableCells, curPos - i * 10 - i, i < upPos / 10 && i < sidePos)) {
                    break;
                }
            }
        }

        setBackgroundTrueBox(selectableCells);
    };

    obj.onmouseup = function (e) {
        this.isDown = false;
        selectableCells.forEach((element) => {
            element.style = null;
            if (
                this.offsetLeft + 20 >= element.offsetLeft &&
                this.offsetLeft + 20 <= element.offsetLeft + element.offsetWidth &&
                this.offsetTop + 20 >= element.offsetTop &&
                this.offsetTop + 20 <= element.offsetTop + element.offsetHeight
            ) {
                if (element.childElementCount === 0) {
                    element.appendChild(this);
                }
            }
        });
        this.style = null;
        this.style.zIndex = "0";
        this.style.opacity = "1";
        selectableCells = [];
    };

    obj.onmousemove = function (e) {
        if (this.isDown) {
            let xCur = e.clientX;
            let yCur = e.clientY;
            let dx = xCur - this.xOld;
            let dy = yCur - this.yOld;
            this.xOld = xCur;
            this.yOld = yCur;
            this.style.left = parseInt(this.style.left) + dx + "px";
            this.style.top = parseInt(this.style.top) + dy + "px";
            this.style.opacity = "0.5";
        }
    };
}

pieces.forEach((piece) => {
    initDrapDrop(piece);
});
