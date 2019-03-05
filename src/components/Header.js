import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        let content = 100;
        if (0) {
            content = 5;
        }
        return (


            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h1>Header</h1>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

