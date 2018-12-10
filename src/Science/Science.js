import React from 'react';
import { NavLink } from "react-router-dom";
import ScienceData from "./ScienceData";
import style from "../appDetail.css";

const Article=()=>(<div>
	<section className={style.listBox}>
		<h1>最近更新</h1>
		<div className={style.hr}></div>
		<ul>
			{
				ScienceData.list.map((item)=>(
					<li key={item.id}>
						<NavLink to={`/science/${item.id}`} activeStyle={{color:"red"}}>{item.title}</NavLink>
					</li>
				))
			}
		</ul>
	</section>

</div>);

export default Article;