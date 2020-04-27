import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios  from "axios";

export default class CreateExercise extends Component{
    constructor(props){
        super(props)//call super when defining constructor of subclass

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set inital state of component by assigning obj to this.state
        this.state = {
            //properties corresponding to field of mongoDB
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users:[]
            //the reason why we have the user array is because on the page there will be a dropdown menu of all the users that are already the the database
            //will be able to chooose what user to associate with your exercise
        }
       //state is how you create variables in react so that when state is updated page is updated with new values 
    }
    //react componenent lifecyle methods
    //this will be called before anything is displayed on the page when create execrcise component is about to load, before it does this method will be called
    componentDidMount(){
        this.setState({
            users:['test user'],
            username: 'test user'
        });
    }
    
    //methods to update state properties
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }

    onSubmit(e){
        e.preventDefault(); //prevents default html form behaviour taking place

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post("http://192.168.56.1:5000/exercises/add",exercise)
            .then(res => console.log(res.data));
        
        console.log(exercise);
        
        window.location = "/"; //once you submit an exercise it will take you back to the list of exercises
    }


    render(){
        return(
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.setState.username}
                            onChange={this.onChangeUsername}>
                            {
                                
                                this.state.users.map(function(user){
                                    //this.state.users is an array of all the users which will come from the mongoDB atlas database
                                    //.map allows us to return something for each element in the array
                                    //for each user in the array it will return an option which is the option of the select box
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }    
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div>
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}