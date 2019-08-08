let stage;
let nameTag;
let shapes;
let oldSeconds = 0;

let init = () => {
  stage = new createjs.Stage(document.getElementById("myCanvas"));
  nameTag = document.getElementById("nameTag");

  setup();
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
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
  let radius = 150;
  let speed = 0.01;
  let centerHue = 150;

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    let hue = centerHue + Math.cos(angle) * radius;
    let color1 = "hsl(" + hue + ", 70%, 20%)";
    let color2 = "hsl(" + hue + ", 70%, 70%)";
    bg.graphics
      .beginRadialGradientFill(
        [color1, color2],
        [0.05, 1],
        150,
        150,
        0.01,
        150,
        150,
        250
      )
      .drawRect(0, 0, 300, 300);
    angle += speed;
    stage.addChild(bg);
    stage.setChildIndex(bg, 0);
  }

  shapes = new Array();
  for (let i = 0; i < 25; i++) {
    let s = new createjs.Shape();
    s.graphics.beginStroke("#ffffff");
    s.graphics.setStrokeStyle(0.3);
    s.graphics.drawRect(0, 0, 20, 16);
    s.alpha = 0;
    s.x = 160;
    s.y = 160;
    s.regX = 10;
    s.regY = 7;
    stage.addChild(s);
    shapes.push(s);
    stage.setChildIndex(s, 1);
  }

  shapes2 = new Array();
  for (let i = 0; i < 25; i++) {
    let p = new createjs.Shape();
    p.graphics.beginStroke("#fafafa");
    p.graphics.setStrokeStyle(0.1);
    p.graphics.drawRect(0, 0, 20, 16);
    p.alpha = 0;
    p.x = 155;
    p.y = 155;
    p.regX = 8;
    p.regY = 9;
    stage.addChild(p);
    shapes2.push(p);
    stage.setChildIndex(p, 1);
  }

  shapesB1 = new Array();
  for (let i = 0; i < 25; i++) {
    let k = new createjs.Shape();
    k.graphics.beginStroke("#ffffff");
    k.graphics.setStrokeStyle(0.3);
    k.graphics.drawRect(0, 0, 17, 21);
    k.alpha = 0;
    k.x = 140;
    k.y = 150;
    k.regX = 8;
    k.regY = 9;
    stage.addChild(k);
    shapesB1.push(k);
    stage.setChildIndex(k, 1);
  }
  shapesB2 = new Array();
  for (let i = 0; i < 25; i++) {
    let b = new createjs.Shape();
    b.graphics.beginStroke("#fafafa");
    b.graphics.setStrokeStyle(0.1);
    b.graphics.drawRect(0, 0, 17, 21);
    b.alpha = 0;
    b.x = 138;
    b.y = 150;
    b.regX = 9;
    b.regY = 8;
    stage.addChild(b);
    shapesB2.push(b);
    stage.setChildIndex(b, 1);
  }

  shapesC1 = new Array();
  for (let i = 0; i < 25; i++) {
    let v = new createjs.Shape();
    v.graphics.beginStroke("#ffffff");
    v.graphics.setStrokeStyle(0.3);
    v.graphics.drawRect(0, 0, 17, 21);
    v.alpha = 0;
    v.x = 150;
    v.y = 140;
    v.regX = 12;
    v.regY = 11;
    stage.addChild(v);
    shapesC1.push(v);
    stage.setChildIndex(v, 1);
  }
  shapesC2 = new Array();
  for (let i = 0; i < 25; i++) {
    let d = new createjs.Shape();
    d.graphics.beginStroke("#fafafa");
    d.graphics.setStrokeStyle(0.1);
    d.graphics.drawRect(0, 0, 17, 21);
    d.alpha = 0;
    d.x = 146;
    d.y = 145;
    d.regX = 11;
    d.regY = 12;
    stage.addChild(d);
    shapesC2.push(d);
    stage.setChildIndex(d, 1);
  }

  let time = new createjs.Text("Hello World", "bold 30px sans-serif", "white");
  stage.addChild(time);
  time.x = 80;
  time.y = 135;
};

let loop = () => {
  for (let i = 0; i < 25; i++) {
    let s = shapes[i];
    createjs.Tween.get(s)
      .wait(i * 150)
      .to(
        { rotation: 140, scaleX: 32, scaleY: 30, alpha: 1 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(s);
    }
  }
  for (let i = 0; i < 25; i++) {
    let p = shapes2[i];
    createjs.Tween.get(p)
      .wait(i * 150)
      .to(
        { rotation: 140, scaleX: 32, scaleY: 30, alpha: 1 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(p);
    }
  }

  for (let i = 0; i < 25; i++) {
    let k = shapesB1[i];
    createjs.Tween.get(k)
      .wait(3100)
      .wait(i * 150)
      .to(
        { rotation: 140, scaleX: 20, scaleY: 25, alpha: 0.5 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(k);
    }
  }

  for (let i = 0; i < 25; i++) {
    let b = shapesB2[i];
    createjs.Tween.get(b)
      .wait(3100)
      .wait(i * 150)
      .to(
        { rotation: 140, scaleX: 20, scaleY: 25, alpha: 0.5 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(b);
    }
  }

  for (let i = 0; i < 25; i++) {
    let v = shapesC1[i];
    createjs.Tween.get(v)
      .wait(6500)
      .wait(i * 150)
      .to(
        { rotation: -190, scaleX: 20, scaleY: 25, alpha: 0.5 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(v);
    }
  }

  for (let i = 0; i < 25; i++) {
    let d = shapesC2[i];
    createjs.Tween.get(d)
      .wait(6500)
      .wait(i * 150)
      .to(
        { rotation: -190, scaleX: 20, scaleY: 25, alpha: 0.5 },
        3500,
        createjs.Ease.quadIn
      )
      .call(remove);

    function remove() {
      stage.removeChild(d);
    }
  }
};
