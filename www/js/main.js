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
 
    let bg = new createjs.Shape();
    let angle = 0;
    let radius = 50;
    let speed = 0.01;
    let centerHue = 180;
    let centerHue2 = 90;

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
      let hue = centerHue + Math.cos(angle) * radius;
      let hue2 = centerHue2 + Math.cos(angle) * radius;
      let color1 = "hsl(" + hue + ", 60%, 30%)";
      let color2 = "hsl(" + hue2 + ", 60%, 30%)";      
      bg.graphics
      .beginRadialGradientFill(
        [color1, color2],
        [0.01, 1.0],
        150,
        150,
        1,
        150,
        150,
        200
      )
      .drawRect(0, 0, 300, 300);
    angle += speed;
    stage.addChild(bg);
  }
    
    shapes = new Array();

  for (let i = 0; i < 200; i++) {
    let s = new createjs.Shape();
      s.graphics.beginStroke("#ffffff");
      s.graphics.setStrokeStyle(0.1);
      s.graphics.drawRect(0, 0, 20, 16);
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
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(s);
    }
  }
};
