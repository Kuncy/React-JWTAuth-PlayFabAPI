import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../Containers/Spinner/Spinner'
import ShowPost from '../../Posts/ShowPost/ShowPost'
import './Profile.css'
export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            posts: [],
            isloading: false,
            error: {
                message: '',
                code: ''
            },
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id

        this.setState(pre => ({
            isloading: true
        }))
        const PlayFabId = JSON.parse(localStorage.getItem('PlayFabId'));
        const sessionTicket= JSON.parse(localStorage.getItem('sessionTicket'));
        console.log();
        console.log(PlayFabId);
        if (id) {
            Axios.post('https://C1533.playfabapi.com/Client/GetPlayerProfile', {
                PlayFabId
            },{
                headers:{
                    sessionTicket
                }
            })
            .then(response => {
                this.setState({ ...this.state.user, user: response.data.data.AccountInfo.Username, isloading: false });
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
            Axios.post('/Client/GetAccountInfo', {
                PlayFabId: PlayFabId
            }, {
                headers:{
                    "X-Authorization": sessionTicket
                }
            })
            .then(response => {
                console.log(response)
                this.setState({ ...this.state.user, Username: response.data.data.AccountInfo.Username, Email: response.data.data.AccountInfo.PrivateInfo.Email, PlayFabId: response.data.data.AccountInfo.PlayFabId, isloading: false });
                console.log(this.state.Username);
                console.log(this.state.Email);
                console.log(this.state.PlayFabId);
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
    }

    render() {
        const storedData = JSON.parse(localStorage.getItem('PlayFabId'));
        let path = this.props.match.path
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

        return (
            <>
                {isLoading}
                {iserror}
                <div className="container py-5 container-short">
                    <div className="row profile">
                        <div className="col-md-8 col-xs-12 order-2 order-lg-1">
                            <h2 className="text-black font-weight-light mb-4">{this.state.Username}</h2>
                            <br></br>
                            <h2 className="text-black font-weight-light mb-4">{this.state.Email}</h2>
                            {(!storedData && path !== "/profile") ? null : <Link to={"/profile/edit/" + JSON.parse(localStorage.getItem('PlayFabId'))}  >Edit Profile</Link>}
                            <p>{}</p>
                        </div>

                        <div className="col-md-4 col-xs-12 order-1 order-lg-2">
                            <img className="img-fluid w-50 rounded-circle mb-3"
                                 alt={this.state.username}></img>
                        </div>
                    </div>

                </div>


            </>
        )
    }
}

export default Profile
