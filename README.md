# The JJonak Boss Fight

The aim of this gamemode will be to use any workshop glitch at our disposal, so that they may die on their feet, rather than living on their knees.

The boss fight will take place on the 1st point of Junkertown. Out of [the possible arenas](https://imgur.com/a/0DvEF7h), it was the only one being relatively flat, having physical cover, and big enough. You are welcome to suggest alternative arenas though.

Zenyatta was taken as the boss, due to an old glitch where repeatedly knocking down Zenyatta resulted in the orbs getting visually "away", forming lines. This glitch is now mitigated and the lines are now very short, but Zen remains. JJonak being a well-known OWL member and Zenyatta MVP, this will increase the visibility of the gamemode with a clickbait name.

The array glitch will extensively be used, as well as fast fire glitches.

The players will be 4, on team 1, composed of the following heroes:

- McCree
- Genji
- Baptiste
- Sigma

McCree, Genji and Baptiste were chosen because they can do the fast fire glitch. Sigma cannot do any glitch, but he is however the most diverse tank, as he can easily reposition his shield, absorb damage, and fly with his ult. You are welcome to suggest another 4th hero; a tank should be needed, but we could borrow some dummy bots to have eg a Zarya who can use the shield of an invisible Sigma/Orisa.

The enemies will be on team 2. There will be 6 Hard Zenyatta bots, and 12 additional dummy bots that are obtainable by the array glitch.

Implementing pathfinding for dummy bots would be a hard task that will increase the server load. However, it would enable more creativity with attacks.

To respect the lore (omegalul), JJonak will only have visible omnics (Zenyatta, Orisa, Bastion, Echo, Bob, and mechanical abilities such as turrets, shields, or snowball). Ultimate lines are to be avoided when possible.

The fight will be composed of 2 phases:

## Phase 1 - No Stand

JJonak is in its "normal" form, basically just a Zen bot that moves around. He cannot be booped into the void, as it will float back to the ground.

JJonak has 4000 hp (TBD) and receives no healing.

This phase lasts for 15-25% (TBD) of the fight.

### Attack 1-1 - Duplication

JJonak enters Transcendence. 5 Bot Zenyattas, also in transcendence, appear where JJonak is. Once transcendence finishes, the zenyattas act as normal and attack the players.

Note: implementing dummy pathfinding would allow increasing the number of zenyattas that spawn, as well as doing this attack multiple times.

### Attack 1-2 - Fast Fire

> Let me focus my psychic energy.

JJonak uses invisible Zenyattas to fire rapidly by alternating primary fire, for a period of time. An invisible Ana nanos him.

### Attack 1-3 - Hack

> The Omnic brain is a force to be reckoned with!

An invisible Sombra casts EMP on the position of JJonak. EMP has a chance of 50% (TBD) to invert aim speed, or to make aim speed very slow or very fast. EMP has also a chance of 50% (TBD) to invert throttle.

### Attack 1-4 - Zarya Bubble

JJonak summons 5 bot Zenyattas (this time with eg a Play Effect). These Zenyattas have a beam connecting them to JJonak. As long as any of the zenyattas are alive, a Zarya bubble will be casted on JJonak. All zenyattas must be killed to be able to damage JJonak.

### Attack 1-5 - Blizzard

> I have learned from my training in Nepal.

An invisible Mei casts Blizzard at JJonak's position.

### Attack 1-6 - Shields

4 invisible Reinhardts stand around JJonak, holding their shield up and making a square of shields. The Reinhardts only go away when sufficient damage is dealt to JJonak.

### Attack 1-7 - Fireballs

10 invisible Reinhardts alternatively cast a Firestrike at 50-75% speed (TBD) for a period of time.

### Attack 1-8 - Echoes

2 (TBD) echo bots are summoned and fly around. If they hit a player with their beam, it will inflict very little damage, but will drain their ultimate charge and regenerate them.

### Attack 1-9 - Walls

3 invisible Meis cast walls in a triangle formation and surround a player. The walls have 10 000 300 hp, meaning the player must destroy them by dealing damage and cannot wait it out. If the player gets out of the triangle, the walls are removed by switching the Meis to something else.

### Attack 1-10 - Antinade beams

4 invisible Anas spam anti-nades using a stun loop, in a "+" formation around JJonak. The nades are thrown horizontally, with 0 gravity, and with a high projectile speed. The direction of the throws rotates slowly, effectively ensuring the players must rotate around JJonak to avoid getting anti'd.

## Phase 2 - JJonak's Stand

> It seems I have no choice but to reveal my Stand...
> 「THE IRIS」!

JJonak reveals his Stand, which is similar to a Mecha with tentacles.

![](https://i.imgur.com/dk5sMyd.jpg)

At some point during the fight, he reveals the Zencopter (detailed later), then continues with more elaborate attacks once the Zencopter is defeated.

JJonak's Stand allows him to summon Omnics, and to use the collective Omnic hivemind to perform psych attacks.

The fight should reward movement and try not to make it possible to fight while camping in the same spot.

### Attack 2-1 - Turrets

Invisible Syms and Torbs spawn turrets around the map.

### Attack 2-2 - Bobs and vagene

Bobs spawn around the map.

### Attack 2-3 - Raising the Dead

JJonak raises dead Bastions from the ground, using the corpses killed by the Junkertown inhabitants.

### Attack 2-4 - Hentai Lasers

JJonak fires lasers from each of his 4 tentacles, using the fast fire of Zenyatta (invisible projectiles, a beam is used) combined with the infinite projectile speed. The players must fire on the tentacle heads to kill the invisible Zenyattas. The Zenyattas cannot receive headshots.

### Attack 2-5 - Lava

Invisible Torbs with infinite projectile speed and fast fire are used to quickly spawn lava at a specific spot. This attack would be used to prevent players from camping in the same spot during the whole fight.

### Attack 2-6 - Psych Slam

JJonak casts a beam to a player and yeets him away, dealing damage. This attack would be used if a player gets too close to JJonak.

### Attack 2-7 - Tentacle Slam

One of 「THE IRIS」's tentacles slams into the ground, using an invisible Reinhardt earthshatter to have the slam visual effect. The player is knocked down but also knocked away from JJonak.

### Attack 2-8 - Tentacle Punch

One of 「THE IRIS」's tentacles punches the player, knocking him away. This will likely not be implemented, because it would be hard as fuck to animate.

### Attack 2-9 - Summon Slams

An invisible Doomfist uses his ult where a player is, spawning a Zenyatta bot. This would be used only on a group of players, to prevent them from camping.

### Attack 2-10 - Sweeping Lasers

5 lasers are fired from 「THE IRIS」's head (same technique as for 2-4, but using dummy bots as we cannot control the facing direction of normal bots). The lasers start at a 90° angle from the ground (pointing down) and gradually go to 0° (pointing forward), towards a player. Each laser is spaced by 2° (TBD). The attack can be repeated multiple times in succession.

### Attack 2-11 - Dva bomb

JJonak launches a Dva bomb.

### Attack 2-12 - Blindness

> You are blinded by your own greed!

A purple sphere (play effect) comes from JJonak's head. Any player that can see JJonak's head will be blinded for 10 seconds (TBD) using the "sphere on event player" pseudo-blindness glitch. The blindness will gradually fade by putting the sphere radius higher than 204.

### Attack 2-13 - Omnic Horses

JJonak summons a Zenyatta who will ride an Orisa. The orisa has very high HP (providing a good opportunity, almost a necessity, for McCree to use his ult) and will charge towards players, making them lose 50 (TBD) HP and knocking them down if trampled. The Orisa will not use abilities other than Fortify.

- If the orisa is killed first, the zenyatta will just drop down, and act normally.
- If the Zenyatta is killed first, then Orisa will immediately drop bongo, then begin firing towards players with no speed reduction in firing (and with fast fire if Orisa is using Fortify). Orisa will still charge towards players to trample them.

### Attack 2-14 - Hammond Mines

An invisible Hammond drops mines.

### Attack 2-15 - Death Rays

JJonak fires 32 (TBD) beams at random spots on the ground. Less than 1 second after, Anas fire 500% proj speed nades at these spots.

## Remaining unused abilities

- Dva's Missiles
- Orisa's shield
- Orisa's Halt
- Rein's Firestrike
- Roadhog's Hook
- Roadhog's primary/secondary fire
- Sigma's Shield
- Sigma's Rock
- Sigma's primary
- Sigma's Ult
- Winston's Shield
- Winston's jump pack (it makes an effect when landing)
- Winston's primary
- Zarya's shields
- Zarya's Graviton
- Zarya's primary
- Zarya's secondary
- Echo's primary
- Echo's secondary
- Echo's beam
- Echo herself (she is an omnic so can be visible)
- Genji's Deflect
- Hanzo's Dragonstrike
- Junkrat's trap
- Junkrat's mines
- Junkrat's primary
- Junkrat's ult
- Mccree's Flashbang
- Mei's secondary
- Mei's wall
- Mei's ultimate
- Pharah's primary
- Pharah's boop
- Pharah's ult
- Reaper's Teleport (effect)
- Soldier's rockets
- Soldier's biotic field
- Sombra's Translocator (tp effect for phase 1 or an enemy?)
- Sombra's Hack
- Symmetra's primary
- Symmetra's secondary
- Symmetra's teleporter (could be used for turret bombing?)
- Symmetra's ult
- Torbjorn's primary/secondary
- Torbjorn's ult
- Tracer's blink (effect)
- Tracer's recall (effect)
- Tracer's ult
- Widow's mine
- Ana's sleep
- Ana's primary
- Ana's ult (effect)
- Baptiste's lamp
- Baptiste's secondary
- Baptiste's ult
- Brigitte's primary
- Brigitte's whip shot
- Brigitte's ult
- Lucio's primary
- Lucio's ult
- Mercy's beams
- Mercy's ressurect
- Mercy's pistol
- Moira's secondary
- Moira's orbs
- Moira's fade (effect)
- Moira's ult

## The Zencopter

> I will show you the true power of 「THE IRIS」!

> You utter fools! Omnic science is the best in the world!

https://gfycat.com/antiqueajaralaskajingle

JJonak summons his best omnic: the Zencopter. It has 2 phases:

- Phase 1: Machine gun - Invisible Doomfists alternatively fire their primary fire, with high projectile speed.
- Phase 2: Mines - The Zencopter targets a player, then goes in a straight line towards this player, dropping 5 mines as it goes.

This fight is meant to be similar to the HL2 helicopter fight. While the Zencopter is alive, JJonak is invulnerable.

## Gameplay

### Custom Abilities

#### Genji

When using his ultimate 「DRAGONFORCE」, Genji will use an invisible dummy bot to fast fire projectiles if he presses F.

#### McCree

When using his ultimate 「HIGH NOON」, McCree will be inflicted a stun&ult spam to spawn tumbleweeds. He will rotate, effectively making a circle of tumbleweeds. During this, he will take 25% (TBD) damage.

Once the circle is complete, McCree will now have access to fast fire, and deal an increased amount of damage to counteract the recoil that is hard to control (TBD). McCree's roll cooldown will be lowered to 1 (TBD) second and he will have access to an instant ult to instantly recharge his gun. The cooldown of his flashbang will be lowered to 0.5 (TBD).

McCree can use his F ability, which is 「THE SUN」. It will cost 10% (TBD) ultimate charge and will spam stun flashbangs, making a "sun", for 5 seconds (TBD) or until he rolls.

#### Baptiste

By using Shift (Ability 1), Baptiste will also fast fire for the duration of 1 full clip.

TBD: additional abilities?

#### Sigma/Hero 4

Sigma can fly faster using his ultimate.

TBD: additional abilities?

### Revive System

The revive system is like Borderlands 2's Fight for your life mechanic. When a player is downed, he enters the "Fight for your life" (FFYL) mode. To return to normal, he can either:

- Kill an enemy (deal the final blow).
- Be revived by an ally.

When in FFYL mode, the player will have the hacked status, have greatly reduced speed and have a "bronze aim" effect (aim speed that varies every 0.25 second). He will be invisible to enemies, but not phased out, so that he may be used as cover while resurrecting.

The FFYL mode also has a timer. If that timer expires, the player is dead. The duration of the timer decreases with each revive, so that if a player is downed several times successively, he will eventually die. The timer is put on pause while the player is being resurrected. The duration of the timer gradually increases with time alive (if it decreased by being revived), until it reaches the original maximum.

In phase 2, if a player enters FFYL mode, JJonak will spawn 2 (TBD) bot Zenyattas so that the players may use them to revive.

To revive a downed ally, the player must hold crouch while within range and LoS of the ally. During this time, the player will also have greatly reduced speed, and will not be able to use any weapon or ability. While holding crouch, the revive bar will increase. If the resurrection is interrupted, the revive bar will decay but not be immediately reduced to 0. The player is revived once the revive bar is full.

If a player is dead (the FFYL timer has expired), he may be revived at a cost of 80% (TBD) ultimate charge. This revive process will take 5 (TBD) seconds.

The game ends if all players are dead. (TBD: or if 1 player is dead, similar to Archive missions?)
