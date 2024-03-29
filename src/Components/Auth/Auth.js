import Axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import validateForm from '../../utils/validateform'
import validEmailRegex from '../../utils/emailRegex'
import './Auth.css'
import { AuthContext } from '../../context/auth-context'
import Spinner from '../../Containers/Spinner/Spinner';
import { data } from 'jquery';




export class Auth extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)

        this.state = {
            user: {
                TitleId: "C1533",
                username: '',
                password: ''
            },
            error: {
                message: '',
                code: ''
            },
            isloading: false,
            isLoginMode: true,

            errors: {
                username: '',
                password: ''
            }
        }
    }



    mySubmitHandler = (event) => {
        this.setState(pre => ({
            isloading: true
        }))
        const auth = this.context
        event.preventDefault();

        if (validateForm(this.state.errors)) {
        } else {
        }
        if (this.state.isLoginMode) {
            Axios.post('https://C1533.playfabapi.com/Client/LoginWithPlayFab', this.state.user)
                .then(response => {
                    this.setState(pre => ({
                        isloading: false
                    }))
                    this.props.history.push('/')
                    auth.login(response.data.data.PlayFabId,response.data.data.SessionTicket)
                    let sessionTicket = response.data.data.SessionTicket
                    localStorage.setItem(
                        'sessionTicket',
                        JSON.stringify(
                            sessionTicket
                        )
                        )
                    return Axios.post('/Client/GetAccountInfo', {
                        PlayFabId: response.data.data.PlayFabId
                    },{
                        headers:{
                            "X-Authorization": sessionTicket
                    }}
                    );
                }).then(response => {
                    console.log(response.data.data.AccountInfo.PlayFabId)
                    let profile = response.data.data.AccountInfo.PlayFabId
                    
                    localStorage.setItem(
                        'PlayFabId',
                        JSON.stringify(
                            profile
                        ))


                }).catch(e => {

                    this.setState({
                        isloading: false,
                        error: {
                            ...this.state.error, message: e.response.data.message,
                            code: e.response.status
                        }
                    });
                })

        }
        else {
            this.setState(pre => ({
                isloading: true
            }))
            Axios.post('/Client/RegisterPlayFabUser', this.state.user).then(response => {
                this.setState(pre => ({
                    isloading: false
                }))
            })
                .catch(e => {
                    this.setState({ error: true });
                })
        }
        this.setState({
            user: { ...this.state.user, username: '', password: '' }
        });
    }


    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        let errors = this.state.errors;
        const { name, value } = event.target;
        switch (name) {

            
            case 'password':
                if (value.length > 0) {
                    errors.password =
                        value.length < 6
                            ? 'Password must be 6 characters long!'
                            : '';
                }

                if (value.length === 0) {
                    errors.password =
                        value.length === 0
                            ? 'Password is required!'
                            : '';
                }
                break;
            default:
                break;
        }

        this.setState({ errors, user: { ...this.state.user, [nam]: val } }, () => {
        });
    }

    switchLoginhandler = () => {
        this.setState(pre => ({
            isLoginMode: !pre.isLoginMode
        }))
    }

    render() {
        let isLoading
        let iserror

        if (this.state.isloading) {
            isLoading = (
                <>
                    <div className="container loading">
                        <div className="mar-20">
                            <Spinner />
                        </div>
                    </div>
                </>
            )
        }

        if (this.state.error.code) {
            iserror = (
                <>
                    <div className="container error container-short">
                        <div className="mar-20">
                            <h5>Error Code - {this.state.error.code}</h5>
                            <h4>Error Message - {this.state.error.message}</h4>
                        </div>
                    </div>
                </>
            )
        }
        return (<>

            {isLoading}
            {iserror}

            <div className="container container-short py-5">
                <h1 className="pt-2 py-2">{this.state.isLoginMode ? 'Sign In ' : 'Sign Up'}</h1>
                <hr></hr>
                <form onSubmit={this.mySubmitHandler} className="pt-4">
                    <div className="form-group">
                        <label htmlFor="username">Username </label>
                        <input
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            className={"form-control " + (this.state.errors.username ? 'is-invalid' : '')}
                            placeholder="Enter your username"
                            required
                            onChange={this.myChangeHandler}
                        />
                        {this.state.errors.username.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.username}</span></div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input
                            type='password'
                            name='password'
                            value={this.state.user.password}
                            className={"form-control " + (this.state.errors.password ? 'is-invalid' : '')}
                            placeholder="Enter your Password"
                            required="required"
                            data-error="Please enter your full name."
                            onChange={this.myChangeHandler}
                        />
                        {this.state.errors.password.length > 0 &&
                            <div className="mt-1"> <span className='error text-danger'>{this.state.errors.password}</span></div>}

                    </div>
                    

                    <div className="form-group">
                        <button style={{ marginRight: '15px' }}
                            type='submit'
                            className="btn btn-primary"
                            disabled={this.state.user.username && this.state.user.password
                                && (validateForm(this.state.errors)) ? '' : 'disabled'}
                        >
                            {this.state.isLoginMode ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </form>

            </div>
        </>
        )
    }
}

export default withRouter(Auth)