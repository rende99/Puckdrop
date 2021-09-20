package com.spring.mvc.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mvc.manager.RequestManager;
import org.PuckModel.model.DeleteAccountModel;
import org.PuckModel.model.Message;
import org.PuckModel.model.PasswordChange;
import org.PuckModel.model.TeamChange;
import org.PuckModel.model.User;

@RestController
@RequestMapping("/")
@CrossOrigin
public class RequestController {
	
	@Autowired
	RequestManager requestManager;
    
    @RequestMapping(value= "/", method= RequestMethod.GET) 
    public List<User> rootReq() {
    	return requestManager.getUserService().findAllUsers();
    }
    
    @RequestMapping(value= "/signup", method= RequestMethod.POST) 
    public ResponseEntity<User> signup(@RequestBody User user) throws IOException {
    	System.out.println(user.toString());
    	requestManager.getUserService().saveUser(user);
    	return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/login", method= RequestMethod.POST) 
    public ResponseEntity<User> login(@RequestBody User user) throws IOException {
    	System.out.println(user.toString());
    	List<User> foundUsers = requestManager.getUserService().verifyUser(user);
    	return new ResponseEntity<User>(foundUsers.get(0), HttpStatus.OK);
    }
    
    @RequestMapping(value= "/deleteaccount", method= RequestMethod.DELETE) 
    public ResponseEntity<Void> deleteUser(@RequestBody DeleteAccountModel dam) throws IOException {
    	requestManager.getUserService().deleteAccount(dam);
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
    @RequestMapping(value= "/changepassword", method= RequestMethod.POST) 
    public ResponseEntity<Void> changePassword(@RequestBody PasswordChange passwordObject) throws IOException {
    	System.out.println("changing password...");
    	requestManager.getUserService().changePassword(passwordObject.getOldPassword(), passwordObject.getNewPassword());
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
    @RequestMapping(value= "/updatefavoriteteam", method= RequestMethod.PUT) 
    public ResponseEntity<Void> changeFavoriteTeam(@RequestBody TeamChange teamObject) throws IOException {
    	requestManager.getUserService().changeFavoriteTeam(teamObject.getId(), teamObject.getFavoriteTeamId());
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
    @RequestMapping(value= "/games/{game_id}", method= RequestMethod.GET) 
    public String getGameInfo(@PathVariable("game_id") String game_id) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/game", "/" + game_id + "/feed/live");
    }
    
    @RequestMapping(value= "/users", method= RequestMethod.GET) 
    public List<User> getAllUsers() {
    	//return "HI!";
        return requestManager.getUserService().findAllUsers();
    }
    
    @RequestMapping(value= "/messages/{chatId}", method= RequestMethod.GET) 
    public List<Message> getMessages(@PathVariable("chatId") int chatId) throws IOException {
    	//return "fake message list";
    	return requestManager.getMessageService().getAllMessages(chatId);
    }
    
    @RequestMapping(value= "/messages", method= RequestMethod.POST) 
    public ResponseEntity<Message> postMessage(@RequestBody Message msg) throws IOException {
    	System.out.println(msg.toString());
    	requestManager.getMessageService().postMessage(msg);
    	return new ResponseEntity<Message>(msg, HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/teams", method= RequestMethod.GET) 
    public String getAllTeams() throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/teams");
    }
    
    @RequestMapping(value= "/teams/{id}/roster", method= RequestMethod.GET) 
    public String getRosterIds(@PathVariable("id") String id) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/teams", "/" + id + "/roster");
    }
    
    @RequestMapping(value= "/standings", method= RequestMethod.GET) 
    public String getStandings() throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/standings");
    }
    
    @RequestMapping(value= "/teamstats/{id}", method= RequestMethod.GET) 
    public String getTeamStats(@PathVariable("id") String id) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/teams", "/" + id + "?expand=team.stats");
    }
    
    @RequestMapping(value= "/people/{id}", method= RequestMethod.GET) 
    public String getPlayerInfo(@PathVariable("id") String id) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/people", "/" + id);
    }
    
    @RequestMapping(value= "/people/{id}/stats", method= RequestMethod.GET) 
    public String getPlayerStats(@PathVariable("id") String id) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/people", "/" + id + "/stats?stats=statsSingleSeason");
    }
    
    @RequestMapping(value= "/schedule/{id}", method= RequestMethod.GET) 
    public String getTeamSchedule(@PathVariable("id") String id) throws IOException {
    	LocalDate now = LocalDate.now();
    	LocalDate end = now.plusYears(1);
    	return requestManager.getApiService().consumeEndpoint("/schedule?teamId=", id + "&startDate=" + now + "&endDate=" + end);
    }
    
    @RequestMapping(value= "/schedule/{sd}/{ed}", method= RequestMethod.GET) 
    public String getScheduleBetweenDates(@PathVariable("sd") String sd, @PathVariable("ed") String ed) throws IOException {
    	return requestManager.getApiService().consumeEndpoint("/schedule?startDate=", sd + "&endDate=" + ed);
    	
    }
    
}








