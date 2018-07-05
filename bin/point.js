class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    set(x, y){
        this.x = x;
        this.y = y || x;
    }

    getMagnitude(){
        return Math.sqrt(x*x + y*y);
    }
}

module.exports = Point;