package org.PuckBackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import org.PuckModel.model.Message;

@Service
public interface MessageService {
 
	public void postMessage(Message message);
    
    public List<Message> getAllMessages(int chatId);
    
}
