package com.spring.mvc.dao;

import java.util.List;

import com.spring.mvc.model.User;

public interface UserDao {
	
	public void saveUser(User user);
	
	public List<User> findAllUsers();
	
}
