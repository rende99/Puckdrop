package com.spring.mvc.model;

import javax.validation.constraints.NotNull;

public class NhlTeam {
	
	private String abbreviatedName;
	
	@NotNull
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
