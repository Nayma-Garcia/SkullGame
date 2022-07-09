//background
var background = createSprite(200,200);
background.setAnimation("background");

// player
var player = createSprite(185,295);
player.setAnimation("playerright");

// enemy 1 skull boss
var enemy = createSprite(270,160);
enemy.setAnimation("skullboss");
enemy.scale = 0.4;

// heart crystol
var crystol = createSprite(200,295);
crystol.y = 295;
crystol.setAnimation("crystol");
crystol.scale = 0.15;

// death screen
var death = createSprite(200,200);
death.setAnimation("death");
death.visible = false;

// win screen 
var win = createSprite(200,200);
win.setAnimation("win");
win.visible = false;
// score
var score = 0;
var health = 100;

// music
playSound("Terraria-Music---Boss-1.mp3");
function draw() {
  move();
  enemies();
  life();
  music();
  drawSprites();
  showScore();
  if (health <0) {
    death.visible = true;
  }
  if (score > 14) {
    win.visible = true;
  }
  
  
}

// Create your functions here
function move() {
  if (keyDown("right")) {
    player.velocityX = 5;
    player.setAnimation("playerright");
  } else if (keyDown("left")){
    player.velocityX = -5;
    player.setAnimation("playerleft");
  } else
  player.velocityX = 0;
  if (keyDown("up")) {
  player.velocityY = -5;
  player.velocityY = player.velocityY + 0.06;
  } else {
    player.velocityY = 5;
  }
  if (player.y > 295) {
    player.velocityY = 0;
    player.y = 295;
  }
}


//enemy functions
function enemies() {
  enemy.velocityX = randomNumber(-30,30);
  enemy.velocityY = randomNumber(-30,30);
  if (enemy.x < 0) {
    enemy.velocityX = 30;
  }
  if (enemy.x > 350)
  enemy.velocityX = -30;
if (enemy.y < 0) {
  enemy.velocityY = 30;
}
if (enemy.y > 350) {
  enemy.velocityY = -30;
}
if (player.isTouching(enemy)) {
  health = health - 1;
}
}

// life crystol 
function life() {
  if (player.isTouching(crystol)) {
    score = score + 1;
  }
  if (player.isTouching(crystol)) {
    crystol.x = randomNumber(5,380);
    crystol.y = randomNumber(5,294);
  }
  
}

//music
function music() {
  if (health < 0) {
    stopSound("Terraria-Music---Boss-1.mp3");
    playSound("Videogame-Lose-Sound-Effect-HD-_-No-Copyright.mp3");
  }
  if (score > 14) {
    stopSound("Terraria-Music---Boss-1.mp3");
    playSound("Dababy---LET'S-GO-sound-effect.mp3");
  }
}

  

  //scoreboard
  
function showScore() {
  fill("black");
  textSize(20);
  text("Score:", 30, 30);
  text(score, 100, 30);
  text("Health:", 280, 30);
  text(health, 350, 30);
}