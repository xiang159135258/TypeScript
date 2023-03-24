class Snake{
    // 蛇头元素
    head : HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies : HTMLCollection;
    //蛇的容器
    element : HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }

    // 蛇头坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value){
        if (this.X == value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error('Game Over');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
            
        }
        this.moveBody();
        this.head.style.left = value +'px';
        this.checkHeadBody();
    }
    set Y(value){
        if (this.Y == value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error('Game Over');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
            
        }
        this.moveBody();
        this.head.style.top = value +'px';
        this.checkHeadBody();
    }

    addBody(){
        // 向element 中添加一个div
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody(){
        // 将后面的身体设置为前面身体的位置
        for(let i= this.bodies.length-1 ; i>0 ; i--){
            // 获取前边身体的位置
            let X =(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y =(this.bodies[i-1] as HTMLElement).offsetTop;

            // 设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){
        for(let i =1 ; i< this.bodies.length ; i++){
            let bd = (this.bodies[i] as HTMLElement);
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('Game Over');
            }
        }
    }
}

export default Snake;