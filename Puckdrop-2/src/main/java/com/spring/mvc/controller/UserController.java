package com.spring.mvc.controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mvc.model.DeleteAccountModel;
import com.spring.mvc.model.Message;
import com.spring.mvc.model.PasswordChange;
import com.spring.mvc.model.User;
import com.spring.mvc.service.ApiService;
import com.spring.mvc.service.MessageService;
import com.spring.mvc.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin
public class UserController {
	
    @Autowired
    UserService userService;
    
    @Autowired
    MessageService messageService;

    @Autowired
    ApiService apiService;
    
    @RequestMapping(value= "/", method= RequestMethod.GET) 
    public List<User> PlainOld() {
    	User u = new User();
    	u.setUsername("username111");
    	u.setPassword("pass1122");
    	System.out.println(u.getUsername());
    	List<User> allUsers = userService.findAllUsers();
    	System.out.println(allUsers);
    	return userService.findAllUsers();
    }
    
    @RequestMapping(value= "/signup", method= RequestMethod.POST) 
    public ResponseEntity<User> signup(@RequestBody User user) throws IOException {
    	System.out.println(user.toString());
    	userService.saveUser(user);
    	return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/login", method= RequestMethod.POST) 
    public ResponseEntity<User> login(@RequestBody User user) throws IOException {
    	System.out.println(user.toString());
    	List<User> foundUsers = userService.verifyUser(user);
    	return new ResponseEntity<User>(foundUsers.get(0), HttpStatus.OK);
    }
    
    @RequestMapping(value= "/deleteaccount", method= RequestMethod.DELETE) 
    public ResponseEntity deleteUser(@RequestBody DeleteAccountModel dam) throws IOException {
    	userService.deleteAccount(dam);
    	return new ResponseEntity(HttpStatus.OK);
    }
    
    @RequestMapping(value= "/changepassword", method= RequestMethod.POST) 
    public String changePassword(@RequestBody PasswordChange passwordObject) throws IOException {
    	System.out.println("changing password...");
    	userService.changePassword(passwordObject.getOldPassword(), passwordObject.getNewPassword());
    	return "Password changed.";
    }
    
    @RequestMapping(value= "/games/{game_id}", method= RequestMethod.GET) 
    public String getGameInfo(@PathVariable("game_id") String game_id) throws IOException {
    	return apiService.consumeEndpoint("/game", "/" + game_id + "/feed/live");
    }
    
    @RequestMapping(value= "/users", method= RequestMethod.GET) 
    public List<User> getAllUsers() {
    	//return "HI!";
        return userService.findAllUsers();
    }
    
    @RequestMapping(value= "/messages/{chatId}", method= RequestMethod.GET) 
    public List<Message> getMessages(@PathVariable("chatId") int chatId) throws IOException {
    	//return "fake message list";
    	return messageService.getAllMessages(chatId);
    }
    
    @RequestMapping(value= "/messages", method= RequestMethod.POST) 
    public ResponseEntity<Message> postMessage(@RequestBody Message msg) throws IOException {
    	System.out.println(msg.toString());
    	messageService.postMessage(msg);
    	return new ResponseEntity<Message>(msg, HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/teams", method= RequestMethod.GET) 
    public String getAllTeams() throws IOException {
    	return apiService.consumeEndpoint("/teams");
    }
    
    @RequestMapping(value= "/teams/{id}/roster", method= RequestMethod.GET) 
    public String getRosterIds(@PathVariable("id") String id) throws IOException {
    	return apiService.consumeEndpoint("/teams", "/" + id + "/roster");
    }
    
    @RequestMapping(value= "/standings", method= RequestMethod.GET) 
    public String getStandings() throws IOException {
    	return apiService.consumeEndpoint("/standings");
    }
    
    @RequestMapping(value= "/teamstats/{id}", method= RequestMethod.GET) 
    public String getTeamStats(@PathVariable("id") String id) throws IOException {
    	return apiService.consumeEndpoint("/teams", "/" + id + "?expand=team.stats");
    }
    
    @RequestMapping(value= "/people/{id}", method= RequestMethod.GET) 
    public String getPlayerInfo(@PathVariable("id") String id) throws IOException {
    	return apiService.consumeEndpoint("/people", "/" + id);
    }
    
    @RequestMapping(value= "/people/{id}/stats", method= RequestMethod.GET) 
    public String getPlayerStats(@PathVariable("id") String id) throws IOException {
    	return apiService.consumeEndpoint("/people", "/" + id + "/stats?stats=statsSingleSeason");
    }
    
    @RequestMapping(value= "/schedule/{id}", method= RequestMethod.GET) 
    public String getTeamSchedule(@PathVariable("id") String id) throws IOException {
    	LocalDate now = LocalDate.now();
    	LocalDate end = now.plusYears(1);
    	return apiService.consumeEndpoint("/schedule?teamId=", id + "&startDate=" + now + "&endDate=" + end);
    }
    
    @RequestMapping(value= "/schedule/{sd}/{ed}", method= RequestMethod.GET) 
    public String getScheduleBetweenDates(@PathVariable("sd") String sd, @PathVariable("ed") String ed) throws IOException {
    	return apiService.consumeEndpoint("/schedule?startDate=", sd + "&endDate=" + ed);
    	
    }
    
}








