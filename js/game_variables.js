var player;
var score = 0;
var gunHeat = 6;
var timeAlive;
var playedOnce = false;
var numberMines = 3;
var firedLasers;
var meteorHits;
var astronaut;

// POWERUPS
var powerupShield;
var powerupTweenShield;

// IMAGES
var IMAGE_LOGO = "logo";
var IMAGE_ASTRONAUT = "astronaut";
var IMAGE_STARFIELD = "starfield";
var IMAGE_SHIP = "ship";
var IMAGE_SHIP_DAMAGED = "ship_damaged";
var IMAGE_P1_BULLET = "p1_bullet";
var IMAGE_ALIEN_BULLET = "alien_bullet";
var IMAGE_MINE = "mine";
var IMAGE_SMALL_METEOR = "small_meteor";
var IMAGE_PICKUP_HEALTH = "pickupHealth";
var IMAGE_PICKUP_SHIELD = "pickupShield";
var IMAGE_PICKUP_MINE = "pickupMine";
var IMAGE_POWERUP_SHIELD = "powerupShield";
var IMAGE_BTN_PLAY = "btnPlay";
var IMAGE_BTN_PLAY_AGAIN = "btnPlayAgain";
var IMAGE_ALIEN_SHIP = "alien_ship";
var IMAGE_YOU_CALLOUT = "youCallout";
var IMAGE_DEBRIS1 = "debris1";
var IMAGE_DEBRIS2 = "debris2";
var IMAGE_DEBRIS3 = "debris3";

var IMAGE_DEBRIS = [IMAGE_DEBRIS1, IMAGE_DEBRIS2, IMAGE_DEBRIS3];

// groups
var aliensGroup;
var bulletsGroup;
var explosionsGroup;
var deployedMinesGroup;
var minesGroup;
var meteorsGroup;
var alienBulletsGroup;
var pickupGroup;
var livingEnemies = [];

// time related vars
var bulletTime = 0;
var mineTime = 0;
var firingTimer = 0;
var meteorTimer = 0;
var gunCooldown = 0;
var powerupShieldTimer;

// control keys
var cursors;
var fireButton;
var dropButton;

// sounds
var s_laser;
var s_explosion;

// HUDs
var hudTxtScore;
var hudTxtHealth;
var hudTxtMines;
var hudTxtPowerupShield;
var hudTxtPowerupRevive;
var hudTxtPowerupMine;
var hudTxtOverheatGun;
var hudImgLogo;
var hudBtnPlay;
var hudBtnPlayAgain;
var hudTxtGameOver;
var hudImgYouCallout;

var graphics;
var starfield;
var backgroundScrollSpeed = 2;
var speedInc = 0.0005;

// constants
var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = $(window).height();
var METEOR_WIDTH = 44;
var METEOR_HEIGHT = 42;

var GAME_SPEED_QF = 1;
var PICKUP_DROP_CHANGE = 0.2;
var PICKUP_DESPAWN_RATE = 7;
var PICKUP_DURATION_TIME = 8;

var PLAYER_SHIP_WIDTH = 33;
var PLAYER_SHIP_HEIGHT = 25;
var BOTTOM_LIMIT = CANVAS_HEIGHT - 300;
var ALIEN_SHIP_WIDTH = 32;
var PLAYER_BULLET_HEIGHT = 36;
var ALIEN_BULLET_HEIGHT = 9;

var HEALTH_BAR_X = 802;
var HEALTH_BAR_Y = 46;
var GUN_HEAT_BAR_BG_X = 10;
var GUN_HEAT_BAR_BG_Y = 70;
var GUN_HEAT_BAR_X = GUN_HEAT_BAR_BG_X + 2;
var GUN_HEAT_BAR_Y = GUN_HEAT_BAR_BG_Y + 2;

var gameState;
var GAMESTATE_NOTSTARTED = 'GAMESTATE_NOTSTARTED';
var GAMESTATE_PLAYING = 'GAMESTATE_PLAYING';
var GAMESTATE_DIED = 'GAMESTATE_DIED';
var GAMESTATE_GAMEOVER = 'GAMESTATE_GAMEOVER';