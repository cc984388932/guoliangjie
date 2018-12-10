class Ball{
	constructor(props){
		this.canvasW=props.w;
		this.canvasH=props.h;
		this.init();
	}
	init(){
		this.x=this.random(0,this.canvasW);
		this.y=this.random(0,this.canvasH);
		this.r=this.random(0,3);
		this.color=this.randomColor();
		this.vx=8;
		this.vy=this.random(4,10);
		this.ax=0;
		this.ay=0;
	}
	moveX(){
		this.vx+=this.ax;
		this.x+=this.vx;
	}
	moveY(){
		this.vy+=this.ay;
		this.y+=this.vy;
		if(this.y>this.canvasH*2){
			this.reStart();
		}
	}
	move(){
		this.moveX();
		this.moveY();
	}
	reStart(){
		this.init();
		this.y=-this.r;
	}
	draw(ctx){
		ctx.beginPath();
		ctx.fillStyle=this.color;
		ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
	}
	random(min,max){
		return Math.floor((max-min+1)*Math.random())+min;
	}
	randomColor(){
		const color1=this.random(0,255);
		const color2=this.random(0,255);
		const color3=this.random(0,255);
		return `rgb(${color1},${color2},${color3})`;
	}
}

//设置画面背景
class CanvasBg{
	constructor(props){
		this.can=props.can;
		this.ctx=this.can.getContext("2d");
		const clientBount=this.can.getBoundingClientRect();
		this.w=this.can.width=clientBount.width;
		this.h=this.can.height=clientBount.height;
		this.fasteTime=0;   //时间流逝
		this.init();
		this.update();
	}
	init(){
		this.balls=[];
		for(let i=0; i<2; i++){
			this.balls.push(new Ball({
				w:this.w,
				h:this.h
			}))
		}
	}
	update(){
		this.fasteTime++;
		this.ctx.beginPath();
		this.ctx.fillStyle="rgba(0,0,0,0.1)";
		this.ctx.rect(0,0,this.w,this.h);
		this.ctx.fill();
		this.ctx.closePath();
		this.draw();
		requestAnimationFrame(()=>{this.update()});
	}
	draw(){
		this.balls.forEach(item=>{
			item.move();
			item.draw(this.ctx);
		})
	}
}


export default CanvasBg;
