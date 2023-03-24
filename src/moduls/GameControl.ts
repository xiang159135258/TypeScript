import Snake from "./snake";
import Food from './food';  
import ScorePanel from './ScorePanel';  

class GameControl{

    snake :  Snake;
    food :  Food;
    scorepanel :  ScorePanel;

    // 移动方向
    dierction : string = '';
    // 游戏是否结束
    isLive = true;


    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel(10 ,2);

        this.init();
    }

    init(){
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event : KeyboardEvent){
        if (event.key == 'ArrowUp'){
            this.dierction =  event.key;
        }else if(event.key == 'ArrowDown'){
            this.dierction =event.key
        }else if(event.key == 'ArrowLeft'){
            this.dierction =event.key
        }else if(event.key == 'ArrowRight'){
            this.dierction =event.key
        }
        
    }

    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.dierction){
            case "ArrowUp":
                Y -= 10;
                break;

            case "ArrowDown":
                Y += 10;
                break;

            case "ArrowLeft":
                X -= 10;
                break;
                
            case "ArrowRight":
                X += 10;
                break;
        }

        this.checkEat(X, Y)
            
    

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            alert(e.message);
            this.isLive = false;
        }
        

        // 定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level-1) * 30);
    }

    // 检查蛇是否迟到食物
    checkEat(X:number, Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorepanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl;