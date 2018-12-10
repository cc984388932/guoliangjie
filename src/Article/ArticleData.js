import React from 'react';
import A20181202 from "./2018/A20181202";
import A20181126 from "./2018/A20181126";
import A20180807 from "./2018/A20180807";
import A20180701 from "./2018/A20180701";

const ArticleData={
	list:[
		{id:"20181202",path:"/article/20181202",title:"空白",component:<A20181202 title="空白"/>},
		{id:"20181126",path:"/article/20181126",title:"假如我年少有为",component:<A20181126 title="假如我年少有为" />},
		{id:"20180807",path:"/article/20180807",title:"星空",component:<A20180807 title="星空"/>},
		{id:"20180701",path:"/article/20180701",title:"从零开始",component:<A20180701 title="从零开始" />},
	]
}

export default ArticleData;