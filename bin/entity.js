class Entity{
    constructor(id, x, y, type){
        this.id = id;
        this.type = type || 'default';
        this.key = 'default';

        this._initPosition(x,y);
    }

    update(deltaTime){

    }

    _initPosition(x, y){
        this.x = x;
        this.y = y;
        this.pos = new Point(x, y);
          
        Object.defineProperty(this, 'x', {
            set: function(x){
                this.pos.x = x;
            },
            get: function(){
                return this.pos.x;
            }
        });
          
        Object.defineProperty(this, 'y', {
            set: function(y){
                this.pos.y = y;
            },
            get: function(){
                return this.pos.y;
            }
        });
    }   
}