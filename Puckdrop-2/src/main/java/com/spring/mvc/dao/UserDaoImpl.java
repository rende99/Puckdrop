package com.spring.mvc.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaBuilder.In;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.mvc.model.User;

@Repository("userDao")
public class UserDaoImpl extends AbstractDao implements UserDao {
	
    public void saveUser(User user) {
    	Session session = this.getSession();
    	session.persist(user);
    	persist(user);
    }
    
    @SuppressWarnings("unchecked")
	public List<User> verifyUser(User user) {
    	System.out.println(user.getUsername());
    	Session session = this.getSession();
    	String queryString = "SELECT u FROM User u WHERE u.username= :uname AND u.password= :pword";
    	Query query = session.createQuery(queryString);
    	query.setParameter("uname", user.getUsername());
    	query.setParameter("pword", user.getPassword());
    	System.out.println(query.toString());
    	return query.list();

    }
 
    @SuppressWarnings("unchecked")
    public List<User> findAllUsers() {
        Criteria criteria = getSession().createCriteria(User.class);
        return (List<User>) criteria.list();
    }
    
    public void changePassword(String oldPassword, String newPassword) {
    	Session session = this.getSession();
    	String queryString = "UPDATE User u set u.password='" + newPassword + "' WHERE u.password='" + oldPassword + "'";
    	Query query = session.createQuery(queryString);
    	query.executeUpdate();
    }
	
}
