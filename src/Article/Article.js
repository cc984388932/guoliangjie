import React from 'react';
import { NavLink } from "react-router-dom";
import ArticleData from "./ArticleData";
import style from "../appDetail.css";

const Article=()=>(<div>
	<section className={style.listBox}>
		<h1>最近文章</h1>
		<div className={style.hr}></div>
		<ul>
			{
				ArticleData.list.map((item)=>(
					<li key={item.id}>
						<NavLink to={`/article/${item.id}`} activeStyle={{color:"red"}}>{item.title}</NavLink>
					</li>
				))
			}
		</ul>
	</section>

</div>);

export default Article;