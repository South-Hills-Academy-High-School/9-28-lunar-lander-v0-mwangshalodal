namespace SpriteKind {
    export const MAP = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -25
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouth, function (sprite, location) {
    mySprite.setVelocity(0, -1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = 20
})
let mySprite: Sprite = null
let angle = 0
tiles.setCurrentTilemap(tilemap`level1`)
effects.confetti.startScreenEffect()
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
    . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
    . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
    . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
    2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
    2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
    4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
    . . b b b b 2 4 4 2 b b b b . . 
    . b d d d d 2 4 4 2 d d d d b . 
    b d d b b b 2 4 4 2 b b b d d b 
    b d d b b b b b b b b b b d d b 
    b b d 1 1 3 1 1 d 1 d 1 1 d b b 
    . . b b d d 1 1 3 d d 1 b b . . 
    . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
    . . . 2 2 4 4 4 4 4 2 2 2 . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    2 8 
    8 2 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(mySprite)
scaling.scaleByPercent(mySprite, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.MAP)
game.onUpdate(function () {
    mySprite2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.MAP)
    mySprite2.setPosition(mySprite.left, mySprite.top)
    mySprite.setPosition(mySprite.x, mySprite.y)
})
