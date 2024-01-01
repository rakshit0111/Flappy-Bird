var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var high = 0;
hole.addEventListener('animationiteration',() =>{
    var random = -((Math.random()*300) + 150);
    hole.style.top = random + "px";
    counter +=5;
});
setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0)
    {
    character.style.top = (characterTop + 2) +"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if(characterTop > 480 || characterTop < 0 || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130))))
    {
        alert("Your Score "+counter);
        counter = 0;
        character.style.top = 100 + "px";
    }
},10);
function jump()
{
    if (jumping === 0) {
        jumping = 1;
        var jumpCount = 0;
        var jumpInterval = setInterval(() => {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            character.style.top = (characterTop - 3) + "px";

            if (jumpCount > 40) {
                clearInterval(jumpInterval);
                jumping = 0;
                jumpCount = 0;
                character.style.top = (characterTop + 5) + "px";
            }

            jumpCount++;
        }, 10);
    }
}