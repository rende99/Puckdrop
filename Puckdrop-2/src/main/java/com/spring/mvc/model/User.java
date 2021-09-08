package com.spring.mvc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="USERS")
public class User {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Column(name="USERNAME")
	private String username;
	

	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="FAVORITE_TEAM_ID")
	private int favoriteTeamId;
	
    public User() {
        super();
    }
	
	public int getId() {
		return this.id;
	}
    
	public String getUsername() {
		return this.username;
	}
	
	public String getPassword() {
		return this.password;
	}
	
	public int getFavoriteTeamId() {
		return this.favoriteTeamId;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setFavoriteTeamId(int favoriteTeamId) {
		this.favoriteTeamId = favoriteTeamId;
	}
	
}
