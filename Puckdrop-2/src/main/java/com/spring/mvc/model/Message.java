package com.spring.mvc.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MESSAGES")
public class Message {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="CHAT_ID")
	private int chatId;
	
	@Column(name="USER_ID")
	private int userId;
	
	@Column(name="USERNAME")
	private String username;
	
	@Column(name="MESSAGE_CONTENT")
	private String messageContent;
	
	@Column(name="TIME_POSTED")
	private Timestamp timePosted;
	
	public Message() {
		super();
	}

	public int getChatId() {
		return chatId;
	}
	
	public int getUserId() {
		return userId;
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
	
	public void setChatId(int chatId) {
		this.chatId = chatId;
	}
	
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setMessageContent(String messageContent) {
		this.messageContent = messageContent;
	}
	
	public void setTimePosted(Timestamp timePosted) {
		this.timePosted = timePosted;
	}
	
	public String toString() {
		return "chat_id: " + this.getChatId() +  " | user_id: " + this.getUserId() + 
			" | username: " + this.getUsername() + " | content: " + 
			this.getMessageContent() + " | timePosted: " + this.getTimePosted();
	}
		
}
