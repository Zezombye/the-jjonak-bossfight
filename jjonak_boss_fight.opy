settings {
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "junkertown"
            ]
        },
        "general": {
            "heroLimit": "off",
            "enableRandomHeroes": true,
            "respawnTime%": 30
        }
    }
}

globalvar bossSpawn
globalvar squidMechTentacles
globalvar tentacleAngles
globalvar tentacleAnimationAngles
globalvar squidMechLocation
globalvar squidMechRotation
globalvar i
globalvar j

#!define BODY_0 0
#!define BODY_1 1
#!define BODY_2 2
#!define BODY_3 3
#!define BODY_4 4
#!define TENTACLE_0_0 5
#!define TENTACLE_0_1 6
#!define TENTACLE_0_2 7
#!define TENTACLE_0_3 8
#!define TENTACLE_0_4 9
#!define TENTACLE_1_0 10
#!define TENTACLE_1_1 11
#!define TENTACLE_1_2 12
#!define TENTACLE_1_3 13
#!define TENTACLE_1_4 14
#!define TENTACLE_2_0 15
#!define TENTACLE_2_1 16
#!define TENTACLE_2_2 17
#!define TENTACLE_2_3 18
#!define TENTACLE_2_4 19
#!define TENTACLE_3_0 20
#!define TENTACLE_3_1 21
#!define TENTACLE_3_2 22
#!define TENTACLE_3_3 23
#!define TENTACLE_3_4 24

#!define bodyColor Color.BLUE
#!define tentacleColor Color.SKY_BLUE

#!define squidMechSphere(member, radius) createEffect(getAllPlayers(), Effect.SPHERE, Color.PURPLE, squidMech[member], radius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
#!define createSquidMech() __script__("createSquidMech.js")
#!define setSquidMechAnimation(anim) __script__("setSquidMechAnimation.js")

rule "create jjonak himself":
	@Event global
    disableInspector()
    createDummy(Hero.ZENYATTA, Team.2, 0, vect(1000,0,1000), vect(0,0,0))
    bossSpawn = vect(-17.8, 4.45, -41.6)
    squidMechLocation = bossSpawn
    print(hostPlayer.getPosition())
    hudSubheader(getAllPlayers(), "Load: {} | Avg: {} | Peak: {}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), HudPosition.LEFT, -100, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    squidMechRotation = 0
    chase(squidMechRotation, 99999999, rate=10, ChaseReeval.NONE)

rule "tp":
	@Event eachPlayer
	@Condition eventPlayer.hasSpawned()
    wait(0.1)
    eventPlayer.teleport(bossSpawn)

/*rule "test":
	@Event global
	@Condition hostPlayer.isHoldingButton(Button.INTERACT)
    enableInspector()
    for i in range(4):
        tentacleAnimationAngles[i*8+3]-= 60
    wait(1)
    for i in range(4):
        tentacleAnimationAngles[i*8+3]+= 60
    disableInspector()
*/

rule "tentacle animation":
	@Event global
    while true:
        for j in range(63):
            for i in range(4):
                tentacleAnimationAngles[i*8+3]--
            wait()
        for j in range(63):
            for i in range(4):
                tentacleAnimationAngles[i*8+3]++
            wait()


rule "display squid mech":
	@Event global
    createSquidMech()

rule "set squid mech animation":
	@Event global
    setSquidMechAnimation("default")

