import React, { Component } from 'react';
import SkillService from '../services/SkillService';
import './cStyles/listSkills.css'

class ListSkills extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                skills:[] 
          }
          this.addSkill=this.addSkill.bind(this);
          this.editSkill=this.editSkill.bind(this);
          this.deleteSkill=this.deleteSkill.bind(this);
          this.viewSkill=this.viewSkill.bind(this);
      }
    
     componentDidMount() {
         SkillService.getSkills().then((res) => {
             this.setState({skills:res.data});
         });
     }
     
     addSkill()
     {
        
        this.props.history.push('/add-skill');
     }

     editSkill(id)
     {
        this.props.history.push(`/update-skill/${id}`);
        
     }

     deleteSkill(id)
     {
        this.props.history.push(`/delete-skill/${id}`);
        // SkillService.deleteSkill(id).then(res => {
        //     this.setState({
        //          skill: this.state.skills.filter(skill => skill.id !== id)
        //     })
        // })
        
     }

     viewSkill(id)
     {
        this.props.history.push(`/view-skill/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Create Your List of Strategies Here:</h2>
                <div>
                    <p>Hello</p>
                    <button className="btn btn-primary" id="btn-add" onClick={this.addSkill}> Add Skill</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered" id="tbl">
                        <thead>
                            <tr>
                                {/* <th>Skill Id</th> */}
                                <th>Place</th>
                                <th>Strategy</th>
                                <th>Reps</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.skills.map(
                                     skill =>
                                     <tr key={skill.id}>
                                         {/* <td>{skill.id}</td> */}
                                         <td>{skill.place}</td>
                                         <td>{skill.strategy}</td>
                                         <td>{skill.reps}</td>
                                         <td>
                                            <button onClick={() =>this.editSkill(skill.id)} className="btn btn-primary" id="btn-update">Update</button> 
                                            <button onClick={() =>this.deleteSkill(skill.id)} className="btn btn-danger" id="btn-delete">Delete</button> 
                                            <button onClick={() =>this.viewSkill(skill.id)} className="btn btn-primary" id="btn-view">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListSkills;