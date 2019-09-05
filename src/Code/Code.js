import React from 'react';
import style from "../appDetail.css";

const CodeData={
	list:[
		//2019年
		{id:"EnlargeImgLikeWechat",path:"/code/EnlargeImgLikeWechat",title:"模拟微信点击图片放大效果--仅限于移动端"}, 
		{id:"Jiugongge",path:"/code/Jiugongge",title:"九宫格抽奖"},  
		{id:"Maze",path:"/code/Maze",title:"迷宫普里姆算法与A*算法"},  
		{id:"RedPacket",path:"/code/RedPacket",title:"红包抽奖情况"},  
		{id:"wuzhen",path:"/code/wuzhen",title:"手机宣传广告模板--仅限于移动端"},  
		//2018年
		{id:"3dStart2018",path:"/code/3dStart2018",title:"3维环境搭建"},
		{id:"3dStar2018",path:"/code/3dStar2018",title:"星空"},
		{id:"aquatic2018",path:"/code/aquatic2018",title:"水草运动(贝塞尔曲线--正弦函数的运动)"},
		{id:"audio2018",path:"/code/audio2018",title:"音乐波形图"},
		{id:"crash2018",path:"/code/crash2018",title:"多物体碰撞--质量相同"},
		{id:"dongliang12018",path:"/code/dongliang12018",title:"动量守恒--单轴碰撞"},
		{id:"dongliang22018",path:"/code/dongliang22018",title:"动量守恒--双轴碰撞"},
		{id:"easing2018",path:"/code/easing2018",title:"缓动动画"},
		{id:"fireworks2018",path:"/code/fireworks2018",title:"烟花"},
		{id:"frameAnim2018",path:"/code/frameAnim2018",title:"帧动画"},
		{id:"gravitation2018",path:"/code/gravitation2018",title:"万有引力"},
		{id:"spring2018",path:"/code/spring2018",title:"弹性动画"},
		{id:"sun2018",path:"/code/sun2018",title:"太阳系"},
		{id:"tigermachine2018",path:"/code/tigermachine2018",title:"老虎机"},  
		       
	]   
}

const Article=()=>(<div>
	<section className={style.listBox}>
		<h1>最近代码</h1>
		<div className={style.hr}></div>
		<ul>
			{
				CodeData.list.map((item)=>(
					<li key={item.id} onClick={e=>{toPage(item.id)}}>
						{item.title}
					</li>
				))
			}
		</ul>
	</section>

</div>);

function toPage(params){
	if(params.indexOf("2018")!=-1){
		window.location.href=`http://www.guoliangjie.com/code/2018/${params}/index.html`;
	}
	else if(params.indexOf("2019")!=-1){
		window.location.href=`http://www.guoliangjie.com/code/2019/${params}/index.html`;
	}
	else if(params.indexOf("2020")!=-1){
		window.location.href=`http://www.guoliangjie.com/code/2020/${params}/index.html`;
	}
	else{
		window.location.href=`http://www.guoliangjie.com/code/2019/${params}/index.html`;
	}
}

export default Article;