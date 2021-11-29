window.onload = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Pintamos un cuadrado
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);

    // Mapa del juego
    // let map = new Map(ctx);

    // Pintamos Pacman
    let actors = [
        new Map(),
        new Pacman({ x: 200, y: 100 }, "yellow", 10),
        new Pacman({ x: 200, y: 200 }, "pink", 12),
        new Pacman({ x: 200, y: 300 }, "blue", 15),
        new Pacman({ x: 200, y: 400 }, "grey", 5),
    ];

    /* GAME LOOP --> Bucle de renderizado y actualización
    setInterval(() => {
        actors.forEach(e => e.update());
        ctx.clearRect(0, 0, 500, 500);
        actors.forEach(e => { e.draw(ctx) });
    }, 100)
    */

    let lastFrame = 0;
    const render = (time) => {
    // console.log(time);
        let delta = (time - lastFrame) / 1000;
    // console.log(delta);
        lastFrame = time;
        actors.forEach((e) => e.update(delta));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actors.forEach((e) => {
        e.draw(delta, ctx);
        });
        window.requestAnimationFrame(render);
    };

  window.requestAnimationFrame(render);


    document.body.addEventListener("keydown", (e) => {
        // console.log(e.key);
        actors.forEach(actor => { actor.keyboard_event(e.key) });
    })
}

