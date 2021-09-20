package org.PuckBEService.dao;

import java.util.List;

import org.PuckModel.model.Message;

public interface MessageDao {
	
	public void saveMessage(Message message);
	
	public List<Message> findAllMessages(int chatId);
	
}
