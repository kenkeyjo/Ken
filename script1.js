<!-- Kensyah Rizzo Maulana (31) -->
document.body.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case (13):
            equal();
            break;
        case 48:
            insert(0);
            break;
        case 49:
            insert(1);
            break;
        case 50:
            insert(2);
            break;
        case 51:
            insert(3);
            break;
        case 52:
            insert(4);
            break;
        case 53:
            insert(5);
            break;
        case 54:
            insert(6);
            break;
        case 55:
            insert(7);
            break;
        case 56:
            insert(8);
            break;
        case 57:
            insert(9);
            break;
        case 96:
            insert(0);
            break;
        case 97:
            insert(1);
            break;
        case 98:
            insert(2);
            break;
        case 99:
            insert(3);
            break;
        case 100:
            insert(4);
            break;
        case 101:
            insert(5);
            break;
        case 102:
            insert(6);
            break;
        case 103:
            insert(7);
            break;
        case 104:
            insert(8);
            break;
        case 105:
            insert(9);
            break;
        case 106:
            insert('*');
            break;
        case 107:
            insert('+');
            break;
        case 109:
            insert('-');
            break;
        case 111:
            insert('/');
            break;
        case 67:
            ClearText();
            break;
            case 66:
            ClearHis();
            break;
        case 8:
            backspace();



    }

});


function insert(num) {

    document.getElementById("output_value").innerText = document.getElementById("output_value").innerText + num;

}

function ClearText() {
    document.getElementById("output_value").innerHTML = "";

}
function ClearHis() {
    document.getElementById("history_value").innerHTML = "";

}

function equal() {
    exp = document.getElementById("output_value").innerText;
    if (exp) {
        document.getElementById("output_value").innerText = eval(exp);
        document.getElementById("history_value").innerText = exp;
    }

}

function backspace() {
    let exp = document.getElementById("output_value").innerText;
    document.getElementById("output_value").innerText = exp.substring(0, exp.length - 1);
}