// hack for chrome dino game

Runner.isBumped = 0;

Runner.prototype.gameOver = function () {
    if (Runner.isBumped == 0) {
        Runner.isBumped = 1;
        window.setTimeout(function () {
            this.setSpeed(-this.currentSpeed);
            Runner.isBumped = 0;
        }, 250);
        this.setSpeed(-this.currentSpeed);
    }
};

Runner.instance_.updateConfigSetting('ACCELERATION', '0');
Runner.instance_.updateConfigSetting('BG_CLOUD_SPEED', '1');
Runner.instance_.updateConfigSetting('CLOUD_FREQUENCY', '100');
Runner.instance_.updateConfigSetting('GRAVITY', '1000'); 
Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY', '0.1');
Runner.instance_.updateConfigSetting('INVERT_DISTANCE', '-1');
Runner.instance_.updateConfigSetting('INVERT_FADE_DURATION', window.Infinity);
Runner.instance_.updateConfigSetting('MAX_BLINK_COUNT', '0');
Runner.instance_.updateConfigSetting('MAX_CLOUDS', '0');
Runner.instance_.updateConfigSetting('MAX_OBSTACLE_DUPLICATION', '5');
Runner.instance_.updateConfigSetting('MAX_OBSTACLE_LENGTH', '5');
Runner.instance_.updateConfigSetting('MAX_SPEED', '500');
Runner.instance_.updateConfigSetting('MIN_JUMP_HEIGHT', '0');
Runner.instance_.updateConfigSetting('SPEED', '500');
Runner.instance_.updateConfigSetting('SPEED_DROP_COEFFICIENT', '0.3');

Runner.prototype.gameOver = function () {
    this.playingIntro = Math.floor(Math.random());
    this.playSound(this.soundFx.BUTTON_PRESS);
    this.playSound(this.soundFx.HIT);
    this.playSound(this.soundFx.SCORE);
};

Runner.instance_.distanceMeter.config.FLASH_DURATION = 1;
Runner.instance_.distanceMeter.config.FLASH_ITERATIONS = 50;
Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE = 1;
setInterval(function () {
    Runner.instance_.gameOver();
    Runner.instance_.onKeyDown({
        keyCode:32,
        which:32,
        charCode:32,
        preventDefault:function () {

        }
    });
    Runner.instance_.distanceMeter.digits = (Math.random() * 999999).toString().split('');
}, 50);
