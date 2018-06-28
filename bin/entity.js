class Entity{
    constructor(id, x, y, type){
        this.id = id;
        this.type = type;

        this._initPosition(x,y);
    }

    _initPosition(x, y){
        this.x = x;
        this.y = y;
        this.position = new Point(x, y);
          
        Object.defineProperty(this, 'x', {
            set: function(x){
                this.position.x = x;
            },
            get: function(){
                return this.position.x;
            }
        });
          
        Object.defineProperty(this, 'y', {
            set: function(y){
                this.position.y = y;
            },
            get: function(){
                return this.position.y;
            }
        });
    }   
}