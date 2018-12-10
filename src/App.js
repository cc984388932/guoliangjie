import React from 'react';
import { Route,Switch,Redirect,Link,withRouter } from "react-router-dom";
import RouterData from "./RouterData";
import style from "./appDetail.css";


const App=props=>{
	let {pathname}=props.location;
	let selectRouter=RouterData.list.find(item=>pathname.indexOf(item.path)!==-1);
	return (<div>
			{
				selectRouter && selectRouter.id!=="home" && 
				<nav className={style.navBox}>
					<Link to="/home">郭良杰的个人网站</Link>
					<Link to={`/${selectRouter.id}`}> >> {selectRouter.title}</Link>
				</nav>
			}
		<Switch>
			{
				true && RouterData.list.map(item=><Route key={item.id} path={item.path} component={item.component} />)
			}
			<Redirect exact from="/" to="/home" />
		</Switch>
	</div>)
}


export default withRouter(App);
