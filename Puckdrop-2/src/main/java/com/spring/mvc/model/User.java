package com.spring.mvc.model;

public class User {
	
	private String name;
	private String username;
	private NhlTeam favoriteTeam;
	
	public String getName() {
		return this.name;
	} 
	
	public String getUsername() {
		return this.username;
	}
	
	public NhlTeam getFavoriteTeam() {
		return this.favoriteTeam;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setFavoriteTeam(NhlTeam favoriteTeam) {
		this.favoriteTeam = favoriteTeam;
	}
	
}
