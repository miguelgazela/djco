var player;
var score = 0;
var gunHeat = 6;

// groups
var aliens;
var bullets;
var explosions;
var mines;
var meteors;
var enemyBullets;
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

// texts
var scoreText;
var healthText;

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