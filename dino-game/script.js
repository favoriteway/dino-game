const Dino = document.querySelector('.Dino');
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if (!isJumping){
        jump();
        console.log('pressionou espaço')
        }
    }
}
function jump(){
    

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                Dino.style.bottom = position + 'px';
                }  
            }, 20)
            } else {
           //subindo
        position += 20;
        Dino.style.bottom = position + 'px';
            }
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div')
    let cactusPositions = 1000;
    let randomTime = Math.random() * 6000

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
          if (cactusPositions < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
          }else if (cactusPositions > 0 && cactusPositions < 60 && position < 60) {

            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo :( </h1>';
          } else {
            cactusPositions -= 10;
            cactus.style.left = cactusPositions + 'px'
        }
    }, 20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp) 