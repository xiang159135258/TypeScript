import './style/reset.less';
import './style/index.less';

class Food{
    // 定义一个属性表示食物所对应的元素
    element : HTMLElement;

    constructor(){
        this.element = document.getElementById("food")!;
    }

    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    change(){
        // 食物位置(0 ,290)
        let top =  Math.round( Math.random()*29 ) * 10 ;//random随机生成范围(0,29)  round()四舍五入 *10取10的倍数
        let left = Math.round( Math.random()*29 ) * 10 ;//random随机生成范围(0,29)  round()四舍五入 *10取10的倍数
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

// test
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);
