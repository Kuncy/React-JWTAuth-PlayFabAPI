import Axios from 'axios'
import React, { Component } from 'react'
import Spinner from '../../Containers/Spinner/Spinner'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CarouselComponent from '../../Containers/carousel/carousel'
import './Posts.css'

export class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            users: [],
            isloading: false
        }

    }

    componentDidMount() {
        this.setState(pre => ({
            isloading: true
        }))
        Promise.all([
            Axios.get('/posts'),
            Axios.get('/profile/profiles')
        ]).then(data => {
            this.setState(pre => ({
                isloading: false
            }))
            this.setState({ ...this.state.posts, posts: data[0].data.posts });
            this.setState({ ...this.state.users, users: data[1].data.profile });
        })
            .catch(e => {
                this.setState(pre => ({
                    isloading: false
                }))
            })
    }

    render() {
        let isLoading
        if (this.state.isloading) {
            isLoading = <Spinner />
        }
        let fetchedposts
        let allUsers
        return (
            <div className="posts">
                <div className="carousel">
                    <CarouselComponent />
                    </div>
                
                <div className="container hero">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-lg-12">
                            <h1 className="mb-3 display-3">
                                Welcome to hivemind
                    </h1>
                            <p>
                                Join with us! Login or Register.
                    </p>
                        </div>
                        <div className="col-lg-8">
                            <img  className="img-fluid" alt="img" />
                        </div>
                    </div>
                </div>       
            </div>
        )
    }
}

export default Posts
