import React,{Component} from 'react';
import axios from 'axios';
//using axios to send http requests from frontend to server endpoints on backend to connect them

export default class CreateUsers extends Component{
    constructor(props){
        super(props);//call super when defining constructor of subclass

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set inital state of component by assigning obj to this.state
        this.state = {
            //properties corresponding to field of mongoDB
            username: '',
           }
       //state is how you create variables in react so that when state is updated page is updated with new values 
    }
    //methods to update state properties
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault(); //prevents default html form behaviour taking place


        const user = {
            username: this.state.username,
        };
        
        console.log(user);
        
        //const session = localStorage.setItem('http://localhost:5000/users/add',user);

        //sending user data to the backend with post request
        //check user.js file in routes its sending a post request to the user.add api
        axios.post('http://192.168.56.1:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        });
    }

    render(){
        return(
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}