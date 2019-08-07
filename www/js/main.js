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

  let bg = new createjs.Shape();
  bg.graphics
    .beginFill("black")
    .drawRect(0, 0, 300, 300)
    .beginLinearGradientFill(["#9ef", "#9e2"], [0.1, 1.0], 0, -100, 50, 100);
  stage.addChild(bg);

  for (let i = 0; i < 200; i++) {
    let s = new createjs.Shape();
    let angle = 0;
    let radius = 50;
    let speed = 0.01;
    let centerHue = 180;

    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick() {
      let hue = centerHue + Math.cos(angle) * radius;
      let color = "hsl(" + hue + ", 90%, 50%)";
      s.graphics.beginStroke(color);
      s.graphics.setStrokeStyle(0.1);
      s.graphics.drawRect(0, 0, 20, 16);
      angle += speed;
    }
    s.alpha = 0;
    s.x = 160;
    s.y = 160;
    s.regX = 10;
    s.regY = 7;

    stage.addChild(s);
    shapes.push(s);
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

  for (let i = 1; i < 200; i++) {
    let s = shapes[i];
    createjs.Tween.get(s)
      .wait(i * 150)
      .to(
        { rotation: 140, scaleX: 32, scaleY: 30, alpha: 0.1 },
        3500,
          createjs.Ease.quadIn)
        .call(remove);
      
      function remove() {
         stage.removeChild(s)
      }
  }
};
