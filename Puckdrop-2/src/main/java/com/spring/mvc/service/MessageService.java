package com.spring.mvc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.mvc.model.Message;

@Service
public interface MessageService {
 
	public void postMessage(Message message);
    
    public List<Message> getAllMessages(int chatId);
    
}
