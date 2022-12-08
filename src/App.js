import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import {CompatRoute, CompatRouter} from "react-router-dom-v5-compat";

class App extends Component {
    // Prevent page reload, clear input, set URL and push history on submit
    handleSubmit = (e, history, searchInput) => {
        e.preventDefault();
        e.currentTarget.reset();
        let url = `/search/${searchInput}`;
        history.push(url);
    };

    render() {
        return (
            <PhotoContextProvider>
                <HashRouter basename="/SnapScout">
                    <CompatRouter>
                    <div className="container">
                        <Route
                            render={props => (
                                <Header
                                    handleSubmit={this.handleSubmit}
                                    history={props.history}
                                />
                            )}
                        />
                        <Switch>
                            <CompatRoute
                                path="/"
                                render={() => <Redirect to="/mountain" />}
                            />

                            <CompatRoute
                                path="/mountain"
                                render={() => <Item searchTerm="mountain" />}
                            />
                            <CompatRoute path="/beach" render={() => <Item searchTerm="beach" />} />
                            <CompatRoute path="/bird" render={() => <Item searchTerm="bird" />} />
                            <CompatRoute path="/food" render={() => <Item searchTerm="food" />} />
                            <CompatRoute
                                path="/search/:searchInput"
                                render={props => (
                                    <Search searchTerm={props.match.params.searchInput} />
                                )}
                            />
                            <CompatRoute component={NotFound} />
                        </Switch>
                    </div>
                    </CompatRouter>
                </HashRouter>
            </PhotoContextProvider>
        );
    }
}export default App;
