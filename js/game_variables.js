var player;
var score = 0;
var gunHeat = 6;
var timeAlive = 0;
var playedOnce = false;

// IMAGES
var IMAGE_LOGO = "logo";
var IMAGE_STARFIELD = "starfield";
var IMAGE_SHIP = "ship";
var IMAGE_P1_BULLET = "p1_bullet";
var IMAGE_MINE = "mine";
var IMAGE_SMALL_METEOR = "small_meteor";
var IMAGE_POWERUP = "powerup";
var IMAGE_BTN_PLAY = "btnPlay";
var IMAGE_BTN_PLAY_AGAIN = "btnPlayAgain";

// groups
var aliens;
var bullets;
var explosions;
var mines;
var meteors;
var enemyBullets;
var powerups;
var livingEnemies = [];

// time related vars
var bulletTime = 0;
var mineTime = 0;
var firingTimer = 0;
var meteorTimer = 0;
var gunCooldown = 0;

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
var hudImgLogo;
var hudBtnPlay;
var hudBtnPlayAgain;

var healthBar;
var gunHeatBackgroundBar;
var gunHeatBar;

var starfield;
var backgroundScrollSpeed = 2;
var speedInc = 0.0005;

// constants
var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = $(window).height();

var PLAYER_SHIP_WIDTH = 28;
var BOTTOM_LIMIT = CANVAS_HEIGHT - 300;

var HEALTH_BAR_X = 802;
var HEALTH_BAR_Y = 46;
var GUN_HEAT_BAR_BG_X = 10;
var GUN_HEAT_BAR_BG_Y = 46;
var GUN_HEAT_BAR_X = 12;
var GUN_HEAT_BAR_Y = 48;

var gameState;
var GAMESTATE_NOTSTARTED = 'GAMESTATE_NOTSTARTED';
var GAMESTATE_PLAYING = 'GAMESTATE_PLAYING';
var GAMESTATE_DIED = 'GAMESTATE_DIED';
var GAMESTATE_GAMEOVER = 'GAMESTATE_GAMEOVER';