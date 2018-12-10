import React from 'react';
import style from "../articleDetail.css";

class A20180807 extends React.Component{
    constructor(props){
        super();
    }
	render(){
		return (
			<div>
				<article className={style.article}>
					<h1>{this.props.title}</h1>
					<time>日期 : 2018年12月02日</time>
					<p>
                        现在是晚上9点26分，今天多云。
                    </p>
                    <p>
                        我也不知道为什么，呆呆的望着天空，脑袋一片空白，却想记录一下这刻的宁静，附带背景音乐的宁静。
                    </p>
                    <p>
                        其实是想找人聊天的，可是不知道找谁~~
                    </p>
                    
					<p>( 完~~~ )</p>
				</article>
			</div>
            
		)
	}
}

export default A20180807;
