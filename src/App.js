import React, { Component } from 'react';
import Pokemon from './components/pokemon/Pokemon';
import User from './components/user/User';

const userTitle = 'User App'
const pokedex = [
    'pichu', 'decidueye', 'horsea', 'kingdra', 'ivysaur', 'pikachu', 'aggron', 'florges'
]

class App extends Component {
    render() {
        return (<div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
        				<User userTitle={userTitle} />
        			</div>
        		</div>
                <br />
				<div className="row">
					<div className="col-md-12">
        				<Pokemon pokedex={pokedex} />
        			</div>
        		</div>
        	</div>
        </div>);
    }
}

export default App;