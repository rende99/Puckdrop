package org.PuckBackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import org.PuckModel.model.DeleteAccountModel;
import org.PuckModel.model.User;
 
@Service
public interface UserService {
 
	public void saveUser(User user);
	
	public void changeFavoriteTeam(int userId, int newTeamId);
	
	public void deleteAccount(DeleteAccountModel dam);
    
	public List<User> verifyUser(User user);
	
    public List<User> findAllUsers();
    
    public void changePassword(String oldPassword, String newPassword);
    
    /*
    public List<Message> getAllMessages() {
        return userdao.getAllMessagesFromDb();
    }
    */
}