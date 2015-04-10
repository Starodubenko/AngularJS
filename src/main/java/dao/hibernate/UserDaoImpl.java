package dao.hibernate;

import dao.MappedDao;
import dao.UserDao;
import entity.User;
import org.hibernate.SessionFactory;

import javax.persistence.TypedQuery;

@MappedDao("UserDao")
public class UserDaoImpl extends AbstractDao<User> implements UserDao {
    @Override
    protected Class getEntityClass() {
        return User.class;
    }

    @Override
    public boolean alreadyExist(String login) {
        TypedQuery<User> query = em.createQuery("select u from User u where lower(u.login) = "+"lower("+login+")", User.class);
        User user = query.getSingleResult();
        return user != null;
    }

    @Override
    public User findByCredentials(String login, String password) {
        TypedQuery<User> query = em.createQuery("select u from User u where lower(u.login) = " +
                "lower('" + login + "') and u.password = '" + password + "'", User.class);
        User user = query.getSingleResult();
        return user;
    }
}
