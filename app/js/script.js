$(document).ready(function(){
    new TypeIt("#hero__specialty", {
        speed: 50,
        waitUntilVisible: true,
        loop: true
    })
    .type("Grphc", { delay: 300 })
    .move(-3)
    .move(0)
    .type("a", { delay: 300 })
    .move(2)
    .type("i", { delay: 300 })
    .move(null, { to: "END" })
    .type(" Artisst", { delay: 300 })
    .delete(2)
    .type("t", { delay: 300 })
    .pause(2000)
    .delete(15, { delay: 300 })
    .type("Product Photograhper", { delay: 300 })
    .delete(4)
    .type("pher", { delay: 300 })
    .pause(2000)
    .delete(20, { delay: 300 })
    .type("E-Commmer", { delay: 300 })
    .move(-2)
    .delete(1)
    .move(2)
    .pause(500)
    .type("ce Designer", { delay: 300 })
    .pause(2000)
    .delete(20, { delay: 300 })
    .go();
});