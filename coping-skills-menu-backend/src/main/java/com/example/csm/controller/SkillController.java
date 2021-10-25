package com.example.csm.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.csm.exception.ResourceNotFound;
import com.example.csm.model.Skill;
import com.example.csm.repository.SkillRepository;

@CrossOrigin
//(origins="http//localhost:3000")
@RestController
@RequestMapping("/api")
public class SkillController {

@Autowired
	private SkillRepository skillRepo;

@GetMapping("/allskills")
public List<Skill> getAllSkills(){
	return skillRepo.findAll();
}

@GetMapping("/skill/{id}")
public ResponseEntity<Skill> getSkillById(@PathVariable int id)
{
	Skill s= skillRepo.findById(id).orElseThrow(() ->  new ResourceNotFound("Skill not found"));
	return ResponseEntity.ok(s);                 
}

@GetMapping("/students/{place}")
public List<Skill> getSkillByPlace(@PathVariable String place)
{
	//return studentRepo.findByName(name);
	
	List <Skill> skills=skillRepo.findByPlace(place);
	if(skills.isEmpty())
	{
		System.out.println(new ResourceNotFound("Skills(s) with the place "+ place +" not found"));
	}
	
	return skillRepo.findByPlace(place);
}

@PutMapping("/skill/{id}")
public ResponseEntity<Skill> updateSkill(@PathVariable int id, @RequestBody Skill skill)
{
	Skill s= skillRepo.findById(id).orElseThrow(() ->  new ResourceNotFound("Student not found"));
    s.setPlace(skill.getPlace());
    s.setStrategy(skill.getStrategy());
    s.setReps(skill.getReps());
    Skill updatedSkill=skillRepo.save(s);
    return ResponseEntity.ok(updatedSkill);
}

@DeleteMapping("/skill/{id}")
public String deleteSkill(@PathVariable int id)
{
	skillRepo.findById(id).orElseThrow(() ->  new ResourceNotFound("Student not found"));
    skillRepo.deleteById(id);
    return "The skill with id: "+ id +" is removed from the database.";
}
@PostMapping("/addskill")
public Skill createSkill(@RequestBody Skill nskill) {
	return skillRepo.save(nskill);
}
}
