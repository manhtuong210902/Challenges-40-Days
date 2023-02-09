const pieces = $(".img-box");
const boxs = $(".box");

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

function addSelectableCells(selectableCells, position, condition) {
    if (condition) {
        if ($(`#${position}`).children().length === 0) {
            selectableCells.push(document.getElementById(`${position}`));
            return true;
        }
        return false;
    }
    return false;
}

setIdforBoxs();
let selectableCells = [];
pieces.draggable({
    containment: ".wrapper",
    helper: "clone",
    start: function (event, ui) {
        let parent = $(this).parent();
        let curPos = parseInt(parent.attr("id"));
        let sidePos = curPos % 10;
        let upPos = Math.trunc(curPos / 10) * 10;

        if ($(this).attr("alt") == "white_pawn") {
            addSelectableCells(selectableCells, curPos + 10, upPos < 80);
        }

        //xét dự tính nước đi cho con đen
        if ($(this).attr("alt") === "black_pawn") {
            addSelectableCells(selectableCells, curPos - 10, upPos > 10);
        }

        //xét dự tính nước đi cho con vua
        if ($(this).attr("alt") === "king") {
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
        if ($(this).attr("alt") === "rock") {
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
        if ($(this).attr("alt") === "bishop") {
            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(
                        selectableCells,
                        curPos + i * 10 + i,
                        i < (90 - upPos) / 10 && i < 9 - sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(
                        selectableCells,
                        curPos - i * 10 + i,
                        i < upPos / 10 && i < 9 - sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(
                        selectableCells,
                        curPos + i * 10 - i,
                        i < (90 - upPos) / 10 && i < sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(selectableCells, curPos - i * 10 - i, i < upPos / 10 && i < sidePos)
                ) {
                    break;
                }
            }
        }

        //xét dự tính nước đi cho con mã
        if ($(this).attr("alt") === "knight") {
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
        if ($(this).attr("alt") === "queen") {
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
                    !addSelectableCells(
                        selectableCells,
                        curPos + i * 10 + i,
                        i < (90 - upPos) / 10 && i < 9 - sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(
                        selectableCells,
                        curPos - i * 10 + i,
                        i < upPos / 10 && i < 9 - sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(
                        selectableCells,
                        curPos + i * 10 - i,
                        i < (90 - upPos) / 10 && i < sidePos
                    )
                ) {
                    break;
                }
            }

            for (let i = 1; i < 9; i++) {
                if (
                    !addSelectableCells(selectableCells, curPos - i * 10 - i, i < upPos / 10 && i < sidePos)
                ) {
                    break;
                }
            }
        }

        $(selectableCells).css("background-color", "green");
        $(selectableCells).droppable({
            accept: ".img-box",
            disable: false,
            drop: function (event, ui) {
                const piece = ui.draggable.detach();
                piece.appendTo($(this));
            },
        });
    },
    drag: function (event, ui) {
        $(this).css("opacity", 0.2);
        $(ui.helper).css("opacity", 0.8);
    },
    stop: function (event, ui) {
        $(this).css("opacity", 1);
        $(selectableCells).css("background-color", "");
        $(selectableCells).droppable("destroy");
        selectableCells = [];
    },
});
