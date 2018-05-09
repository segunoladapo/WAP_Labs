'use strict'

var createBicyclePrototype = {
    speed : 0,
    applyBrake : function (speed) {
        this.speed -= speed;
    },
    speedUp : function (speed) {
        this.speed += speed;
    }
};

var createMountainBikeProtoype = {
    __proto__ : createBicyclePrototype
};

var mountainBike = Object.create(createBicyclePrototype);
mountainBike.prototype.gear = 1;
mountainBike.prototype.setGear = function (gear) {
    this.gear = gear;
};

var bicyclePrototype = {
    __proto__: createBicyclePrototype
};

var mountainBikePrototype = {
    __proto__: createBicyclePrototype
};
/*
    = Object.create(createBicyclePrototype);
c
 */

