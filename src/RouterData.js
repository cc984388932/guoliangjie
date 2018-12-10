import Home from "./Home/Home.js";
import CodeRouter from "./Code/CodeRouter.js";
import ScienceRouter from "./Science/ScienceRouter.js";
import ArticleRouter from "./Article/ArticleRouter";


let RouterData={
    list:[
        {
            id:"home",
            path:"/home",
            title:"首页",
            component:Home
        },
        {
            id:"article",
            path:"/article",
            title:"随笔",
            component:ArticleRouter,
        },
        {
            id:"code",
            path:"/code",
            title:"代码",
            component:CodeRouter
        },
        {
            id:"science",
            path:"/science",
            title:"科学",
            component:ScienceRouter
        }
    ]
}

export default RouterData;