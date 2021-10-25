import axios from 'axios';

const SKILL_API_BASE_URL= "http://localhost:8080/api";
class SkillService{

    getSkills(){
       return axios.get(SKILL_API_BASE_URL+"/allskills");
    }

    createSkill(skill){
        return axios.post(SKILL_API_BASE_URL+"/addskill",skill);
    }

    getSkillById(id){
        return axios.get(SKILL_API_BASE_URL+"/skill/"+id);
    }

    updateSkill(skill,id){
        return axios.put(SKILL_API_BASE_URL+"/skill/"+id,skill);
    }

    deleteSkill(id){
        return axios.delete(SKILL_API_BASE_URL+"/skill/"+id);
    }
}

export default new SkillService();