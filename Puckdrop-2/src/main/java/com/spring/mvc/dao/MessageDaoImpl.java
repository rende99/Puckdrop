package com.spring.mvc.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.spring.mvc.model.Message;
import com.spring.mvc.model.User;

@Repository("messageDao")
public class MessageDaoImpl extends AbstractDao implements MessageDao {
	
    public void saveMessage(Message message) {
    	Session session = this.getSession();
    	session.persist(message);
    	persist(message);
    }
 
    @SuppressWarnings("unchecked")
    public List<Message> findAllMessages() {
        Criteria criteria = getSession().createCriteria(Message.class);
        return (List<Message>) criteria.list();
    }
	
}
