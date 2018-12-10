文章格式
import React from 'react';
import style from "../articleDetail.css";
import img2018102401 from "./img/20181024-01.jpg";

class Start extends React.Component{
	render(){
		return (
			<div>
				<article className={style.article}>
				
				**	<h1>我的第一篇文章</h1>

				**	<time>日期 : 2018年10月24日</time>

				**	<p className={style.important}>重要的文本</p>

				**	<div className={style.img}>
						<img src={img2018102401} alt="风景图片" />
						<div className={style.imgDesc}>这是一张分净土</div>
					</div>

				**	<p>正文</p>
				**	<p>( 完~~~ )</p>

				</article>
			</div>
		)
	}
}

export default Start;
