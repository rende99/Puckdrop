package org.PuckBEService.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import org.PuckModel.model.DeleteAccountModel;
import org.PuckModel.model.User;

@Repository("userDao")
public class UserDaoImpl extends AbstractDao implements UserDao {
	
    public void saveUser(User user) {
    	Session session = this.getSession();
    	session.persist(user);
    	persist(user);
    }
    
    public void changeFavoriteTeam(int userId, int newTeamId) {
    	Session session = this.getSession();
    	String queryString = "UPDATE User u set u.favoriteTeamId= :newteamid WHERE u.id= :uid";
    	Query query = session.createQuery(queryString);
    	query.setParameter("newteamid", newTeamId);
    	query.setParameter("uid", userId);
    	query.executeUpdate();
    }
    
	public void deleteAccount(DeleteAccountModel dam) {
		Session session = this.getSession();
		Criteria criteria = getSession().createCriteria(User.class);
		criteria.add(Restrictions.eq("id", dam.getId()));
		criteria.add(Restrictions.eq("password", dam.getPassword()));
		User userToDelete = (User) criteria.uniqueResult();
		session.delete(userToDelete);
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
