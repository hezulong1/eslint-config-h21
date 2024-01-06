var a = 3;
function b() {
    var a = 10;
}

var c = function () {
    var a = 10;
}

function d(a) {
    a = 10;
}
d(a);

if (true) {
    let a = 5;
}
