import React,{Component} from 'react'
import { Link,Route ,Switch} from 'react-router-dom'
import Series from "../../containers/series/index"
import SingleSeries from "../../containers/SingleSeries/index"

class Main extends Component {
    state = {  }
    render() { 
        
        return (
            <Switch>
                <Route exact path="/" component={Series}/>
                <Route path="/series/:id" component={SingleSeries}/>
            </Switch>
        );
    }
}
 
export default Main;