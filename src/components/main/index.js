import React from 'react'
import { Link,Route ,Switch} from 'react-router-dom'
import Series from "../../containers/series/index"

class Main extends Component {
    state = {  }
    render() { 
        return (
            <Switch>
                <Route exact path="/" component={Series}></Route>
            </Switch>
        );
    }
}
 
export default Main;