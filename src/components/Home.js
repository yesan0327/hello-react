import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.age=this.props.age;
    }

    onMakeOlder(){
        this.age+=1;
        console.log(this.age);
    }
    render() {
        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h1>Home</h1>
                        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">+1</button>
                        <p>the same function button</p>
                        <button onClick={()=>{this.onMakeOlder()}} className="btn btn-primary">+1</button>
                        <div>your name is {this.props.name}</div>
                        <div>your age is {this.age}</div>
                        <div>{this.props.user.name}'s hobbies</div>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>

                    </div>
                    <div>{this.props.children}</div>

                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    children:PropTypes.element.isRequired
};