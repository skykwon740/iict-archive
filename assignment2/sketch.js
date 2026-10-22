let savedCanvas;

function setup() {
  createCanvas(600, 600);
  noCursor();

  resetCanvas();
  savedCanvas = get();
}

function draw() {
  // 스포이드가 그려지기 전 화면을 다시 보여줌
  image(savedCanvas, 0, 0);

  // 마우스를 따라다니는 스포이드
  drawPipette(mouseX, mouseY);
}

function resetCanvas() {
  background(220);

  // 페트리 접시
  // 접시 그림자
  noStroke();
  fill(70, 130, 155, 45);
  ellipse(308, 315, 510, 500);
  
  // 바깥쪽 투명 플라스틱 테두리
  fill(190, 235, 250, 120);
  stroke(55, 135, 170);
  strokeWeight(6);
  ellipse(300, 300, 510, 510);
  
  // 안쪽 테두리
  noFill();
  stroke(255, 255, 255, 170);
  strokeWeight(4);
  ellipse(300, 300, 485, 485);
  
  // 배양액 표면
  noStroke();
  fill(150, 215, 240, 125);
  ellipse(300, 300, 465, 465);
  
  // 유리 반사광
  fill(255, 255, 255, 125);
  ellipse(215, 185, 110, 35);
  ellipse(255, 210, 50, 18);
}

function mousePressed() {
  // 페트리 접시 안을 클릭했을 때만 생성
  if (dist(mouseX, mouseY, 300, 300) > 205) {
    return;
  }

  let microbe = {
    x: mouseX,
    y: mouseY,
    size: random(38, 58),
    angle: random(TWO_PI),

    bodyColor: color(
      random(80, 230),
      random(110, 230),
      random(110, 230)
    ),

    eyeCount: int(random(1, 5)),
    legCount: int(random(0, 7)),

    earSize: 18,
    tailLength: random(28, 48),
    tailCurl: random(-20, 20)
  };

  // 기존 미생물 그림을 먼저 다시 보여줌
  image(savedCanvas, 0, 0);

  // 새 미생물 추가
  drawMicrobe(microbe);

  // 스포이드를 제외한 현재 화면 저장
  savedCanvas = get();
}

function drawMicrobe(m) {
  push();
  translate(m.x, m.y);
  rotate(m.angle);

  // 꼬리
  noFill();
  stroke(40);
  strokeWeight(5);
  strokeCap(ROUND);

  bezier(
    m.size * 0.35, 0,
    m.size * 1.3, -m.size * 0.7,
    m.size * 1.5, m.size * 0.7,
    m.size + m.tailLength, m.tailCurl
  );

  // 다리
  stroke(45);
  strokeWeight(3);

  for (let i = 0; i < m.legCount; i++) {
    let angle = map(i, 0, m.legCount, 0, TWO_PI) + 0.3;
    let endX = cos(angle) * m.size * 1.2;
    let endY = sin(angle) * m.size * 1.2;

    line(0, 0, endX, endY);
  }

  // 몸체: 랜덤한 원 3~4개를 겹쳐 그림
  noStroke();
  fill(m.bodyColor);

  let partCount = int(random(3, 5));

  for (let i = 0; i < partCount; i++) {
    ellipse(
      random(-m.size * 0.35, m.size * 0.35),
      random(-m.size * 0.25, m.size * 0.25),
      random(m.size * 1.1, m.size * 1.7),
      random(m.size * 0.9, m.size * 1.35)
    );
  }

  // 고양이 귀
  fill(40);

  let earBaseY = -m.size * 0.48;

  triangle(
    -m.size * 0.6, earBaseY + 8,
    -m.size * 0.38, earBaseY - m.earSize,
    -m.size * 0.12, earBaseY + 8
  );

  triangle(
    m.size * 0.12, earBaseY + 8,
    m.size * 0.38, earBaseY - m.earSize,
    m.size * 0.6, earBaseY + 8
  );

  // 눈
  for (let i = 0; i < m.eyeCount; i++) {
    let eyeX = random(-m.size * 0.5, m.size * 0.5);
    let eyeY = random(-m.size * 0.4, m.size * 0.4);

    fill(255);
    stroke(35);
    strokeWeight(3);
    ellipse(eyeX, eyeY, m.size * 0.38, m.size * 0.32);

    fill(25);
    noStroke();
    ellipse(eyeX, eyeY, m.size * 0.15, m.size * 0.16);
  }

  pop();
}

function drawPipette(x, y) {
  push();
  translate(x, y);

  // 관의 밝은 부분
  stroke(255);
  strokeWeight(12);
  line(0, -10, 75, -85);

  // 고무 부분
  stroke(255);
  strokeWeight(28);
  strokeCap(ROUND);
  line(75, -85, 93, -103);

  pop();
}

// esc 누르면 미생물만 지우기
function keyPressed() {
  if (keyCode === ESCAPE) {
    resetCanvas();
    savedCanvas = get();
  }
}