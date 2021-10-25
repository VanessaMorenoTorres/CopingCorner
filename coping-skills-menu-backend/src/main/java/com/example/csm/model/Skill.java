package com.example.csm.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="skills")
public class Skill {
	@Id
	private int id;
	private String place;
	private String strategy;
	private String reps;
	
	public Skill() {
	
	}

	public Skill(int id, String place, String strategy, String reps) {
		super();
		this.id = id;
		this.place = place;
		this.strategy = strategy;
		this.reps = reps;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}
	public String getStrategy() {
		return strategy;
	}

	public void setStrategy(String strategy) {
		this.strategy = strategy;
	}
	public String getReps() {
		return reps;
	}

	public void setReps(String reps) {
		this.reps = reps;
	}

}