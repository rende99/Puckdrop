package com.spring.mvc.model;

import java.sql.Timestamp;

public class Message {
	
	private String username;
	private String messageContent;
	private Timestamp timePosted;
	
	public Message(String username, String messageContent, Timestamp timePosted) {
		this.username = username;
		this.messageContent = messageContent;
		this.timePosted = timePosted;
	}

	public String getUsername() {
		return username;
	}
	
	public String getMessageContent() {
		return messageContent;
	}
	
	public Timestamp getTimePosted() {
		return timePosted;
	}
		
}
