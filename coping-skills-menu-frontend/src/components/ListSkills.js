import React, { Component } from 'react';
import SkillService from '../services/SkillService';

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
                <h2 className="text-center">Skills List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addSkill}> Add Skill</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
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
                                            <button onClick={() =>this.editSkill(skill.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteSkill(skill.id)} className="btn btn-danger">Delete</button> 
                                            {/* <button onClick={() =>this.viewSkill(skill.id)} className="btn btn-primary">View</button>  */}
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