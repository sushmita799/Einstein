import React from "react";
import Homepage from "./HomePage"
import SearchResult from "./SearchResult"
import history from "../history";
import ProductResults from "./productDetails/ProductResults"
import { Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/searchresult" exact component={SearchResult} />
                    <Route path="/productresults" exact component={ProductResults} />


                </Switch>
            </Router>

            <p className="rotate"> Need help ? </p>
        </div>
    }
}

export default App;