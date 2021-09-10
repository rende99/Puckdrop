package com.spring.mvc.dao;

import java.util.List;

import com.spring.mvc.model.Message;

public interface MessageDao {
	
	public void saveMessage(Message message);
	
	public List<Message> findAllMessages(int chatId);
	
}
