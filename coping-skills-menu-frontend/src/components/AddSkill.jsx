import React, { Component } from 'react';
import SkillService from '../services/SkillService';

class AddSkill extends Component {
    constructor(props)
    {
        super(props)
        this.state={
        //    id: '',
           place: '',
           strategy:'',
           reps:''
        }
      
        // this.idHandler = this.idHandler.bind(this);
        this.placeHandler = this.placeHandler.bind(this);
        this.strategyHandler = this.strategyHandler.bind(this);
        this.repsHandler = this.repsHandler.bind(this);

    }//constructor

     
    // idHandler=(event) => {
    //     this.setState({
    //          id: event.target.value});
    // }

    placeHandler=(event) => {
        this.setState({
             place: event.target.value});
    }

    strategyHandler=(event) => {
        this.setState({
           strategy: event.target.value});
    }
     
    repsHandler=(event) => {
        this.setState({
             reps: event.target.value});
    }

    saveSkill = (e) => {
        e.preventDefault();
        let skill={
        //    id: this.state.id,
           place: this.state.place,
           strategy: this.state.strategy,
           reps: this.state.reps
        };
        console.log(skill);
        SkillService.createSkill(skill).then(res =>{
                this.props.history.push('/skills');  
            }).catch(err=>{
                console.log("record not saved.");
            });
    }//closing save method

    cancel(){
        this.props.history.push('/skills');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Skill</h3>
                          <div className="card-body">
                              <form>  
                                   <div className="form-group">
                                      <label>Skill Place: </label>
                                      <input placeholder="Place" name="place" className="form-control"
                                         value={this.state.place} onChange={this.placeHandler} />
                                   </div>    
                                   <div className="form-group">
                                      <label> Strategy: </label>
                                      <input placeholder="Strategy Description" name="strategy" className="form-control"
                                         value={this.state.strategy} onChange={this.strategyHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Repeat: </label>
                                      <input placeholder="How long/how many times" name="reps" className="form-control"
                                         value={this.state.reps} onChange={this.repsHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveSkill}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddSkill;

//   <div className="form-group"> //this was removed becuase user does not choose id
      //       <label> Skill ID: </label>
      //       <input placeholder="Id" name="id" className="form-control"
     //          value={this.state.id} onChange={this.idHandler} />                                
     //    </div>