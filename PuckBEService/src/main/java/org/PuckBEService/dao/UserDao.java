package org.PuckBEService.dao;

import java.util.List;

import org.PuckModel.model.DeleteAccountModel;
import org.PuckModel.model.User;

public interface UserDao {
	
	public void saveUser(User user);
	
	public void changeFavoriteTeam(int userId, int newTeamId);
	
	public void deleteAccount(DeleteAccountModel dam);
	
	public List<User> verifyUser(User user);
	
	public List<User> findAllUsers();
	
	public void changePassword(String oldPassword, String newPassword);
	
}
