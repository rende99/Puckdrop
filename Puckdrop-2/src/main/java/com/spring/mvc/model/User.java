package com.spring.mvc.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class User {
	
	@NotNull
	@Size(min=4, max=20)
	private String username;
	
	@NotNull
	@Size(min=8, max=20)
	private String password;
	
	@NotNull
	private NhlTeam favoriteTeam;
	
	public String getUsername() {
		return this.username;
	}
	
	public NhlTeam getFavoriteTeam() {
		return this.favoriteTeam;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setFavoriteTeam(NhlTeam favoriteTeam) {
		this.favoriteTeam = favoriteTeam;
	}
	
}
