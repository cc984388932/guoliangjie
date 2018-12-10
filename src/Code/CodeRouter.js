import React from 'react';
import { Switch,Route } from "react-router-dom";
import Code from "./Code";


const CodeRouter=()=>{
	return (<div>
		<Switch>
			<Route exact path="/code" component={Code} />
		</Switch>
	</div>);
}

export default CodeRouter;