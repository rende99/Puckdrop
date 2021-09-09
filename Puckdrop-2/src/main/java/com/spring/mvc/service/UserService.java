package com.spring.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import com.spring.mvc.dao.UserDao;
import com.spring.mvc.model.DeleteAccountModel;
import com.spring.mvc.model.Message;
import com.spring.mvc.model.User;
 
@Service
public interface UserService {
 
	public void saveUser(User user);
	
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