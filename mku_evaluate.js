x = [true, true, true, false];
a = [11, 12, 13, 14, 15, 16, 17];
b = [18, 19, 20, 21, 22, 23, 24];
c = [25, 26, 27, 28, 29, 30];

for (var i = 1; i <= 60; i++) setValue(i, "");

function getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setValue(questionNumber, value) {
    document.getElementById("ansaid" + questionNumber).value = value;
    document.getElementById("anstotalid" + questionNumber).value = value;
    sum(questionNumber, "ansaid" + questionNumber);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

for (var i = 1; i <= 10; i++) {
    if (x[getInt(0, x.length - 1)]) {
        setValue(i, 1);
    }
    else {
        setValue(i, 0);
    }
}

shuffle(a);
console.log(a);

for (var i = 0; i < 5; i++) {
    setValue(a[i], getInt(1, 2));
}

shuffle(b);
console.log(b);

for (var i = 0; i < 5; i++) {
    setValue(b[i], getInt(1, 5));
}

shuffle(c);
console.log(c);

for (var i = 0; i < 3; i++) {
    setValue(c[i], getInt(2, 7));
}

