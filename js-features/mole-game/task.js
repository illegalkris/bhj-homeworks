const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
    let hole = document.getElementById(`hole${index}`);
    function gameGo() {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("You are win!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
        }

        if (lost.textContent == 5) {
            alert("You are lose!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    
    hole.onclick = gameGo;
}

