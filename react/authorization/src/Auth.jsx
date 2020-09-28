import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner'


//algo 
// make class component+++
// store isLoggedIn, isLoading in state+++
// login, logout handlers+++

class Auth extends React.Component {
    state = {
        isLogedIn: false,
        loading: false
    }
 
    onLogin = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => this.setState({
            loading: false,
            isLogedIn: true,
        }), 2000)
    }

    onLogout = () => {
        this.setState({
            isLogedIn: false
        })
    }

    render() {
        const {isLogedIn, loading} = this.state;
        
        if(loading){
            return <Spinner size={45}/>
        }
        return (
            !isLogedIn 
            ? <Login onLogin={this.onLogin} />
            : <Logout onLogout={this.onLogout}/>
        )
    }
};

export default Auth;
