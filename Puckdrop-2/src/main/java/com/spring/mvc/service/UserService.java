package com.spring.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import com.spring.mvc.dao.UserDao;
import com.spring.mvc.model.Message;
import com.spring.mvc.model.User;
 
@Service
public class UserService {
 
    @Autowired
    UserDao userdao;
    
    public List<User> getAllUsers() {
        return userdao.getAllUsersFromDb();
    }
    
    public List<Message> getAllMessages() {
        return userdao.getAllMessagesFromDb();
    }
}