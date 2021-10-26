import React, { Component } from 'react';
import SkillService from '../services/SkillService';

class DeleteSkill extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 place: '',
                 strategy:'',
                 reps:''
             }
        
        this.deleteSkill = this.deleteSkill.bind(this);
    }//constructor

     componentDidMount()
     {
        SkillService.getSkillById(this.state.id).then((res) =>{
          let skill = res.data;
          this.setState({strategy:skill.strategy,
                  reps:skill.reps
                });
        });  
     }
    
  deleteSkill = (e) => {
        e.preventDefault();
        let skill={
           id: this.state.id,
           place: this.state.place,
           strategy: this.state.strategy,
           reps: this.state.reps
        };

        console.log(skill);
        SkillService.deleteSkill(this.state.id).then(res => {
            
            this.props.history.push('/skills');
        })  
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
                          <h3 className="text-center">Delete Skill</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Skill ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>  
                                   <div className="form-group">
                                      <label>Place: </label>
                                      <input placeholder="Place" readOnly= "true" name="place" className="form-control"
                                         value={this.state.place} onChange={this.placeHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Strategy: </label>
                                      <input placeholder="Strategy Description" readOnly= "true" name="strategy" className="form-control"
                                         value={this.state.strategy} onChange={this.strategyHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Repeat: </label>
                                      <input placeholder="How long/how many times" readOnly="true" name="reps" className="form-control"
                                         value={this.state.reps} onChange={this.repsHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteSkill}> Delete </button>
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

export default DeleteSkill;