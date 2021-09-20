package org.PuckBEService.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.PuckBEService.dao.UserDao;
import org.PuckModel.model.DeleteAccountModel;
import org.PuckModel.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;
	
	public void saveUser(User user) {
		dao.saveUser(user);
	}
	
	public void changeFavoriteTeam(int userId, int newTeamId) {
		dao.changeFavoriteTeam(userId, newTeamId);
	}
	
	public void deleteAccount(DeleteAccountModel dam) {
		dao.deleteAccount(dam);
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
