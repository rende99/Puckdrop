package org.PuckBEService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.PuckBEService.dao.MessageDao;
import org.PuckModel.model.Message;

@Service("messageService")
@Transactional
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageDao dao;
	
	public void postMessage(Message message) {
		dao.saveMessage(message);
	}
	
	public List<Message> getAllMessages(int chatId) {
		return dao.findAllMessages(chatId);
	}
	
}
