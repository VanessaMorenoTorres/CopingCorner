import React, { Component } from 'react';
import SkillService from '../services/SkillService';

class ViewSkill extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 skill:{}

             }
     
        
    }//constructor

     componentDidMount()
     {
        SkillService.getSkillById(this.state.id).then((res) =>{
            this.setState({skill:res.data})
         });
     }
     
     cancel(){
        this.props.history.push('/skills');
    }
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Skill Details</h3>
                          <div className="card-body">
                              <form>  
                                  {/* <div className="form-group">
                                    <label>Skill ID: </label>
                                    <input placeholder={this.state.skill.id} readOnly={true} name="id" className="form-control" />
                                   </div> */}
                                   <div className="form-group">
                                      <label>Skill Place: </label>
                                      <input placeholder={this.state.skill.place} readOnly={true} name="place" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                      <label>Strategy Description: </label>
                                      <input placeholder={this.state.skill.strategy} readOnly={true} name="strategy" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Repeat: </label>
                                      <input placeholder={this.state.skill.reps} readOnly={true} name="reps" className="form-control" />
                                   </div> 
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Return to Full List </button>                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewSkill;