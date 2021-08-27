package com.spring.mvc.dao;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
 
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.github.javafaker.Faker;
import com.spring.mvc.model.Message;
import com.spring.mvc.model.NhlTeam;
import com.spring.mvc.model.User;

@Service
public class UserDao {
	
	public List<User> getAllUsersFromDb() {
		 
        // To generate the fake details for the employees.
        Faker faker = new Faker();
 
        // Employee list.
        List<User> userList = new ArrayList<User>();
 
        // Creating fake employees to be shown on the angular html page.
        for(int i=101; i<=110; i++) {
 
            // Creating employee model objects.
        	User myUser = new User();
        	NhlTeam favTeam = new NhlTeam();
        	
        	favTeam.setAbbreviatedName("NJD");
        	myUser.setName(faker.name().fullName());
        	myUser.setUsername(faker.name().lastName());
        	myUser.setFavoriteTeam(favTeam);
        	
            // Adding the employee records to the employee list.
        	userList.add(myUser);
        }
 
        return userList;
    }
	
	public List<Message> getAllMessagesFromDb() {
    	Message m1 = new Message("rende99", "my first message! Nice one", new Timestamp(0));
    	Message m2 = new Message("terryR", "my second message", new Timestamp(20));
    	Message m3 = new Message("jDEM", "my third", new Timestamp(40));
    	Message m4 = new Message("jMosko", "Fourth and final message here", new Timestamp(50));
    	Message m5 = new Message("frank1", "fifth and final message here", new Timestamp(60));
    	Message m6 = new Message("FR2142", "Sixboy", new Timestamp(80));
    	Message m7 = new Message("jackMan", "Seven number message", new Timestamp(100));
    	Message m8 = new Message("george2", "Eighth message here here here here", new Timestamp(110));
    	Message m9 = new Message("mikeD", "Nine", new Timestamp(120));
    	Message m10 = new Message("KEast", "X (tenth)", new Timestamp(140));
    	
    	List<Message> messageList = new ArrayList<Message>();
    	messageList.add(m1);
    	messageList.add(m2);    	
    	messageList.add(m3);
    	messageList.add(m4);
    	messageList.add(m5);
    	messageList.add(m6);
    	messageList.add(m7);
    	messageList.add(m8);
    	messageList.add(m9);
    	messageList.add(m10);
    	
    	return messageList;
	}
	
}
