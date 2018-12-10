import React from 'react';
import { Link } from "react-router-dom";
import style from "./home.css";

class Home extends React.Component{
	render(){
		return (
			<div className={style.homeBox}>
				<canvas className={style.can+" can"}></canvas>
				<section className={style.menuBox}>
					<h1>郭良杰的个人网站</h1>
					<ul>
						<li><Link to="/article">随笔</Link></li>
						<li><Link to="/code">代码</Link></li>
						<li><Link to="/science">科学</Link></li>
					</ul>
				</section>
				
			</div>
		)
	}
	componentDidMount (){
		let can=document.querySelector(".can");
		// new CanvasBg({
		// 	can
		// });
	}
}

export default Home;
