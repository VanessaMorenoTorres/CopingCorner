package com.example.csm.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.csm.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
	List<Skill> findByPlace(String place);

}
