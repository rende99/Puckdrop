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

import com.spring.mvc.model.Message;
import com.spring.mvc.model.User;
import com.spring.mvc.service.ApiService;
import com.spring.mvc.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
    @Autowired
    UserService userService;

    @Autowired
    ApiService apiService;
    
    @RequestMapping(value= "/users", method= RequestMethod.GET) 
    public List<User> getAllUsers() {
    	//return "HI!";
        return userService.getAllUsers();
    }
    
    @RequestMapping(value= "/messages", method= RequestMethod.GET) 
    public List<Message> getMessages() throws IOException {
    	return userService.getAllMessages();
    }
    
    @RequestMapping(value= "/messages", method= RequestMethod.POST) 
    public ResponseEntity<Message> postMessage(@RequestBody Message msg) throws IOException {
    	System.out.println(msg.toString());
    	return new ResponseEntity<Message>(msg, HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/", method= RequestMethod.GET) 
    public String PlainOld() {
    	return "root!";
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
    
}








