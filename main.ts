namespace SpriteKind {
    export const produkt = SpriteKind.create()
    export const rødreaktant = SpriteKind.create()
    export const blåreaktant = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.rødreaktant, SpriteKind.blåreaktant, function (sprite, otherSprite) {
    if (game.runtime() - delay > t) {
        sprite.destroy()
        otherSprite.destroy()
        lag_produkt_fra_rx(true, sprite)
    }
})
function lag_produkt_fra_rx (bool: boolean, mySprite: Sprite) {
    if (bool) {
        px = mySprite.x
        py = mySprite.y
    } else {
        px = randint(0, 160)
        py = randint(0, 120)
    }
    produkt = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.produkt)
    produkt.setPosition(px, py)
    produkt.setVelocity(randint(-50, 50), randint(-50, 50))
    produkt.setBounceOnWall(true)
}
function lag_reaktant1_fra_rx (bool: boolean, mySprite: Sprite) {
    if (bool) {
        px = mySprite.x
        py = mySprite.y
    } else {
        px = randint(0, 160)
        py = randint(0, 120)
    }
    reaktant1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.rødreaktant)
    reaktant1.setPosition(px, py)
    reaktant1.setVelocity(randint(-50, 50), randint(-50, 50))
    reaktant1.setBounceOnWall(true)
}
function lag_reaktant2_fra_rx (bool: boolean, mySprite: Sprite) {
    if (bool) {
        px = mySprite.x
        py = mySprite.y
    } else {
        px = randint(0, 160)
        py = randint(0, 120)
    }
    reaktant2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blåreaktant)
    reaktant2.setPosition(px, py)
    reaktant2.setVelocity(randint(-50, 50), randint(-50, 50))
    reaktant2.setBounceOnWall(true)
}
let reaktant2: Sprite = null
let reaktant1: Sprite = null
let produkt: Sprite = null
let py = 0
let px = 0
let t = 0
let delay = 0
scene.setBackgroundColor(13)
let Pnedbrytning = 20
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 0; index++) {
    lag_produkt_fra_rx(false, mySprite)
}
for (let index = 0; index < 20; index++) {
    lag_reaktant1_fra_rx(false, mySprite)
}
for (let index = 0; index < 20; index++) {
    lag_reaktant2_fra_rx(false, mySprite)
}
forever(function () {
    console.logValue("produkt", sprites.allOfKind(SpriteKind.produkt).length)
    console.logValue("blå", sprites.allOfKind(SpriteKind.blåreaktant).length)
    console.logValue("røde", sprites.allOfKind(SpriteKind.rødreaktant).length)
    console.logValue("K", sprites.allOfKind(SpriteKind.produkt).length / (sprites.allOfKind(SpriteKind.blåreaktant).length + sprites.allOfKind(SpriteKind.rødreaktant).length))
})
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.produkt)) {
        if (Math.percentChance(Pnedbrytning)) {
            value.destroy()
            delay = 200
            t = game.runtime()
            lag_reaktant1_fra_rx(true, value)
            lag_reaktant2_fra_rx(true, value)
        }
    }
})
