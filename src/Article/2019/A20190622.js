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
					<time>日期 : 2019年06月22日</time>
					<p>
                        ... 也不知道她到底在忙些什么！<br/>
                        ... 忙着结婚呗 -- 我开玩笑的。<br/>
                        ... 她结婚和我有什么关系！<br/>
                        ... 你不等她回来啦？<br/>
                        ... 早就不等了，就是一时半会儿忘不掉，没关系，一定能忘掉的！<br/>
                        ——武林外传
                    </p>
                    <br/><br/>
                    <p>
                        ... 三年后，我想我应该已经结婚了，或许是我目前还没见过的女孩，我们工作稳定，早九晚五，偶尔旅行，谈谈各自遇见对方之前的人生。<br/>
                        ... 三年后，我也应该结婚了，应该也是我目前还没见过的男孩吧！<br/>
                        沉默 ——<br/>
                        ... 你要找个什么样的男生结婚啊？<br/>
                        ... 不知道！<br/>
                        沉默 ——
                    </p>
                    <p>
                        回家！
                    </p>
                    <p>( 完~~~ )</p>
				</article>
			</div>
            
		)
	}
}

export default A20180807;
