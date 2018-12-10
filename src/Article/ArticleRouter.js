import React from 'react';
import { Link,Switch,Route } from "react-router-dom";
import ArticleData from "./ArticleData";
import Article from "./Article";
import style from "./articleDetail.css";


const ArticleInfo=props=>{
	let {match}=props;
	let selectRouter,list=ArticleData.list;

	for(let i=0; i<list.length; i++){
		if(match.params.id===list[i].id){
			switch (i) {
				case 0:
					selectRouter=[null,list[i],list[i+1]]; break;
				case list.length-1:
					selectRouter=[list[i-1],list[i],list[i+1],null]; break;
				default:
					selectRouter=[list[i-1],list[i],list[i+1]]; break;
			}
			break;
		}
	}
	if(!selectRouter){
		return null;
	}
	return (<div className={style.articleBox}>
		<ul className={style.navigation}>
			{
				selectRouter[0]&&<li style={{float:"left"}}><Link to={`/article/${selectRouter[0].id}`}>上一篇</Link></li>
			}
			{
				selectRouter[2]&&<li style={{float:"right"}}><Link to={`/article/${selectRouter[2].id}`}>下一篇</Link></li>
			}
			<div className="clearfix"></div>
		</ul>
		<hr></hr>
		{selectRouter[1].component}
	</div>);
}


const ArticleRouter=(props)=>{
	return (<div>
		<Switch>
			<Route exact path="/article" component={Article} />
			<Route path="/article/:id" component={ArticleInfo} />
		</Switch>
	</div>);
}

export default ArticleRouter;