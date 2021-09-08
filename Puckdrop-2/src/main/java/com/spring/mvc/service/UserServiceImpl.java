package com.spring.mvc.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.mvc.dao.UserDao;
import com.spring.mvc.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;
	
	public void saveUser(User user) {
		dao.saveUser(user);
	}
	
	public List<User> verifyUser(User user) {
		return dao.verifyUser(user);
	}
	
	public List<User> findAllUsers() {
		return dao.findAllUsers();
	}
	
	public void changePassword(String oldPassword, String newPassword) {
		dao.changePassword(oldPassword, newPassword);
	}
	
}
