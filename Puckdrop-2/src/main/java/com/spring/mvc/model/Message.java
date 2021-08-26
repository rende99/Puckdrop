package com.spring.mvc.model;

import java.sql.Timestamp;
import java.time.LocalDate;

public class Message {
	
	private String username;
	private String messageContent;
	private Timestamp timePosted;
	
	public Message() {
		this.username = "DEFAULT_USERNAME";
		this.messageContent = "MSG_CONTENT";
		this.timePosted = Timestamp.valueOf("2000-01-01 00:00:00");
	}
	
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
	
	public String toString() {
		return "username: " + this.getUsername() + " | content: " + this.getMessageContent()
			+ " | timePosted: " + this.getTimePosted();
	}
		
}