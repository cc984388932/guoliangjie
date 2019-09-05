import React from 'react';
import A20181202 from "./2018/A20181202";
import A20181126 from "./2018/A20181126";
import A20180807 from "./2018/A20180807";
import A20180701 from "./2018/A20180701";
//2019年
import A20190618 from "./2019/A20190618";
import A20190622 from "./2019/A20190622";
import A20190821 from "./2019/A20190821";

const ArticleData={
	list:[
		//2019年
		{id:"20190821",path:"/article/20190821",title:"左撇子",component:<A20190821 title="左撇子" />},
		{id:"20190622",path:"/article/20190622",title:"三年以后",component:<A20190622 title="三年以后" />},
		{id:"20190618",path:"/article/20190618",title:"我们都是阴沟里的虫子",component:<A20190618 title="我们都是阴沟里的虫子" />},
		//2018年
		{id:"20181202",path:"/article/20181202",title:"空白",component:<A20181202 title="空白"/>},
		{id:"20181126",path:"/article/20181126",title:"假如我年少有为",component:<A20181126 title="假如我年少有为" />},
		{id:"20180807",path:"/article/20180807",title:"星空",component:<A20180807 title="星空"/>},
		{id:"20180701",path:"/article/20180701",title:"从零开始",component:<A20180701 title="从零开始" />},
		
	]
}

export default ArticleData;