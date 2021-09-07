package com.spring.mvc.model;


public class NhlTeam {
	
	private String abbreviatedName;
	
	private Integer id;
	
	public String getAbbreviatedName() {
		return this.abbreviatedName;
	}
	
	public Integer getId() {
		return this.id;
	}
	
	public void setAbbreviatedName(String abbreviatedName) {
		this.abbreviatedName = abbreviatedName;
	}
	
}
