import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../components/header"

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <center>
                <div style={{textAlign:`center`,maxWidth:`960px`}}>
                {this.props.children}
                </div>
                </center>
            </div>
        )
    }
}

export default Layout;