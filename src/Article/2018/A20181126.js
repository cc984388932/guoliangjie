import React from 'react';
import style from "../articleDetail.css";
import nsyw from "./audio/nsyw.mp3";

class A20180807 extends React.Component{
    constructor(props){
        super();
    }
	render(){
		return (
			<div>
                
				<article className={style.article}>
					<h1>{this.props.title}</h1>
					<time>日期 : 2018年11月26日</time>
					<p>
                        优美的惨叫声伴随这鲜红的血液再一次刻在我的剑上，不知道从什么时候起，于我而言，杀人就像吃饭那样习以为常。
                        那是我的爱好，那是体现我武功的最便捷的方式，那是一种深入骨髓的乐趣。
                    </p>
                    <div><audio id="myaudio" src={nsyw} controls></audio></div>
                    <p>我环顾四周，横尸遍野。</p>
                    <p>
                        弱者就应该在自然选择中被淘汰，这不是一种悲哀，这是一种必然，是进化的唯一途径。所以我不会对弱者产生一点怜悯之
                        心，即使曾经的我和他们一样。
                    </p>
                    <p>该回家了，哦，忘了，我没有家，我除了一身绝世武功外什么都没有。</p>
                    <p></p>
                    <p></p>
                    <hr />
                    <hr />
                    <p>
                        曾经自以为是的以为她要的是你成为世界第一，所以你自以为努力的勤练武功。待你强大之后蓦然回首，她早已走丢，也终于明白
                        她只要你的唯一。然而时间的残忍之处在于它总不给任何人重来一次的机会。剑圣的悲哀就在于此，这是一种令所有人
                        都为之同情的悲哀，我在可怜他，用着那种看待弱者的眼神。
                    </p>
                    <p className={style.important}>
                        如果有来生，我愿我年少有为，碰到你的时候就已经是剑圣了。
                    </p>
					<p>( 完~~~ )</p>
				</article>
			</div>
            
		)
	}
}

export default A20180807;
