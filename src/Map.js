let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`.split("\n").slice(1,-1).map(n => n.split(""));

class Map {
    constructor(position) {
        this.position = position;
    }

    keyboard_event() { }
    update() { }
    draw(delta, ctx) {
        let total_ratio = 500 / pacmanMap.length;
        let spacing = total_ratio;
        let size = total_ratio;
        ctx.save();
        ctx.translate(25, 0);
        for (let x = 0; x < pacmanMap.length; x++) {
            for (let y = 0; y < pacmanMap[x].length; y++) {
            ctx.beginPath();
    
            if (pacmanMap[x][y] == "W") {
                ctx.fillStyle = "#810081";
                ctx.strokeStyle = "#810081";
                ctx.rect(y * spacing, x * spacing, size, size);
            }
    
            if (pacmanMap[x][y] == ".") {
                ctx.fillStyle = "#b7b7b7";
                ctx.strokeStyle = "#b7b7b7"
                ctx.arc(
                y * spacing + size / 2,
                x * spacing + size / 2,
                2.5,
                0,
                2 * Math.PI
                );
            }

            if(pacmanMap[x][y] == "*"){
                ctx.fillStyle = "black"
                ctx.strokeStyle = "black"
                ctx.arc(
                y * spacing + size / 2,
                x * spacing + size / 2,
                4,
                0,
                2 * Math.PI
                );
            }

            if (pacmanMap[x][y] == "o") {
                ctx.fillStyle = "#A4A4A4"
                ctx.strokeStyle = "#A4A4A4"
                ctx.rect(y * spacing, x * spacing, size, size);
            }

            if (pacmanMap[x][y] == "-") {
                ctx.fillStyle = "#de5a5a"
                ctx.strokeStyle = "#de5a5a"
                ctx.rect(y * spacing, x * spacing, size, size);
            }
    
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            }
        }
        ctx.restore();
        }
    }