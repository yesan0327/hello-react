import React, {Component} from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet(age) {
        alert(age);
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    render() {
        const user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        }
        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <Home
                            name={"Max"}
                            initialAge={9}
                            user={user}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                        >
                            <p>i am a child</p>
                        </Home>
                    </div>
                </div>
            </div>



        );
    }
}

export default App;
