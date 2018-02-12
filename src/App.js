import React, { Component } from 'react';

import Pokemon from './components/pokemon/Pokemon';
import User from './components/user/User';
import Home from './components/home/Home';
import ManagementJob from './components/quan-ly-cong-viec/ManagementJob';
import Cart from './components/shopping/Cart';


import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';

const Child = ({ match }) => (
    <div>
        <h3>Parame: {match.params.id}</h3>
    </div>
)

class App extends Component {
    render() {
        return (
			<div className="container">
                <Router>
                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/" className="navbar-brand">Brand</Link>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/pokemon">Pokemon</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/quan-ly-cong-viec">Quản lý công việc</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/shopping">Mua hàng</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/abc">ABC</NavLink></li>
                                    </ul>
                                </div>
                            </div>                        
                        </nav>
                        <Route exact path="/" component={Home} />
                        <Route path="/users" component={User} />
                        <Route path="/pokemon" component={Pokemon} />
                        <Route path="/quan-ly-cong-viec" component={ManagementJob} />
                        <Route path="/shopping" component={Cart} />
                        <Route path="/:id" component={Child}/>
                    </div>
                </Router>
        	</div>
        );
    }
}

export default App;