import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../components/header"
import Logo from "../logo.svg"

class Layout extends React.Component {
    render() {
        return (
            <div>
            <div>
                <Header/>
                <center>
                <div  style={{backgroundImage:`url(${Logo})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,textAlign:`center`,maxWidth:`960px`,border:`5px solid yellow`,padding:`20px`,fontSize:`15px`,fontStyle:`arial`,fontWeight:`lighter`}}>
                {this.props.children}
                </div>
                </center>
            </div>

            </div>
        )
    }
}

export default Layout;