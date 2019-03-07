import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge
        }
    }

    onMakeOlder() {
        this.setState(
            {
                age: this.state.age + 1
            }
        )
    }

    handleGreet(){
        this.props.greet(this.state.age)
    }

    render() {
        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h1>Home</h1>
                        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">+1</button>
                        <p>the same function button</p>
                        <button onClick={() => {
                            this.onMakeOlder()
                        }} className="btn btn-primary">+1
                        </button>
                        <div>your name is {this.props.name}</div>
                        <div>your age is {this.state.age}</div>
                        <div>{this.props.user.name}'s hobbies</div>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>

                    </div>
                    <div>{this.props.children}</div>
                    <div>
                    <button className='btn btn-primary' onClick={()=>{this.handleGreet()}}>Greet</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet:PropTypes.func
};