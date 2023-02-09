const pieces = document.querySelectorAll(".img-box");
const boxs = document.querySelectorAll(".box");

function setIdforBoxs() {
    let k = 0;
    for (let i = 10; i >= 1; i--) {
        for (let j = 0; j < 9; j++) {
            boxs[k].setAttribute("id", `${i * 10 + j}`);
            k++;
        }

        if (k === boxs.length) {
            break;
        }
    }
}

setIdforBoxs();

//
function addSelectableCell(selectableCells, position, condition) {
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
        box.style.backgroundColor = "rgba(37, 49, 109, 0.5)";
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
        console.log(curPos, sidePos, upPos);
        //xét dự tính nước đi cho con tốt đỏ
        if (this.alt === "red_soldier") {
            if (upPos >= 60) {
                addSelectableCell(selectableCells, curPos + 1, sidePos < 8);
                addSelectableCell(selectableCells, curPos - 1, sidePos > 1);
            }
            addSelectableCell(selectableCells, curPos + 10, upPos < 90);
        }

        //xét dự tính nước đi cho con tốt đen
        if (this.alt === "black_soldier") {
            if (upPos < 60) {
                addSelectableCell(selectableCells, curPos + 1, sidePos < 8);
                addSelectableCell(selectableCells, curPos - 1, sidePos > 1);
            }
            addSelectableCell(selectableCells, curPos - 10, upPos > 10);
        }

        //xét dự tính nước đi cho con xe và con pháo
        if (this.alt === "cannon" || this.alt === "chariot") {
            for (let i = 1; i <= 10; i++) {
                if (!addSelectableCell(selectableCells, curPos + i * 10, curPos + i * 10 < 100)) {
                    break;
                }
            }
            for (let i = 1; i <= 10; i++) {
                if (!addSelectableCell(selectableCells, curPos - i * 10, curPos - i * 10 > 10)) {
                    break;
                }
            }
            for (let i = 1; i <= 9; i++) {
                if (!addSelectableCell(selectableCells, curPos + i, curPos + i < upPos + 9)) {
                    break;
                }
            }
            for (let i = 1; i <= 9; i++) {
                if (!addSelectableCell(selectableCells, curPos - i, curPos - i >= upPos)) {
                    break;
                }
            }
        }

        //xét dự tính nước đi cho con mã
        if (this.alt === "horse") {
            addSelectableCell(selectableCells, curPos + 10 + 2, sidePos < 7 && upPos <= 90);
            addSelectableCell(selectableCells, curPos - 10 + 2, sidePos < 7 && upPos > 10);
            addSelectableCell(selectableCells, curPos + 10 - 2, sidePos > 2 && upPos <= 90);
            addSelectableCell(selectableCells, curPos - 10 - 2, sidePos > 2 && upPos > 10);
            addSelectableCell(selectableCells, curPos + 20 + 1, sidePos < 8 && upPos <= 80);
            addSelectableCell(selectableCells, curPos + 20 - 1, sidePos > 1 && upPos <= 80);
            addSelectableCell(selectableCells, curPos - 20 + 1, sidePos < 8 && upPos > 20);
            addSelectableCell(selectableCells, curPos - 20 - 1, sidePos > 1 && upPos > 20);
        }

        //xét dự tính nước đi cho con tượng đen
        if (this.alt === "black_elephant") {
            if (curPos >= 60) {
                addSelectableCell(selectableCells, curPos + 20 + 2, sidePos < 7 && upPos <= 80);
                addSelectableCell(selectableCells, curPos + 20 - 2, sidePos > 2 && upPos <= 80);
                addSelectableCell(
                    selectableCells,
                    curPos - 20 - 2,
                    sidePos > 2 && upPos > 20 && Math.trunc((curPos - 20 - 2) / 10) * 10 >= 60
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 20 + 2,
                    sidePos < 7 && upPos > 20 && Math.trunc((curPos - 20 + 2) / 10) * 10 >= 60
                );
            }
        }

        //xét dự tính nước đi cho con tượng đỏ
        if (this.alt === "red_elephant") {
            if (curPos < 60) {
                addSelectableCell(
                    selectableCells,
                    curPos + 20 + 2,
                    sidePos < 7 && upPos <= 80 && Math.trunc((curPos + 20 + 2) / 10) * 10 < 60
                );
                addSelectableCell(
                    selectableCells,
                    curPos + 20 - 2,
                    sidePos > 2 && upPos <= 80 && Math.trunc((curPos + 20 - 2) / 10) * 10 < 60
                );
                addSelectableCell(selectableCells, curPos - 20 - 2, sidePos > 2 && upPos > 20);
                addSelectableCell(selectableCells, curPos - 20 + 2, sidePos < 7 && upPos > 20);
            }
        }

        //xét dự tính nước đi cho con sỉ đen
        if (this.alt === "black_advisor") {
            if (curPos >= 80) {
                addSelectableCell(
                    selectableCells,
                    curPos + 10 + 1,
                    (curPos + 10 + 1) % 10 >= 3 && (curPos + 10 + 1) % 10 <= 5 && upPos <= 90
                );
                addSelectableCell(
                    selectableCells,
                    curPos + 10 - 1,
                    (curPos + 10 - 1) % 10 >= 3 && (curPos + 10 - 1) % 10 <= 5 && upPos <= 90
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 - 1,
                    (curPos - 10 - 1) % 10 >= 3 &&
                        (curPos - 10 - 1) % 10 <= 5 &&
                        upPos > 10 &&
                        Math.trunc((curPos - 10 - 1) / 10) * 10 >= 80
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 + 1,
                    (curPos - 10 + 1) % 10 >= 3 &&
                        (curPos - 10 + 1) % 10 <= 5 &&
                        upPos > 10 &&
                        Math.trunc((curPos - 10 + 1) / 10) * 10 >= 80
                );
            }
        }

        //xét dự tính nước đi cho con sỉ đỏ
        if (this.alt === "red_advisor") {
            if (curPos < 40) {
                addSelectableCell(
                    selectableCells,
                    curPos + 10 + 1,
                    (curPos + 10 + 1) % 10 >= 3 &&
                        (curPos + 10 + 1) % 10 <= 5 &&
                        upPos <= 90 &&
                        Math.trunc((curPos + 10 + 1) / 10) * 10 < 40
                );
                addSelectableCell(
                    selectableCells,
                    curPos + 10 - 1,
                    (curPos + 10 - 1) % 10 >= 3 &&
                        (curPos + 10 - 1) % 10 <= 5 &&
                        upPos <= 90 &&
                        Math.trunc((curPos + 10 - 1) / 10) * 10 < 40
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 - 1,
                    (curPos - 10 - 1) % 10 >= 3 && (curPos - 10 - 1) % 10 <= 5 && upPos > 10
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 + 1,
                    (curPos - 10 + 1) % 10 >= 3 && (curPos - 10 + 1) % 10 <= 5 && upPos > 10
                );
            }
        }

        //xét dự tính nước đi cho con tướng đen
        if (this.alt === "black_general") {
            if (curPos >= 80) {
                addSelectableCell(
                    selectableCells,
                    curPos + 10,
                    (curPos + 10) % 10 >= 3 && (curPos + 10) % 10 <= 5 && upPos <= 90
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10,
                    (curPos - 10) % 10 >= 3 &&
                        (curPos - 10) % 10 <= 5 &&
                        upPos >= 10 &&
                        Math.trunc((curPos - 10) / 10) * 10 >= 80
                );
                addSelectableCell(selectableCells, curPos + 1, (curPos + 1) % 10 >= 3 && (curPos + 1) % 10 <= 5);
                addSelectableCell(selectableCells, curPos - 1, (curPos - 1) % 10 >= 3 && (curPos - 1) % 10 <= 5);
                addSelectableCell(
                    selectableCells,
                    curPos + 10 + 1,
                    (curPos + 10 + 1) % 10 >= 3 && (curPos + 10 + 1) % 10 <= 5 && upPos <= 90
                );
                addSelectableCell(
                    selectableCells,
                    curPos + 10 - 1,
                    (curPos + 10 - 1) % 10 >= 3 && (curPos + 10 - 1) % 10 <= 5 && upPos <= 90
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 - 1,
                    (curPos - 10 - 1) % 10 >= 3 &&
                        (curPos - 10 - 1) % 10 <= 5 &&
                        upPos > 10 &&
                        Math.trunc((curPos - 10 - 1) / 10) * 10 >= 80
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 + 1,
                    (curPos - 10 + 1) % 10 >= 3 &&
                        (curPos - 10 + 1) % 10 <= 5 &&
                        upPos > 10 &&
                        Math.trunc((curPos - 10 + 1) / 10) * 10 >= 80
                );
            }
        }

        //xét dự tính nước đi cho con tướng đỏ
        if (this.alt === "red_general") {
            if (curPos < 40) {
                addSelectableCell(
                    selectableCells,
                    curPos + 10,
                    (curPos + 10) % 10 >= 3 &&
                        (curPos + 10) % 10 <= 5 &&
                        upPos <= 90 &&
                        Math.trunc((curPos + 10) / 10) * 10 < 40
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10,
                    (curPos - 10) % 10 >= 3 && (curPos - 10) % 10 <= 5 && upPos > 10
                );
                addSelectableCell(selectableCells, curPos + 1, (curPos + 1) % 10 >= 3 && (curPos + 1) % 10 <= 5);
                addSelectableCell(selectableCells, curPos - 1, (curPos - 1) % 10 >= 3 && (curPos - 1) % 10 <= 5);
                addSelectableCell(
                    selectableCells,
                    curPos + 10 + 1,
                    (curPos + 10 + 1) % 10 >= 3 &&
                        (curPos + 10 + 1) % 10 <= 5 &&
                        upPos <= 90 &&
                        Math.trunc((curPos + 10 + 1) / 10) * 10 < 40
                );
                addSelectableCell(
                    selectableCells,
                    curPos + 10 - 1,
                    (curPos + 10 - 1) % 10 >= 3 &&
                        (curPos + 10 - 1) % 10 <= 5 &&
                        upPos <= 90 &&
                        Math.trunc((curPos + 10 - 1) / 10) * 10 < 40
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 - 1,
                    (curPos - 10 - 1) % 10 >= 3 && (curPos - 10 - 1) % 10 <= 5 && upPos > 10
                );
                addSelectableCell(
                    selectableCells,
                    curPos - 10 + 1,
                    (curPos - 10 + 1) % 10 >= 3 && (curPos - 10 + 1) % 10 <= 5 && upPos > 10
                );
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
