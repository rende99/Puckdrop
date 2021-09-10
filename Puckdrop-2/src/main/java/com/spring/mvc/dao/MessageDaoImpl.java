package com.spring.mvc.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.spring.mvc.model.Message;

@Repository("messageDao")
public class MessageDaoImpl extends AbstractDao implements MessageDao {
	
    public void saveMessage(Message message) {
    	Session session = this.getSession();
    	session.persist(message);
    	persist(message);
    }
 
    @SuppressWarnings("unchecked")
    public List<Message> findAllMessages(int chatId) {
        Criteria criteria = getSession().createCriteria(Message.class);
        criteria.add(Restrictions.eq("chatId", chatId));
        return (List<Message>) criteria.list();
    }
	
}
