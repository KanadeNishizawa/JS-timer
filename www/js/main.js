let stage;
let nameTag;
let shapes;
let oldSeconds = 0;

let init = () => {
  stage = new createjs.Stage(document.getElementById("myCanvas"));
  nameTag = document.getElementById("nameTag");

  setup();
  createjs.Ticker.framerate = 30;
  createjs.Ticker.addEventListener("tick", loop);
  createjs.Ticker.addEventListener("tick", stage);
  if (createjs.Touch.isSupported()) {
    createjs.Touch.enable(stage);
  }
};

let setup = () => {
  nameTag.textContent = "201812121 Nishizawa Kanade";
  shapes = new Array();

  for (let i = 0; i < 2; i++) {
    let s = new createjs.Shape();
    let angle = 0;
    let radius = 25;
    let speed = 0.05;
    let centerHue = 180;

    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick() {
      let hue = centerHue + Math.cos(angle) * radius;
      let color = "hsl(" + hue + ", 100%, 50%)";
      s.graphics.beginStroke(color);
      s.graphics.setStrokeStyle(7);
      s.graphics.drawRect(0, 0, 50, 50);
      angle += speed;
    }
    s.alpha = 0;
    s.x = 150;
    s.y = 150;
    s.regX = 25;
    s.regY = 25;

    stage.addChild(s);
    shapes.push(s);

    createjs.Tween.get(s).to(
      { rotation: 290, scaleX: 10, scaleY: 10, alpha: 0.7 },
      2000,
      createjs.Ease.cubicIn
    );
  }
};

let loop = () => {
  let time = new Date();
  let sec = time.getSeconds();

  let update = false;
  if (sec != oldSeconds) {
    oldSeconds = sec;
    update = true;
  }
  //shapes[0]を円軌道で動かす
  // let shape0 = shapes[0];
  // shape0.x = Math.cos((r - 90) * (Math.PI / 180)) * 130 + 150;
  // shape0.y = Math.sin((r - 90) * (Math.PI / 180)) * 130 + 150;
  //   for (let i = 0; i < 29; i++) {
  //     let s = shapes[i];

  //     if (s.x >= 300 || s.x <= 0) {
  //       s.vx *= -1;
  //       s.x += s.vx;
  //     } else {
  //       s.x += s.vx;
  //     }

  //     if (s.y >= 300 || s.y <= 0) {
  //       s.vy *= -1;
  //       s.y += s.vy;
  //     } else {
  //       s.y += s.vy;
  //     }
  //   }
};
