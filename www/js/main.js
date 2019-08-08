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

  let time1 = new createjs.Text("1", "1px sans-serif", "white");
  time1.x = 145;
  time1.y = 140;
  stage.addChild(time1);
  stage.setChildIndex(time1, 0);

  createjs.Tween.get(time1)
    .wait(200)
    .to(
      { rotation: -30, scaleX: 150, scaleY: 150, alpha: 0 },
      2200,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time1);
  }
  let time8 = new createjs.Text("2", "1px sans-serif", "white");
  time8.x = 155;
  time8.y = 160;
  time8.regX = 2;
  time8.regY = 2;
  stage.addChild(time8);
  stage.setChildIndex(time8, 0);

  createjs.Tween.get(time8)
    .wait(1000)
    .to(
      { rotation: 50, scaleX: 150, scaleY: 100, alpha: 0 },
      2200,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time8);
  }

  let time2 = new createjs.Text("3", "1px sans-serif", "white");
  time2.x = 145;
  time2.y = 140;
  stage.addChild(time2);
  stage.setChildIndex(time2, 0);

  createjs.Tween.get(time2)
    .wait(2000)
    .to(
      { rotation: 70, scaleX: 270, scaleY: 220, alpha: 0 },
      2400,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time2);
  }

  let time9 = new createjs.Text("4", "1px sans-serif", "white");
  time9.x = 175;
  time9.y = 180;
  time9.regX = 2;
  time9.regY = 2;
  stage.addChild(time9);
  stage.setChildIndex(time9, 0);

  createjs.Tween.get(time9)
    .wait(3000)
    .to(
      { rotation: 180, scaleX: 220, scaleY: 180, alpha: 0 },
      2600,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time9);
  }

  let time3 = new createjs.Text("5", "1px sans-serif", "white");
  time3.x = 155;
  time3.y = 160;
  stage.addChild(time3);
  stage.setChildIndex(time3, 0);

  createjs.Tween.get(time3)
    .wait(3900)
    .to(
      { rotation: 30, scaleX: 270, scaleY: 220, alpha: 0 },
      2000,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time3);
  }

  let time10 = new createjs.Text("6", "1px sans-serif", "white");
  time10.x = 155;
  time10.y = 160;
  stage.addChild(time10);
  stage.setChildIndex(time10, 0);

  createjs.Tween.get(time10)
    .wait(5000)
    .to(
      { rotation: 190, scaleX: 180, scaleY: 180, alpha: 0 },
      2000,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time10);
  }

  let time4 = new createjs.Text("7", "1px sans-serif", "white");
  time4.x = 145;
  time4.y = 140;
  stage.addChild(time4);
  stage.setChildIndex(time4, 0);

  createjs.Tween.get(time4)
    .wait(6000)
    .to(
      { rotation: -35, scaleX: 150, scaleY: 150, alpha: 0 },
      2200,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time4);
  }

  let time11 = new createjs.Text("8", "1px sans-serif", "white");
  time11.x = 155;
  time11.y = 160;
  stage.addChild(time11);
  stage.setChildIndex(time11, 0);

  createjs.Tween.get(time11)
    .wait(7000)
    .to(
      { rotation: 250, scaleX: 270, scaleY: 220, alpha: 0 },
      2000,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time11);
  }

  let time5 = new createjs.Text("9", "1px sans-serif", "white");
  time5.x = 175;
  time5.y = 170;
  time5.regX = 2;
  time5.regY = 2;
  stage.addChild(time5);
  stage.setChildIndex(time5, 0);

  createjs.Tween.get(time5)
    .wait(8000)
    .to(
      { rotation: -170, scaleX: 230, scaleY: 300, alpha: 0 },
      2600,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time5);
  }

  let time12 = new createjs.Text("10", "1px sans-serif", "white");
  time12.x = 145;
  time12.y = 140;
  stage.addChild(time12);
  stage.setChildIndex(time12, 0);

  createjs.Tween.get(time12)
    .wait(9000)
    .to(
      { rotation: -20, scaleX: 180, scaleY: 170, alpha: 0 },
      2200,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time12);
  }

  let time6 = new createjs.Text("11", "1px sans-serif", "white");
  time6.x = 135;
  time6.y = 180;
  stage.addChild(time6);
  stage.setChildIndex(time6, 0);

  createjs.Tween.get(time6)
    .wait(10000)
    .to(
      { rotation: -150, scaleX: 220, scaleY: 220, alpha: 0 },
      2600,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time6);
  }

  let time7 = new createjs.Text("12", "1px sans-serif", "white");
  time7.x = 125;
  time7.y = 130;
  stage.addChild(time7);
  stage.setChildIndex(time7, 0);

  createjs.Tween.get(time7)
    .wait(11000)
    .to(
      { rotation: 60, scaleX: 350, scaleY: 300, alpha: 0 },
      2600,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time7);
  }
  let time13 = new createjs.Text("12", "1px sans-serif", "white");
  time13.x = 155;
  time13.y = 160;
  stage.addChild(time13);
  stage.setChildIndex(time13, 0);

  createjs.Tween.get(time13)
    .wait(11001)
    .to(
      { rotation: 30, scaleX: 300, scaleY: 300, alpha: 0 },
      2600,
      createjs.Ease.quadIn
    )
    .call(remove);

  function remove() {
    stage.removeChild(time13);
  }
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
