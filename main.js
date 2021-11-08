let game = document.querySelector('#game');
let ctx = game.getContext('2d');
ctx.fillStyle = 'white';
ctx.lineWidth = 5;

// ================= CHUNKS ================== //
class Chunk {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

let chunkTest = new Chunk(100, 100, 'white', 25, 25);
console.log(chunkTest);
chunkTest.render();


// ================= DRAG FUNCTIONS =================== //
let drag = false;

document.addEventListener('mousedown', () => drag = false);
document.addEventListener('mousemove', () => drag = true);
document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
