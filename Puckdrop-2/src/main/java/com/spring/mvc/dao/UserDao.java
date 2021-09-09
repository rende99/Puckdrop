package com.spring.mvc.dao;

import java.util.List;

import com.spring.mvc.model.DeleteAccountModel;
import com.spring.mvc.model.User;

public interface UserDao {
	
	public void saveUser(User user);
	
	public void deleteAccount(DeleteAccountModel dam);
	
	public List<User> verifyUser(User user);
	
	public List<User> findAllUsers();
	
	public void changePassword(String oldPassword, String newPassword);
	
}
