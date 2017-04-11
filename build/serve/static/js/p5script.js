var array = [];
var num_dots = 119;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //smooth();
    var speedX = 2;
    var speedY = 4;
    for (var i = 0; i < num_dots; i++) {
        array.push([Math.random() * window.innerWidth, Math.random() * window.innerHeight,
            Math.random() * speedX - speedX / 2, Math.random() * speedY - speedY / 2]);
    }
}

function draw() {
    background(246);
    strokeWeight(1);

    array[0][0] = mouseX;
    array[0][1] = mouseY;

    for (var o = 0; o < num_dots * num_dots; o++) {

        var i = Math.floor(o / num_dots);
        var a = o % num_dots;

        if (a == 0) {
            array[i][0] += array[i][2];
            array[i][1] += array[i][3];

            if (array[i][0] > window.innerWidth) {
                array[i][0] = window.innerWidth - 1;
                array[i][2] = -array[i][2];
            }
            if (array[i][0] < 0) array[i][2] = -array[i][2];

            if (array[i][1] > window.innerHeight) {
                array[i][1] = window.innerHeight - 1;
                array[i][3] = -array[i][3];
            }
            if (array[i][1] < 0) array[i][3] = -array[i][3];
        }

        if (i != a) {
            var coord1 = array[i];
            var coord2 = array[a];

            var distance = dist(coord1[0], coord1[1], coord2[0], coord2[1]);

            if (distance < 150) {
                stroke(100, 100 - distance);
                line(coord1[0], coord1[1], coord2[0], coord2[1]);
            }
        }
    }
}