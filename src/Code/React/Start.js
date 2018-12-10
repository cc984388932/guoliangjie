import React from 'react';
import style from "../codeDetail.css";

class Start extends React.Component{
	render(){
		return (
			<div>
				<article className={style.article}>
					<h1>我的第一篇段代码</h1>
					<time>日期 : ||-- </time>
					<p>
						<a href="http://www.guoliangjie.com/main/sun/index.html">跳转到百度</a>
					</p>
					
				</article>
			</div>
		)
	}
}

export default Start;
