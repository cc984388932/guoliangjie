import React from 'react';
import style from "../appDetail.css";

const CodeData={
	list:[
		{id:"audio2018",path:"/code/audio2018",title:"音乐波形"},
		{id:"frameAnim2018",path:"/code/frameAnim2018",title:"帧动画"},
		{id:"sun2018",path:"/code/sun2018",title:"圆周运动"},
		{id:"彩色喷泉2018",path:"/code/彩色喷泉2018",title:"彩色喷泉"},
		{id:"烟花2018",path:"/code/烟花2018",title:"烟花"},
		{id:"老虎机2018",path:"/code/老虎机2018",title:"老虎机"},
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
}

export default Article;