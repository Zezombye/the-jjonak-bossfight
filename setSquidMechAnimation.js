function addVect(a, b) {
    return vect(a.x+b.x, a.y+b.y, a.z+b.z);
}

function sinDeg(angleDegrees) {
    return Math.sin(angleDegrees*Math.PI/180);
};
function cosDeg(angleDegrees) {
    return Math.cos(angleDegrees*Math.PI/180);
};

var anims = {
    /*default: [
        -70,
        -15,
        -15,
        60,
        105,
        75,
        10,
        -15,
    ]*/
    default: [
        -70,
        55,
        0,
        75,
        45,
        -30,
        -65,
        -25,
    ]
}

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < anims[anim].length; j++) {
        result += `tentacleAnimationAngles[${anims[anim].length*i+j}] = ${anims[anim][j]}\n`
    }
}

result;
