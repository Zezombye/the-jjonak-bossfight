
var body = [
    {
        radius: 3,
        pos: vect(0,4,0),
        color: "BLUE",
        repeat: 7,
    },{
        radius: 2.5,
        pos: vect(0,7,0),
        color: "BLUE",
        repeat: 7,
    },{
        radius: 2.5,
        pos: vect(0,10,0),
        color: "BLUE",
        repeat: 7,
    },{
        radius: 4,
        pos: vect(0,13,0),
        color: "SKY_BLUE",
        repeat: 7,
    },/*{
        radius: 3,
        pos: vect(0,13,0),
        color: "PURPLE",
        repeat: 7,
    },*/
]

var internalTentacles = {
    radius: 1,
    pos: vect(0,4,0),
    color: "SKY_BLUE",
}

var rootRadius = 1;
var tentaclesRadius = [0.7, 0.8, 1, 0.7, 0.5, 0.45, 0.4, 0.3];

var result = "";


//Draw tentacles
for (var h = 0; h < 4; h++) {
    for (var i = 0; i < tentaclesRadius.length; i++) {
        var currentTentacle = `${tentaclesRadius.length*h+i}`
        var vectX = `squidMechTentacles[${currentTentacle}].x*cosDeg(squidMechRotation+90*${h}) - squidMechTentacles[${currentTentacle}].z*sinDeg(squidMechRotation+90*${h})`
        var vectZ = `squidMechTentacles[${currentTentacle}].x*sinDeg(squidMechRotation+90*${h}) - squidMechTentacles[${currentTentacle}].z*cosDeg(squidMechRotation+90*${h})`

        result += `createEffect(getAllPlayers(), Effect.SPHERE, ${i === tentaclesRadius.length-1 ? "Color.PURPLE" : "Color.SKY_BLUE"}, squidMechLocation+vect(${vectX}, squidMechTentacles[${currentTentacle}].y, ${vectZ}), ${tentaclesRadius[i]}, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)\n`
    }
}
//Draw body
for (var i = 0; i < 4; i++) {
    result += `createEffect(getAllPlayers(), Effect.SPHERE, Color.${internalTentacles.color}, squidMechLocation+${internalTentacles.pos}, ${internalTentacles.radius}, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)\n`
    internalTentacles.pos.y += 1.8
}
for (var j = 0; j < 7; j++) {      
    for (var i = 0; i < body.length; i++) { 
        result += `createEffect(getAllPlayers(), Effect.SPHERE, Color.${body[i].color}, squidMechLocation+${body[i].pos}, ${body[i].radius}, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)\n`
        if (i === body.length-1) {
            result += `createEffect(getAllPlayers(), Effect.SPHERE, Color.PURPLE, squidMechLocation+${body[i].pos}, 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)\n`
        }
    }
}

//Loop forever to update each tentacle
result += "while true:\n";

for (var h = 0; h < 4; h++) {
    for (var i = 0; i < tentaclesRadius.length; i++) {
        var currentTentacle = `${tentaclesRadius.length*h+i}`;
        var previousTentaclePos = i === 0 ? `vect(0,4,0)` : `squidMechTentacles[${tentaclesRadius.length*h+i-1}]`;
        var radius = tentaclesRadius[i] + (i === 0 ? rootRadius : tentaclesRadius[i-1]) - 0.2;
        if (i === 0) {
            result += `\ttentacleAngles[${currentTentacle}] = tentacleAnimationAngles[${currentTentacle}]\n`
        } else {
            result += `\ttentacleAngles[${currentTentacle}] = tentacleAngles[${tentaclesRadius.length*h+i-1}]+tentacleAnimationAngles[${currentTentacle}]\n`
        }
        result += `\tsquidMechTentacles[${currentTentacle}] = ${previousTentaclePos} + vect(${radius}*cosDeg(tentacleAngles[${currentTentacle}]), ${radius}*sinDeg(tentacleAngles[${currentTentacle}]), 0)\n`;
        
    }
}
result += "\twait()\n";

result;
