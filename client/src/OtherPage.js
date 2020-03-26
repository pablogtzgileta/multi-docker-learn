import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends Component {
    render() {
        return (
            <div>
                Hello world, other page jeje
                <Link to="/">Go back</Link>
            </div>
        );
    }
}

export default OtherPage;
