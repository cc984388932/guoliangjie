import React from 'react';
import { Link,Switch,Route } from "react-router-dom";
import ScienceData from "./ScienceData";
import Science from "./Science";
import style from "./scienceDetail.css";


const ScienceInfo=props=>{
	let {match}=props;
	let selectRouter,list=ScienceData.list;

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
		console.log(1111);
		return null;
	}
	return (<div className={style.articleBox}>
		<ul className={style.navigation}>
			{
				selectRouter[0]&&<li style={{float:"left"}}><Link to={`/science/${selectRouter[0].id}`}>上一篇</Link></li>
			}
			{
				selectRouter[2]&&<li style={{float:"right"}}><Link to={`/science/${selectRouter[2].id}`}>下一篇</Link></li>
			}
			<div className="clearfix"></div>
		</ul>
		<hr></hr>
		{selectRouter[1].component}
	</div>);
}


const ScienceRouter=()=>{
	return (<div>
		<Switch>
			<Route exact path="/science" component={Science} />
			<Route path="/science/:id" component={ScienceInfo} />
		</Switch>
	</div>);
}

export default ScienceRouter;